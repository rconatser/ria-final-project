<template>
  <v-content class="pt-0">
    <v-parallax class="title-container" height="500" src="../../assets/ramen-header-3.jpg">
      <h1 class="title-text">
        <span class="font-weight-bold">Order</span>Here
      </h1>
    </v-parallax>
    <div class="text-container pb-0">
      <h2 class="pb-4">Make Your Ramen</h2>
      <p>Select from the options below to create your custom ramen masterpiece!</p>
      <p>
        <em>Note: All ramen dishes are served with standard ramen noodles.</em>
      </p>
    </div>

    <div class="pt-0">
      <order-form></order-form>
    </div>
    
  </v-content>
</template>
<script>
import Form from './../shared/Form.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    'order-form': Form
  }
};


</script>

<style scoped>
  form#order label {
    display: block;
    font-size: 20px;
  }

  form#order input[type="submit"] {
    padding: 15px 30px;
    background-color: #D84315;
    color: white;
    text-transform: uppercase;
    margin: 20px 0;
    transition: all 0.2s ease-in-out;
    font-weight: 600;
    letter-spacing: 1px;
  }

  form#order input[type="submit"]:hover,
  form#order input[type="submit"]:focus,
  form#order input[type="submit"]:target {
    background-color: #E65100;
    cursor: pointer;
  }

  form#order h3 {
    text-align: center;
    margin: 20px 0;
  }

  form#order img {
    width: 100px;
    height: 100px;
    border-radius: 100px;
  }

  form#order div.form-group {
    display: flex;
    justify-content: center;
    align-items: top;
    text-align: center;
  }

  form#order div.form-group div {
    margin: 20px;
  }

  ul li {
    list-style: none;
    display: inline;
  }

  ul li:after {
    content: ', ';
  }

  ul li:last-child:after {
    content: '';
  }

  div.text-container {
    min-width: 360px;
    max-width: 1200px;
    margin: 20px auto;
    text-align: center;
    padding: 40px 20px;
  }

  h1.title-text {
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 4rem;
    margin: 0 auto;
  }

  label span.req {
    color: red;
  }

  div.personal {
    padding: 40px 0;
  }

  div.personal input {
    border-bottom: 2px solid #ddd;
    margin-right: 10px;
    transition: 0.2s ease-in-out all;
  }

  div.personal input:hover,
  div.personal input:target,
  div.personal input:focus {
    border-color: #D84315;
  }
</style>