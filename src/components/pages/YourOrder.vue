<template>
  <v-content class="pt-0">
      <v-parallax class="title-container" height="500" src="../../assets/shoyu-ramen.jpg">
        <h1 class="title-text">
          <span class="font-weight-bold">Review </span>Your Order
        </h1>
      </v-parallax>
    <div class="text-container">
      <h2>Your order has been submitted.</h2>
      <p>Please review your order below and let us know if any information is incorrect.</p>
    </div>
  </v-content>
</template>

<script>
export default {};
</script>

<style scoped>
div.text-container {
  min-width: 360px;
  max-width: 1200px;
  margin: 20px auto;
}

h1.title-text {
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 4rem;
  margin: 0 auto;
}
</style>