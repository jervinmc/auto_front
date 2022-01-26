<template>
  <v-card elevation="5">
    
    <v-row>
      <v-col align="start" class="pa-10 text-h5" cols="auto">
        <b>Report Management</b>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-data-table
      class="pa-5"
      :headers="headers"
      :items="reference"
      :loading="isLoading"
    >
      <template v-slot:loading>
        <v-skeleton-loader
          v-for="n in 5"
          :key="n"
          type="list-item-avatar-two-line"
          class="my-2"
        ></v-skeleton-loader>
      </template>
      <template #[`item.opt`]="{ item }">
        <v-menu offset-y z-index="1">
          <template v-slot:activator="{ attrs, on }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item @click.stop="contactNow(item)">
              <v-list-item-content>
                <v-list-item-title>Contact Now</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <template #[`item.image`]="{ item }">
            <v-img :src="item.image" height="150" width="150"></v-img>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  created() {
    this.loadData();
  },
  data() {
    return {
        events:[],
      selectedItem:{},
      isLoading: false,
      reference: [],
      dialogAdd:false,
      isAdd:true,
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "user_name" },
        { text: "Complaint", value: "label" },
        { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
  methods: {
    async contactNow(item){
      const responses1 = this.$axios
          .post(
            `/channel/`,
            {
              customer_id: item.user_id,
              seller_id:localStorage.getItem('id'),
              channel:  Math.random().toString(36).slice(2),
              listing_id:item.listing_id,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            }
          )
          .then(() => {
            window.location.href="/seller/messages"
          })
    },
    editItem(val){
      this.selectedItem=val
      this.dialogAdd=true
    },
    addItem(){
      this.isAdd=true
      this.dialogAdd=true
    },
    async status(data, status) {
      this.isLoading = true;
      const res = await this.$axios
        .patch(
          `/announcement/${data.id}/`,
          {
            is_active: status == "Deactivate" ? false : true,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          this.loadData();
        });
    },
    loadData() {
      this.dialogAdd=false
      this.eventsGetall();
    },
    async eventsGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/reports/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.reference = res.data;
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
</style>