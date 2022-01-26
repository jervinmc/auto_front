<template>
  <div :class="$vuetify.breakpoint.width>400 ? 'pa-10' : 'pa-0'">
    <v-row>
      <!-- <v-col cols="2" class="mr-3">
        <div>
          Brand
        </div>
        <div>
          <v-select outlined :items="brand" v-model="brand_type"></v-select>
        </div>
      </v-col> -->
    <v-col cols="12" lg="2" md="2" xl="2">
      <v-expansion-panels
        flat
        v-model="isBrandExpanded"
        @change="isBrandExpanded = !isBrandExpanded"
      >
        <v-expansion-panel class="mb-2">
          <v-expansion-panel-header
            class="px-5 menu-item"
          
           
          >
            <!-- class="px-7" -->
            <span>
              <v-icon>mdi-car</v-icon>
            </span>
            <span class="ml-n1 nav-title">Brand</span>
          </v-expansion-panel-header>
           <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card flat light @click="filter('All')">
              <v-card-text class="black--text">
               <b> <span>All</span></b>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content v-for="item in brand" :key="item" >
            <v-divider></v-divider>
            <v-card flat light @click="filter(item)">
              <v-card-text class="black--text">
               <b> <span>{{item}}</span></b>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
      <v-divider vertical></v-divider>
      <v-col>
        <v-container fluid class="pb-0">
          <v-row class="pl-0" no-gutters align="start" elevation="5">
            <v-col
              v-if="token != null && account_type == 'Customer'"
              cols="3"
              :class="active_page == 0 ? 'tab active pa-5' : 'tab pa-5'"
              align="center"
              @click="active_page = 0"
            >
              <v-row class="tab-contents justify-start ml-6">
                <v-icon class="mr-2 action-icons"
                  >mdi-account-multiple-outline</v-icon
                ><b
                  v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                  class="tab-name"
                  >Recommended Items</b
                >
              </v-row>
            </v-col>
            <v-col
              cols="3"
              :class="active_page == 1 ? 'tab active pa-5' : 'tab pa-5'"
              align="center"
              @click="active_page = 1"
            >
              <v-row class="tab-contents justify-start ml-6">
                <v-icon class="mr-2 action-icons"
                  >mdi-account-multiple-outline</v-icon
                ><b
                  v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                  class="tab-name"
                  >Shop Cars</b
                >
              </v-row>
            </v-col>
            <v-col
              cols="3"
              :class="active_page == 2 ? 'tab active pa-5' : 'tab pa-5'"
              align="center"
              @click="active_page = 2"
            >
              <v-row class="tab-contents justify-start ml-6">
                <v-icon class="mr-2 action-icons"
                  >mdi-format-list-bulleted</v-icon
                ><b
                  v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                  class="tab-name"
                  >Bidding</b
                >
              </v-row>
            </v-col>
            <v-col
              cols="3"
              :class="active_page == 3 ? 'tab active pa-5' : 'tab pa-5'"
              align="center"
              @click="active_page = 3"
            >
              <v-row class="tab-contents justify-start ml-6">
                <v-icon class="mr-2 action-icons"
                  >mdi-format-list-bulleted</v-icon
                ><b
                  v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                  class="tab-name"
                  >Swap Cars</b
                >
              </v-row>
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-container>
        <div class="px-3">
          <v-card flat class="card-settings pl-10 pt-0" elevation="2">
            <shop-cars :active_page="active_page" :itemFiltered="itemFiltered" />
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ShopCars from './ShopCars.vue'
export default {
  created() {
    this.loadData()
  },
  methods: {
     formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    filter(val){
      this.itemFiltered = val;
    },
    async eventsGetall() {
      this.color=[]
      this.isLoading = true;
      const res = await this.$axios
        .get(`/referencegetall/`, {
          headers: {
            // Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.reference = res.data;
          this.reference.map(item=>{
             if(item.reference_type=='Car Color'){
               this.color.push(item.name)
             }
             else if(item.reference_type=='Car Transmissions'){
               this.transmission.push(item.name)
             }
             else if(item.reference_type=='Car Model'){
               this.model.push(item.name)
             }
              else if(item.reference_type=='Car Brand'){
               this.brand.push(item.name)
             }
             else if(item.reference_type=='Category'){
               this.category.push(item.name)
             }
             else if(item.reference_type=='Fuel Type'){
               this.fuel_type.push(item.name)
             }
          })
          this.isLoading = false;
        });
    },
    loadData() {
      this.token = localStorage.getItem('token')
      this.account_type = localStorage.getItem('account_type')
      if (this.account_type == 'Customer') this.active_page = 0
      else this.active_page = 1
      this.eventsGetall()
    },
  },
  components: { ShopCars },
  data() {
    return {
      itemFiltered:'All',
      isBrandExpanded:false,
      model:[],
      brand:[],
      transmission:[],
      color:[],
      category:[],
      fuel_type:[],
      active_page: 0,
      token: null,
    }
  },
}
</script>

<style lang="scss">
.tab {
  margin-right: -5px;
  background: #ececec;
  border-radius: 20px 60px 0px 0px;
  cursor: pointer;
  box-shadow: 0px 0px 2px #888888;
  &:hover {
    background: #fff;
  }
  &.active {
    background: #fff;
    // font-weight: bold;
    color: primary;
    // font-size: 20px;
    font-family: avenir-black;
    z-index: 1;
    box-shadow: 0px 0px 0px;
  }
}
</style>

