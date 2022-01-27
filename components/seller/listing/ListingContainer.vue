<template>
  <div>
     <v-dialog v-model="isOpenDetails" persistent width="1200">
    <v-card class="pa-10" width="1200">
      <div align="end">
        <v-icon @click="isOpenDetails=false">mdi-close</v-icon>
      </div>
      <v-row>
          <v-col>
            <div>Title</div>
            <div>
              <v-text-field outlined v-model="selectedItem.title"></v-text-field>
            </div>
          </v-col>
          <v-col>
            <div>Price</div>
            <div>
              <v-text-field outlined v-model="selectedItem.price"></v-text-field>
            </div>
          </v-col>
          <v-col>
            <div>Model</div>
            <div>
              <v-text-field outlined v-model="selectedItem.model"></v-text-field>
            </div>
          </v-col>
      </v-row>
       <v-row>
          <v-col>
            <div>Brand</div>
            <div>
              <v-text-field outlined v-model="selectedItem.brand"></v-text-field>
            </div>
          </v-col>
          <v-col>
            <div>Year</div>
            <div>
              <v-text-field outlined v-model="selectedItem.year"></v-text-field>
            </div>
          </v-col>
          <v-col>
            <div>Transmission</div>
            <div>
              <v-text-field outlined v-model="selectedItem.transmission"></v-text-field>
            </div>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
            <div>Brand</div>
            <div>
              <v-text-field outlined v-model="selectedItem.brand"></v-text-field>
            </div>
          </v-col>
          <v-col>
            <div>Year</div>
            <div>
              <v-text-field outlined v-model="selectedItem.year"></v-text-field>
            </div>
          </v-col>
          <v-col>
            <div>Transmission</div>
            <div>
              <v-text-field outlined v-model="selectedItem.transmission"></v-text-field>
            </div>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
            <div>Color</div>
            <div>
              <v-text-field outlined v-model="selectedItem.color"></v-text-field>
            </div>
          </v-col>
          <v-col>
            <div>Condition</div>
            <div>
              <v-text-field outlined v-model="selectedItem.condition"></v-text-field>
            </div>
          </v-col>
          <v-col>
            <div>Fuel Type</div>
            <div>
              <v-text-field outlined v-model="selectedItem.fuel_type"></v-text-field>
            </div>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
            <div>Variant</div>
            <div>
              <v-text-field outlined v-model="selectedItem.variant"></v-text-field>
            </div>
          </v-col>
          <v-col>
            <div>Milleage</div>
            <div>
              <v-text-field outlined v-model="selectedItem.milleage"></v-text-field>
            </div>
          </v-col>
          <v-col>
            <div>Body Type</div>
            <div>
              <v-text-field outlined v-model="selectedItem.body_type"></v-text-field>
            </div>
          </v-col>
      </v-row>
      <div align="center">
                <v-btn outlined depressed color="#6609af" dark @click="editListing" :loading="buttonLoad"> Submit </v-btn>
            </div>
    </v-card>
  </v-dialog>
     <!-- <v-snackbar
      top
      absolute
      bottom
      color="success"
      outlined
      centered
      v-model="isDelete"
    >
      Successfull !
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="isDelete = false">
          Close
        </v-btn>
      </template>
    </v-snackbar> -->
      <v-dialog v-model="isDelete" width="500" persistent>
    <v-card class="pa-10">
    <div align="center" class="text-h6">Delete Listing</div>
    <div align="center" class="pa-10">
       Are you sure you want to delete?
    </div>
      <v-card-actions>
        <v-row align="center">
            <v-col align="end">
                <v-btn color="red" text @click="isDelete=false"> Cancel </v-btn>
            </v-col>
            <v-col>
                <v-btn color="success" :loading="buttonLoad" text @click="deleteListing"> Confirm </v-btn>
            </v-col>
        </v-row>  
      </v-card-actions>
    </v-card>
  </v-dialog>
      <v-row>
        <v-col>
          <div class="text-h5 pl-10" >
            <b>Recent Listing</b>
          </div>
          <v-skeleton-loader
      
        v-if="isLoading"
        class="mx-auto pt-10"
        width="500"
        type="card"
      ></v-skeleton-loader>
          <v-card
          v-for="x in listing" :key="x"
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
            :src="x.image"
          
          ></v-img>
          <v-card-title>{{x.title}}</v-card-title>
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

            <div class="my-4 text-subtitle-1">{{formatPrice(x.price)}}</div>

            <div>
              {{x.descriptions}}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-menu offset-y z-index="1">
            <template v-slot:activator="{ attrs, on }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item @click.stop="editItem(x)">
                <v-list-item-content>
                  <v-list-item-title>Edit</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click.stop="deleteItem(x)">
                <v-list-item-content>
                  <v-list-item-title>Delete</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
          </v-card-actions>
        </v-card>
        </v-col>
        <!-- <v-divider vertical></v-divider>
        <v-col class="pl-10">
          <div class="text-h5">
            <b> Sold Listing</b>
          </div>
        </v-col> -->
      </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isOpenDetails:false,
      isDelete:false,
      isLoading:false,
       listing:[],
       selectedItem:[],
       buttonLoad:false,
    }
  },
  created(){
    this.loadData()
  },
  methods:{
  async editListing() {
      this.buttonLoad = true;
      try {
        let form_data = new FormData();
        if (this.image != null && this.image != "") {
          form_data.append("image", this.image);
        }
        form_data.append("title", this.selectedItem.title);
        form_data.append("price", this.selectedItem.price);
        form_data.append("brand", this.selectedItem.brand);
        form_data.append("year", this.selectedItem.year);
        form_data.append("plate_number", this.selectedItem.plate_number);
        form_data.append("transmission", this.selectedItem.transmission);
        form_data.append("model", this.selectedItem.model);
        form_data.append("condition", this.selectedItem.condition);
        form_data.append("fuel_type", this.selectedItem.fuel_type);
        form_data.append("category", this.selectedItem.category);
        form_data.append("color", this.selectedItem.color);
        form_data.append("variant", this.selectedItem.variant);
        form_data.append("milleage", this.selectedItem.milleage);
        form_data.append("body_type", this.selectedItem.body_type);
        form_data.append("descriptions", this.selectedItem.descriptions);
          const response = await this.$axios
            .patch(`/listing/${this.selectedItem.id}/`, form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
              this.loadData()
              this.isOpenDetails=false
              this.buttonLoad = false;
            });
      } catch (error) {
        // alert(error);
        this.buttonLoad = false;
      }
    },
    editItem(val){
      this.isOpenDetails=true
      this.selectedItem = val
    },
    async deleteListing(){
      this.buttonLoad=true
         const response = await this.$axios
            .delete(`/listing/${this.selectedItem.id}/`, {
              headers: {
               Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            })
            .then(() => {
              this.loadData()
              this.snackbarDelete=true
              this.buttonLoad=false
              this.isDelete=false
            });
    },
    deleteItem(val){
      this.isDelete = true
      this.selectedItem=val
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    loadData(){
      this.listing=[]
      this.listingGetall()
    },
     async listingGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/listingbyuser/`, {
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
  }
}
</script>

<style>

</style>