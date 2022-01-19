<template>
  <v-card elevation="5">
    <v-dialog v-model="isDelete" width="500" persistent>
    <v-card class="pa-10">
    <div align="center" class="text-h6">Delete Reference</div>
    <div align="center" class="pa-10">
       Are you sure you want to delete?
    </div>
      <v-card-actions>
        <v-row align="center">
            <v-col align="end">
                <v-btn color="red" text @click="isDelete=false"> Cancel </v-btn>
            </v-col>
            <v-col>
                <v-btn color="success" :loading="buttonLoad" text @click="deleteReference"> Confirm </v-btn>
            </v-col>
        </v-row>  
      </v-card-actions>
    </v-card>
  </v-dialog>
      <v-dialog v-model="isEdit" width="1000" persistent>
    <v-card class="pa-10">
      <div align="center" class="text-h6">Edit Reference</div>
      <div class="text-h6">Event</div>
      <!-- <v-col cols="12" class="px-0">
        <div>  Type</div>
        <div>
          <v-select :items="reference_selection" outlined v-model="reference.reference_type"></v-select>
        </div>
      </v-col> -->
      <v-col cols="12" class="px-0">
        <div>Code</div>
        <div>
          <v-text-field outlined v-model="selectedItem.code"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Name</div>
        <div>
          <v-text-field outlined v-model="selectedItem.name"></v-text-field>
        </div>
      </v-col>
      <v-card-actions>
        <v-row align="center">
          <v-col align="end">
            <v-btn color="red" text @click="isEdit=false"> Cancel </v-btn>
          </v-col>
          <v-col>
            <v-btn
              color="success"
              text
              @click="editReference"
              :loading="buttonLoad"
            >
              Save
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
      <configuration-add :isOpen="dialogAdd" @cancel="dialogAdd=false" @refresh="loadData" :items="selectedItem" :isAdd="isAdd"  />
    <v-row>
      <v-col align="start" class="pa-10 text-h5" cols="auto">
        <b>System Management</b>
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
            <v-list-item @click.stop="editItem(item)">
              <v-list-item-content>
                <v-list-item-title>Edit</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click.stop="deleteItem(item)">
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
import ConfigurationAdd from './ConfigurationAdd.vue';
export default {
    components:{
        ConfigurationAdd
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
      isEdit:false,
      buttonLoad:false,
      isDelete:false,
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
 async deleteReference(){
      this.buttonLoad = true;
      try {
       
          const response = await this.$axios
            .delete(`/reference/${this.selectedItem.id}/`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
              this.loadData()
              this.isDelete=false
              this.buttonLoad = false;

            });
      
      } catch (error) {
        // alert(error);
        this.buttonLoad = false;
      }
    
  },
  deleteItem(val){
    this.isDelete=true
      this.selectedItem = val
  },
    async editReference() {
      this.buttonLoad = true;
      try {
        let form_data = new FormData();
        if (this.image != null && this.image != "") {
          form_data.append("image", this.image);
        }
        form_data.append("reference_type", this.selectedItem.reference_type);
        form_data.append("code", this.selectedItem.code);
        form_data.append("name", this.selectedItem.name);
          const response = await this.$axios
            .patch(`/reference/${this.selectedItem.id}/`, form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
              this.loadData()
              this.isEdit=false
              this.buttonLoad = false;

            });
      
      } catch (error) {
        // alert(error);
        this.buttonLoad = false;
      }
    },
    editItem(val){
      this.selectedItem=val
      this.isEdit=true
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
      this.reference=[]
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