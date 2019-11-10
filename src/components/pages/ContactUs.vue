<template>
    <v-content class="pt-0">
      <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css" rel="stylesheet">

        <v-parallax class="title-container" height="500" src="../../assets/ramen-header-2.jpg">
          <h1 class="title-text"><span class="font-weight-bold">Contact </span>Us</h1>
        </v-parallax>
        <div class="text-container">
            <h2>Have a question or concern?</h2>
            <p>Call or email us today!</p>
        </div>
        <div class="bg-grey text-container">
            <div class="group">
              <v-icon color="red">$icons.values.phone</v-icon>
              <p>801-555-8631</p>
            </div>
            <div class="group">
              <v-icon>$icons.values.email</v-icon>
              <p>info@fortuneramen.com</p>
            </div>
            <div class="group">
              <v-icon>$icons.values.location</v-icon>
              <p>1283 N University Ave #102<br />Provo, UT 84604</p>
            </div>
        </div>
    </v-content>
</template>

<script>
export default {
    icons: {
      iconfont: 'mdi',
      values: {
        phone: 'mdiCellphoneAndroid',
        email: 'mdiEmailOutline',
        location: 'mdiMapMarker'
      }
    }
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
  
</style>