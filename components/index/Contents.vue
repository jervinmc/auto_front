<template>
  <div style="width: 1300" class="pt-10">
    <v-card width="1200" height="500" elevation="0" align="start">
      <v-row>
        <v-col cols="8">
          <div style="color: #6609af">SUPORT GLOBAL COOLING</div>
          <div class="pt-5 text-h5">
            <b>Auto-Oto Cars</b>
          </div>
          <div class="pt-5">
           Buy, Sell, Bid, Swap<br/>

            Easily buy, sell, bid and swap at our marketplace.
          </div>
        </v-col>
        <v-col align-self="center" style="cursor:pointer" @click="goToMarket">
            <v-row>
                <v-col cols="8">
                    <div class="text-h4">
                         <b>All Products </b>
                    </div>
                </v-col>
                <v-col align-self="center">
                    <v-icon>
                        mdi-arrow-right
                    </v-icon>
                </v-col>
            </v-row>
        </v-col>
      </v-row>
      <div class="pt-10 mb-10">
          <v-slide-group
        v-model="model"
        class="pa-0"
        active-class="success"
        show-arrows
      >
        <v-slide-item
          v-for="n in shopCars"
          :key="n"
        >
          <v-card
            class="ma-4 pa-5"
            height="300"
            width="250"      
          >
           <div class="text-h6 mb-2">
               {{n.brand}}
           </div>
           <div class="mb-4">
               <v-img :src="n.image" height="180" ></v-img>
           </div>
            <div class="pt-5" align="center">
                <!-- <v-btn outlined depressed color="#6609af" dark> Shop now </v-btn> -->
            </div>
          </v-card>
        </v-slide-item>
      </v-slide-group>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  created(){
    this.loadData()
  },
  methods:{
     goToMarket(){
      window.location.href='/market'
    },
    async loadData() {
      const res = await this.$axios
        .get(`/listingGetall/`, {
          headers: {},
        })
        .then((res) => {

          this.shopCars = res.data
      
        })
    },
  },
    data(){
        return{
            shopCars:[],

            image_test:[]
        }
    }
}
</script>

<style>
</style>