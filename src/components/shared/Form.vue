<template>
    <v-content>
     <div class="text-container">
    <form ref="form" type="POST">
        <!-- Required Text Fields (Name / Email) -->
        <div class="form-group">
            <h3 class="mb-0">Your Information</h3>
            <v-text-field
            class="text-field"
            v-model="firstName"
            :error-messages="firstNameErrors"
            :counter="12"
            label="First Name"
            required
            @blur="$v.firstName.$touch()"
            ></v-text-field>
            <v-text-field
            class="text-field"
            v-model="lastName"
            :error-messages="lastNameErrors"
            :counter="14"
            label="Last Name"
            required
            @blur="$v.lastName.$touch()"
            ></v-text-field>
            <v-text-field
            class="text-field"
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @blur="$v.email.$touch()"
            ></v-text-field>
        </div>
        <div class="form-group">
            <h3 class="mb-0">The Essentials</h3>
            <!-- Required Broth Choice -->
            <v-select 
            class="select-field"
            v-model="broth"
            :items="broths"
            :error-messages="brothErrors"
            label="Choice of Broth"
            required
            @blur="$v.broth.$touch()"
            ></v-select>
            <!-- Required Meat Choice -->
            <v-select
            class="select-field"
            v-model="meat"
            :items="meats"
            :error-messages="meatErrors"
            label="Choice of Meat"
            required
            @blur="$v.meat.$touch()"
            ></v-select>
        </div>
        <div class="form-group">
            <!-- Optional Toppings -->
            <div class="toppings">
                <h3>Choose your Toppings</h3>
                <v-checkbox 
                class="checkboxes"
                v-model="selectedToppings"
                v-for="topping in toppings"
                :key="topping"
                :label="topping"
                :value="topping"
                ></v-checkbox>
            </div>
        </div>
        <v-btn
        color="orange darken-4 white--text"
        class="mt-12"
        v-ripple
        :disabled="$v.$invalid"
        @click="submit"
        >
        Submit Order
        </v-btn>
    </form>
    </div>
    <div class="grey lighten-3 full-width">
        <div class="responses text-container">
            <h2 class="mt-12">Verify Your Submission</h2>
            <p><strong>First Name:</strong> {{ firstName }}</p>
            <p><strong>Last Name:</strong> {{ lastName }}</p>
            <p><strong>Email:</strong> {{ email }}</p>
            <p><strong>Broth Choice:</strong> {{ broth }}</p>
            <p><strong>Meat Choice:</strong> {{ meat }}</p>
            <p><strong>Toppings:</strong>
                <span v-for="selectedTopping in selectedToppings" :key="selectedTopping" class="topping">
                    {{ selectedTopping }}</span></p>
        </div>
    </div>
    </v-content>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      firstName: { required, maxLength: maxLength(12) },
      lastName: { required, maxLength: maxLength(14) },
      email: { required, email },
      broth: { required },
      meat: { required },
      selectedToppings: {
        checked (val) {
          return val
        },
      },
    },

    data () {
          return {
            broths: ['Chicken Broth','Beef Broth','Miso Broth','Shio Broth','Shoyu Broth','Tonkotsu Broth'],
            meats: ['Sliced Chicken','Sliced Steak','Chasu (Pork)','Shrimp','No Meat'],
            toppings: ['Green Onions','Onions','Broccoli','Carrots','Corn','Cilantro','Lime','Mushrooms','Red Bell Pepper','Seseme Seeds','Soft Boiled Egg','Nori','Naruto','All Toppings','No Toppings'],
            selectedToppings: [],
            firstName: '',
            lastName: '',
            email: '',
            broth: null,
            meat: null
          }
      },

    computed: {
      brothErrors () {
        const errors = []
        if (!this.$v.broth.$dirty) return errors
        !this.$v.broth.required && errors.push('Broth Choice is required')
        return errors
      },
      meatErrors () {
        const errors = []
        if (!this.$v.meat.$dirty) return errors
        !this.$v.meat.required && errors.push('Meat Choice is required')
        return errors
      },
      firstNameErrors () {
        const errors = []
        if (!this.$v.firstName.$dirty) return errors
        !this.$v.firstName.maxLength && errors.push('First Name must be at most 12 characters long')
        !this.$v.firstName.required && errors.push('First Name is required.')
        return errors
      },
      lastNameErrors () {
        const errors = []
        if (!this.$v.lastName.$dirty) return errors
        !this.$v.lastName.maxLength && errors.push('Last Name must be at most 14 characters long')
        !this.$v.lastName.required && errors.push('Last Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      }
    },
    methods: {
        submit () {
            this.$store.commit("updateInfo", {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                broth: this.broth,
                meat: this.meat,
                toppings: this.selectedToppings
            });
            this.$router.push("/review");
        }
    }
}
</script>

<style scoped>
.form-group h3 {
    display: block;
    width: 100%;
    margin: 20px 0 30px;
}

.form-group .toppings {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.form-group .checkboxes {
    width: 50%;
}

span.topping:after {
    content: ', ';
}

span.topping:last-of-type:after {
content: '';
}

.full-width {
    margin: 0 auto;
    margin-top: 40px;
    text-align: center;
    padding: 40px 20px;
}

.text-container {
    min-width: 360px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding: 0 20px 40px;
}

@media only screen and (min-width: 768px) {
    .form-group {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .form-group .text-field {
        max-width: 30%;
        margin: 10px 2.5%;
    }

    .form-group .select-field {
        max-width: 45%;
        margin: 10px 2.5%;
    }

    .form-group .checkboxes {
        max-width: 15%;
        margin: 5px 20px;
    }
}

</style>