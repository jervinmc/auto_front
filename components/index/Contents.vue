<template>
  <div style="width: 1300" class="pt-10">
    <v-card width="1200" height="500" elevation="0" align="start">
      <v-row>
        <v-col cols="8">
          <div style="color: #6609af">SUPORT GLOBAL COOLING</div>
          <div class="pt-5 text-h5">
            <b>Burn carbohydrates, not hydrocarbons</b>
          </div>
          <div class="pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </div>
        </v-col>
        <v-col align-self="center">
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
            height="340"
            width="250"      
          >
           <div class="text-h6 mb-2">
               {{n.name}}
           </div>
           <div class="mb-4">
               <v-img :src="n.image" height="180" ></v-img>
           </div>
            <div class="pt-5" align="center">
                <v-btn outlined depressed color="#6609af" dark> Shop now </v-btn>
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
    data(){
        return{
            shopCars:[{"name":"Navarra","image":'https://stimg.cardekho.com/images/carexteriorimages/930x620/Nissan/Magnite/8127/1608191740345/front-left-side-47.jpg?tr=w-880,h-495',},{"name":"Urvan","image":'https://stimg.cardekho.com/images/carexteriorimages/930x620/Nissan/Kicks/7828/1593410136460/front-left-side-47.jpg?tr=w-880,h-495',},{"name":"Navarra","image":'https://www-asia.nissan-cdn.net/content/dam/Nissan/ph/vehicles/navara-bmc/product-code/product-version/teaser/Navara-BMC_Web-Banner-FINAL.jpg.ximg.full.hero.jpg',},{"name":"Fortuner","image":'https://upload.wikimedia.org/wikipedia/commons/3/3b/2020_Nissan_Sentra_SV%2C_front_10.22.20.jpg',},{"name":"Estrada","image":'https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/wheels/wp-content/uploads/2021/11/2022-Nissan-Rogue-powertrain-hero.jpg'}],

            image_test:['https://stimg.cardekho.com/images/carexteriorimages/930x620/Nissan/Magnite/8127/1608191740345/front-left-side-47.jpg?tr=w-880,h-495','https://stimg.cardekho.com/images/carexteriorimages/930x620/Nissan/Kicks/7828/1593410136460/front-left-side-47.jpg?tr=w-880,h-495','https://www-asia.nissan-cdn.net/content/dam/Nissan/ph/vehicles/navara-bmc/product-code/product-version/teaser/Navara-BMC_Web-Banner-FINAL.jpg.ximg.full.hero.jpg','https://upload.wikimedia.org/wikipedia/commons/3/3b/2020_Nissan_Sentra_SV%2C_front_10.22.20.jpg','https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/wheels/wp-content/uploads/2021/11/2022-Nissan-Rogue-powertrain-hero.jpg']
        }
    }
}
</script>

<style>
</style>