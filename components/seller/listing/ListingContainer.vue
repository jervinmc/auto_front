<template>
  <div>
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

            <div class="my-4 text-subtitle-1">{{x.price}}</div>

            <div>
              {{x.descriptions}}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col class="pl-10">
          <div class="text-h5">
            <b> Sold Listing</b>
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
       listing:[]
    }
  },
  created(){
    this.loadData()
  },
  methods:{
    loadData(){
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