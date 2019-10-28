<template>
    <v-content class="pt-0">
        <v-parallax class="title-container" height="700" src="../../assets/ramen-header-4.jpg">
          <h1 class="title-text"><span class="font-weight-bold">Fortune </span>Ramen</h1>
        </v-parallax>
        
        <v-lazy>
          <div class="text-container pa-4">
          <h2 class="pt-4 pb-4">About Our Company</h2>
            <p>The Fortune Ramen Co., the latest concept added to Yummy Restaurant Group. The Fortune Ramen Co. features fresh and never frozen ramen noodles that are cooked to order and served with a selection of broths, such as the very popular TanTan, which is a rich broth of sesame, miso with a touch of spice.  The Fortune Ramen Co. also specializes in Japanese style curry served with rice and katsu.  There is also a wide variety of tempura vegetables, spam musubi, gyoza, and fried rice available at the store front from the grab-and-go warmer.</p>
        </div>  
        </v-lazy>
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