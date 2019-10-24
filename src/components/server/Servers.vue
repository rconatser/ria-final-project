<template>
<v-container class="grey lighten-5 card-container">
    <h2 class="pb-4">Our Servers' Status</h2>

  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <v-row>
    <v-col
      cols="12"
      md="4"
    >
      <v-card
        class="pa-8"
      >
        <!-- .col-12 .col-md-8 -->
        <h3 class="font-weight-light text-uppercase">Server One</h3>
        <h4 class="font-weight-normal status">Status: {{ status1 }}</h4>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      md="4"
      
    >
      <v-card
        class="pa-8"
      >
        <!-- .col-12 .col-md-8 -->
        <h3 class="font-weight-light text-uppercase">Server Two</h3>
        <h4 class="font-weight-normal status">Status: {{ status2 }}</h4>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      md="4"
    >
      <v-card
        class="pa-8"
      >
        <!-- .col-6 .col-md-4 -->
        <h3 class="font-weight-light text-uppercase">Server Three</h3>
        <h4 class="font-weight-normal status">Status: {{ status3 }}</h4>
      </v-card>
    </v-col>
  </v-row>

  <!-- Columns are always 50% wide, on mobile and desktop -->
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <v-card
        class="pa-8"
      >
        <h3 class="font-weight-light text-uppercase">Server Four</h3>
        <h4 class="font-weight-normal status">Status: {{ status4 }}</h4>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <v-card
        class="pa-8"
      >
        <!-- .col-6 -->
        <h3 class="font-weight-light text-uppercase">Server Five</h3>
        <h4 class="font-weight-normal status">Status: {{ status5 }}</h4>
      </v-card>
    </v-col>
  </v-row>
  <v-btn large outlined class="mt-4" color="cyan darken-3" @click="Reload"><v-icon size="24px">{{ icons.icon }}</v-icon> Update Server Status</v-btn>
</v-container>
</template>

<script>
import { eBus } from "../../main.js";

export default {
  data: () => ({
    status1: "Unknown",
    status2: "Unknown",
    status3: "Unknown",
    status4: "Unknown",
    status5: "Unknown",
    icons: {
      value: 'refresh',
      icon: 'mdi-autorenew'
    }
  }),
  created() {
    let serverStatus = [
      "Server is live and working.",
      "Server is down",
      "Server Status Unknown"
    ];
      this.status1 = serverStatus[Math.floor(Math.random() * serverStatus.length)];
      this.status2 = serverStatus[Math.floor(Math.random() * serverStatus.length)];
      this.status3 = serverStatus[Math.floor(Math.random() * serverStatus.length)];
      this.status4 = serverStatus[Math.floor(Math.random() * serverStatus.length)];
      this.status5 = serverStatus[Math.floor(Math.random() * serverStatus.length)];
  },
  methods: {
    DisplayStatus() {
      eBus.$emit("DisplayServerStatus", {
        status1: this.status1,
        status2: this.status2,
        status3: this.status3,
        status4: this.status4,
        status5: this.status5
      });
    },
    Reload() {
      window.location.reload(false); 
    }
}
};
</script>

<style scoped>
  .card-container {
      min-width: 360px;
      max-width: 1200px;
  }

/* 
  v-card {

  } */
</style>