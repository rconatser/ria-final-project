<template>
    <v-content class="pt-0">
        <v-parallax class="title-container" height="500" src="../../assets/parallax-bg.jpg">
          <h1 class="title-text"><span class="font-weight-bold">Happy Dog</span> Hosting Services</h1>
          <img src="../../assets/doggo.png" alt="doggo"/>
        </v-parallax>
        
        <div class="text-container pa-4">
          <h2 class="pt-4 pb-4">About Our Company</h2>
            <p>Owners, Finn and Shaw wanted to combine their love of dogs and computer skills in a single company to help bring both helpful services and happy smiles all in one place! To help better understand our mascot: according to the American Kennel Club, the Labrador Retriever is the most popular for the 28th straight year. The Lab's sweet nature and loyalty help keep it at the number one spot. Our company, being centered around the noble breed, the Labrador Retriever was bred to be both a friendly companion and a useful working dog breed. Historically, they earned their keep as a fisherman’s helper: hauling nets, fetching ropes, and retrieving fish from the chilly North Atlantic.
            </p>

            <p>Today’s Lab is as good-natured and hardworking as their ancestors, and they’re also America’s most popular breed. Modern Labs work as retrievers for hunters, assistance dogs, show competitors, and search and rescue dogs, among other canine jobs. Like us, Labs have such a good reputation that many people think they don't need to bother with training.</p>
            <p>Contact us today to see how we can assist you in your online hosting needs!</p>
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

  .title-container img {
      object-fit: contain;
      position: absolute;
      top: 325px;
      right: 5%;
  }

  
</style>