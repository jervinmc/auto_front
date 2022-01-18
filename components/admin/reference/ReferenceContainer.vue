<template>
  <v-card elevation="5">
    <reference-add :isOpen="dialogAdd" @cancel="dialogAdd=false" @refresh="loadData" :items="selectedItem" :isAdd="isAdd"  />
    <v-row>
      <v-col align="start" class="pa-10 text-h5" cols="auto">
        <b>Reference Management</b>
      </v-col>
      <v-spacer></v-spacer>
      <v-col align-self="center" align="end" class="pr-10">
        <v-btn
          class="rnd-btn"
          rounded
          large
          color="#6609af"
          depressed
          dark
          width="170"
          @click="addItem"
        >
          <span class="text-none">Add Reference</span>
        </v-btn>
      </v-col>
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
            <v-list-item @click.stop="status(item, 'Activate')">
              <v-list-item-content>
                <v-list-item-title>Edit</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click.stop="status(item, 'Deactivate')">
              <v-list-item-content>
                <v-list-item-title>Delete</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      
    </v-data-table>
  </v-card>
</template>

<script>
import ReferenceAdd from './ReferenceAdd.vue';
export default {
    components:{
        ReferenceAdd
    },
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
        { text: "Reference Type", value: "reference_type" },
        { text: "Code", value: "code" },
        { text: "Name", value: "name" },
        { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
  methods: {
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
      this.eventsGetall();
    },
    async eventsGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/reference/`, {
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