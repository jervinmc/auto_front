<template>
  <div>
    <v-img align="start" >
      <v-row>
        <v-col cols="8">
          <div class="text-h2 white--text">
            <b>NEW CARS AVAILABLE NOW</b>
          </div>
          <div class="text-h5 white--text ">
            <b>
              Summer Release<br />
              2022
            </b>
          </div>
          <div class="my-10 white--text">
            <v-btn
              depressed
              color="#6609af"
              dark
              @click="goToMarket"
    
            >
              Shop Now
            </v-btn>
          </div>
        </v-col>
        <v-col>
            <!-- <v-img src="/car.jpg">
                
            </v-img> -->
        </v-col>
      </v-row>
      
    </v-img>
  </div>
</template>

<script>
export default {
  created(){
    
  },
  methods:{
    goToMarket(){
      window.location.href='/market'
    },
  }
}
</script>

<style>
</style>