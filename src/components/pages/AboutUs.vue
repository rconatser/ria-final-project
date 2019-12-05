<template>
    <v-content class="pt-0">
        <v-parallax class="title-container" height="700" src="../../assets/ramen-header-4.jpg">
          <h1 class="title-text"><span class="font-weight-bold">Fortune </span>Ramen</h1>
        </v-parallax>
        
        <div class="text-container pa-4 v-lazy">
          <h2 class="pt-4 pb-4">About Our Company</h2>
            <p>The Fortune Ramen Co., the latest concept added to Yummy Restaurant Group. The Fortune Ramen Co. features fresh and never frozen ramen noodles that are cooked to order and served with a selection of broths, such as the very popular TanTan, which is a rich broth of sesame, miso with a touch of spice.  The Fortune Ramen Co. also specializes in Japanese style curry served with rice and katsu.  There is also a wide variety of tempura vegetables, spam musubi, gyoza, and fried rice available at the store front from the grab-and-go warmer.</p>
        </div>  
        <div class="pa-4 py-12 v-lazy grey lighten-3">
          <v-card max-width="800px" class="mx-auto">
            <v-img height="400px"
             src="../../assets/food-items/tonkotsu-ramen.jpg" />
            <div>
              <v-card-title>Ramen Spotlight</v-card-title>
            <v-card-subtitle class="pl-4">Tonkotsu</v-card-subtitle>
            <v-card-text>Our Tonkotsu Ramen has been a favorite of many of our customers! It is made with a 24-hour pork bone broth and topped with fresh house-made chasu pork. Other toppings include chasu, bamboo shoots, green onion, egg, and sesame seeds. Rich in flavor, this ramen is a fan favorite for a reason and will have your mouth watering!</v-card-text>
            </div>
          </v-card>
        </div>
        <div class="text-container pa-4 v-lazy"> <!-- USING VUEX / Central Store / State -->
          <h2 class="pt-4 pb-12 text-center">Meet Our Staff</h2>
          <div class="d-flex staff">
            <v-card class="card" v-for="member in members" :key="member" max-width="200px">
            <div class="image" :id="member.bg"></div>
            <div class="content">
              <v-card-title class="name">{{ member.name }}</v-card-title>
            <v-card-subtitle class="position">{{ member.position }}</v-card-subtitle>
            <v-card-text class="content">{{ member.cell }}</v-card-text>
            </div>
          </v-card>
          </div>
        </div> 
    </v-content>
</template>

<script>
export default {
  props: ['members']
}
</script>

<style scoped>
  div.text-container {
    min-width: 360px;
    max-width: 1200px;
    margin: 20px auto;
    padding: 40px 20px;
  }

  h1.title-text {
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 4rem;
    margin: 0 auto;
  }

  .staff {
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  .staff .card {
    min-width: 300px;
    max-width: 100%;
  }

  .staff div.card .content {
    padding: 20px;
    text-align: center;
  }

  .staff div.card .content .v-card__title {
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .staff .card div.image {
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .staff .card div#woman {
    background-image: url(./../../assets/staff/woman.jpg);
  }

  .staff .card div#man-1 {
    background-image: url(./../../assets/staff/man-1.jpg);
    background-position: bottom;
  }

  .staff .card div#man-2 {
    background-image: url(./../../assets/staff/man-2.jpg);
  }
  
</style>