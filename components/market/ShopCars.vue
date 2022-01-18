<template>
  <div>
  <v-dialog v-model="isOpenDetails" persistent width="1200">
    <v-card class="pa-10" width="1200">
      <div align="end">
        <v-icon @click="isOpenDetails=false">mdi-close</v-icon>
      </div>
      <div>
        <v-row>
          <v-col cols="6" class="pa-10">
            <v-img :src="selectedItem.image" height="400"></v-img>
          </v-col>
          <v-col cols="6">
              <div class="text-h2 mb-10">
                <b>  {{selectedItem.title}}</b>
              </div>
              <div class="text-h4">
               Php {{formatPrice(selectedItem.price)}}
              </div>
              <div>
                {{selectedItem.car_brand}}
              </div>
              <div class="mb-10">
                {{selectedItem.car_category}}
              </div>
              <div >
               <b> Milleage</b> :  {{selectedItem.milleage}}
              </div>
              <div>
               <b> Model </b> : {{selectedItem.model}}
              </div>
              <div class="mb-0">
               <b> Color </b> : {{selectedItem.color}}
              </div>
              <div class="mb-0">
               <b> Category </b> : {{selectedItem.category}}
              </div>
              <div class="mb-5">
               <b> Fuel Type </b> : {{selectedItem.fuel_type}}
              </div>

              <div>
                <v-textarea outlined v-model="comment" hide-details="" class="pb-1" placeholder="Comments...">

                </v-textarea>
                <div class="mb-10" align="end">
                <v-btn outlined depressed color="success" dark> COMMENTS </v-btn>
            </div>
              </div>
              <div class="pt-5" align="center">
                <v-btn  depressed color="#6609af" dark width="500"> CONTACT SELLER </v-btn>
            </div>
          </v-col >
        </v-row>
        <div class="pt-5">
          <v-divider></v-divider>
        </div>
        <div>
            
        </div>
      </div>
    </v-card>
  </v-dialog>
    <!--eslint-disable-->
   <div class="pl-5 pr-15 pt-10">
      <v-text-field placeholder="Search" outlined v-model="search" append-icon="mdi-magnify" solo ></v-text-field>
   </div>
      <v-data-iterator
        v-if="token!=null"
        :items="active_page==1 ? itemSell : active_page==2 ? itemBid : active_page==3 ? itemSwap : itemRecommended"
        :items-per-page="-1"
        :search="search"
        hide-default-footer
      >
      <template v-slot:default="{ items }">
      <v-row>
        <v-col cols="12" lg="3" md="3" xl="3"  v-for="index in items" :key="index">
        <v-card
        height="450"
          :loading="loading"
          class="mx-auto my-12"
          max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-img
            height="150"
            :src="index.image"
          ></v-img>
          <v-card-title>{{index.name}}</v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">Php {{index.price}}</div>

            <div>
              {{index.descriptions}}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="viewItem(index)">
              View
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      </v-row>
      </template>
      </v-data-iterator>
      <v-data-iterator
        v-if="token==null"
        :items="active_page==1 ? itemSell : active_page==2 ? itemBid : itemSwap "
        :items-per-page="-1"
        :search="search"
        hide-default-footer
      >
      <template v-slot:default="{ items }">
      <v-row>
        <v-col cols="12" lg="3" md="3" xl="3"  v-for="index in items" :key="index">
        <v-card
        height="450"
          :loading="loading"
          class="mx-auto my-12"
          max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-img
            height="150"
            :src="index.image"
          ></v-img>
          <v-card-title>{{index.name}}</v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">Php {{index.price}}</div>

            <div>
              {{index.descriptions}}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              View
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      </v-row>
      </template>
      </v-data-iterator>
   <v-skeleton-loader
          v-for="n in 5"
          :key="n"
          v-if="isLoading"
          type="list-item-avatar-two-line"
          class="my-2"
        ></v-skeleton-loader>
  </div>
</template>

<script>
export default {
  computed:{
    itemSwap(){
      if(this.itemFiltered == 'All'){
         return this.listing.filter(item=>{
        return item.isSwap
      });
      }
      else{
         return this.listing.filter(item=>{
        return item.isSwap && item.brand == this.itemFiltered
      });
      }
     
    },
    itemBid(){
     if(this.itemFiltered == 'All'){
         return this.listing.filter(item=>{
        return item.isBid
      });
      }
      else{
         return this.listing.filter(item=>{
        return item.isBid && item.brand == this.itemFiltered
      });
      }
    },
    itemSell(){

        if(this.itemFiltered == 'All'){
         return this.listing.filter(item=>{
        return item.isSell
      });
      }
      else{
         return this.listing.filter(item=>{
        return item.isSell && item.brand == this.itemFiltered
      });
      }
    },
    itemRecommended(){
      return this.listing.filter(item=>{
        return item.brand==localStorage.getItem('brand')
      });
    },
  },
  created(){
    this.loadData()
    
  },

    data(){
      return{
        isOpenDetails:false,
        selectedItem:[],
        listing:[],
        search:'',
        token:null,
        isLoading:false
      }
    },
    props:['active_page','itemFiltered'],
    methods:{
       async addActivity() {
      try {
        let form_data = new FormData();
        form_data.append("user_id", localStorage.getItem('id'));
        form_data.append("title", this.selectedItem.title);
        form_data.append("image", this.selectedItem.image);
        form_data.append("price", this.selectedItem.price);
          const response = await this.$axios
            .post("/activity/", form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
            });
      } catch (error) {
        alert(error)
      }
    },
      formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
      viewItem(val){
         this.selectedItem = val
        this.isOpenDetails = true
        this.addActivity()
      },
      loadData(){
        this.token = localStorage.getItem('token')
        if(localStorage.getItem('token')==null){
          this.listingFree()
        }
        else{
              this.listingGetall()
        }
    
    },
     async listingGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/listing/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.listing = res.data;
          this.isLoading = false;
        });
    },
    async listingFree() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/listingGetall/`, {
          headers: {
            
          },
        })
        .then((res) => {
          console.log(res.data);
          this.listing = res.data;
          this.isLoading = false;
        });
    },
    }
}
</script>

<style>
</style>