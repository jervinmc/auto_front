<template>
  <div>
      <v-row class="pa-5">
        <v-col class="pl-10">
          <div class="text-h5">
            <b>Recent Transactions</b>
          </div>
        </v-col>
           <v-divider vertical></v-divider>
        <v-col>
          <div class="text-h5 pl-10" >
            <b>Recent Activity</b>
          </div>
       
          <v-skeleton-loader
          v-if="isLoading"
          type="list-item-avatar-two-line"
          class="my-2"
        />
        <v-skeleton-loader
          v-if="isLoading"
          type="list-item-avatar-two-line"
          class="my-2"
        />
        <v-skeleton-loader
          v-if="isLoading"
          type="list-item-avatar-two-line"
          class="my-2"
        />
        <v-skeleton-loader
          v-if="isLoading"
          type="list-item-avatar-two-line"
          class="my-2"
        />
        <v-skeleton-loader
          v-if="isLoading"
          type="list-item-avatar-two-line"
          class="my-2"
        />
        <div>
          <div v-for="item in activity" :key="item">
              <v-row >
              <v-col cols="auto">
                  <v-img :src="item.image" height="200" width="200" contain>
                  </v-img>
              </v-col>
              <v-col align-self="center">
                  <div>
                      <b>{{item.title}} </b>
                  </div>
                  <div>
                      Price : {{formatPrice(item.price)}}
                  </div>
              </v-col>
          </v-row>
             <v-divider></v-divider>
          </div>
       
        </div>
        </v-col>
      
      </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isLoading:false,
       activity:[]
    }
  },
  created(){
    this.loadData()
  },
  methods:{
      formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    loadData(){
      this.listingGetall()
    },
     async listingGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/activity/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.activity = res.data;
          this.isLoading = false;
        });
    },
  }
}
</script>

<style>

</style>