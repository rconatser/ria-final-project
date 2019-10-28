<template>
    <v-content class="pt-0">
        <v-parallax class="title-container" height="700" src="../../assets/ramen-header-2.jpg">
          <h1 class="title-text"><span class="font-weight-bold">Contact </span>Us</h1>
        </v-parallax>
        <div class="text-container">
            <h2>Text goes here</h2>
            <p>Text</p>
        </div>
    </v-content>
</template>

<script>
export default {

}
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