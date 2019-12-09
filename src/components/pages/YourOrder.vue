<template>
  <v-content class="pt-0">
      <v-parallax class="title-container" height="500" src="../../assets/shoyu-ramen.jpg">
        <h1 class="title-text">
          <span class="font-weight-bold">Review </span>Your Order
        </h1>
      </v-parallax>
    <div class="text-container pb-0">
      <h2>Your order has been submitted.</h2>
      <p>Please review your order below and let us know if any information is incorrect.</p>
    </div>
   <div class="text-container pt-0">
      <div class="responses">
        <h2 class="mt-12">Your Submission</h2>
        <p><strong>First Name:</strong> {{ response.firstName }}</p>
        <p><strong>Last Name:</strong> {{ response.lastName }}</p>
        <p><strong>Email:</strong> {{ response.email }}</p>
        <p><strong>Broth Choice:</strong> {{ response.broth }}</p>
        <p><strong>Meat Choice:</strong> {{ response.meat }}</p>
        <p><strong>Toppings:</strong>
        <span v-for="topping in response.toppings" :key="topping" class="topping"> {{ topping }}</span></p>
      </div>
    </div>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
        response: this.$store.state.response,
        toppings: this.$store.state.response.toppings
    }
  }
}
</script>

<style scoped>
div.text-container {
  min-width: 360px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1.title-text {
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 4rem;
  margin: 0 auto;
}

span.topping:after {
    content: ', ';
  }

  span.topping:last-of-type:after {
    content: '';
  }
</style>