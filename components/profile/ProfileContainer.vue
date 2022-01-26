<template>
  <div class="pa-5">
      <v-row>
        <v-col>
            <div class="text-h5">
               <b> Personal Verification</b>
            </div>
            <div>
                Username: {{listing.username}}
            </div>
            <div> 
                Name: {{listing.firstname}} {{listing.lastname}}
            </div>
            <div>
                Age: {{listing.age}}
            </div>
            <div>
                Address: {{listing.address}}
            </div>
            <div>
                Email Address: {{listing.email}}
            </div>
            <div>
                Contact Number: {{listing.contact_number}}
            </div>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col class="pl-10">
          <div class="text-h5">
            <b>Identity Verification</b>
          </div>
          <div>
              ID:
          </div>
          <div>
              <v-img :src="listing.image" height="200" width="200"></v-img>
                    
          </div> 
        </v-col>
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
        .get(`/users/user/${localStorage.getItem('id')}`, {
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