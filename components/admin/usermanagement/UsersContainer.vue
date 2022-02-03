<template>
  <v-card elevation="5">
     <v-snackbar
      top
      absolute
      bottom
      color="success"
      outlined
      centered
      v-model="successfullyAdded"
    >
      Successfully Added
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="successfullyAdded = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      top
      absolute
      bottom
      color="success"
      outlined
      centered
      v-model="snackbarDelete"
    >
      Successfully Deleted !
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbarDelete = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
     <v-dialog v-model="isDelete" width="500" persistent>
    <v-card class="pa-10">
    <div align="center" class="text-h6">Delete User</div>
    <div align="center" class="pa-10">
       Are you sure you want to delete?
    </div>
      <v-card-actions>
        <v-row align="center">
            <v-col align="end">
                <v-btn color="red" text @click="isDelete=false"> Cancel </v-btn>
            </v-col>
            <v-col>
                <v-btn color="success" :loading="buttonLoad" text @click="deleteUser"> Confirm </v-btn>
            </v-col>
        </v-row>  
      </v-card-actions>
    </v-card>
  </v-dialog>
    <v-snackbar
      top
      absolute
      bottom
      color="success"
      outlined
      centered
      v-model="snackbar"
    >
      Successfully Added
      <template v-slot:action="{ attrs }">
        <v-btn color="success" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-dialog v-model="isOpenDetails" persistent width="1200">
    
      <v-card class="pa-10" width="1200">
          <div align="end">
        <v-icon @click="isOpenDetails=false">mdi-close</v-icon>
      </div>
        <div class="text-h6">View User</div>
        <v-row class="">
          <v-col cols="4">
            <div>Username</div>
            <div>
              <v-text-field
                outlined
                v-model="usersController.username"
              ></v-text-field>
            </div>
          </v-col>
          <!-- <v-col cols="4">
            <div>Password</div>
            <div>
              <v-text-field
                outlined
                v-model="usersController.password"
                type="password"
              ></v-text-field>
            </div>
          </v-col> -->
          <v-col cols="4">
            <div>Suffix Name</div>
            <div>
              <v-text-field
                outlined
                v-model="usersController.suffix"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <div>First Name</div>
            <div>
              <v-text-field
                outlined
                v-model="usersController.firstname"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="4">
            <div>Middle Name</div>
            <div>
              <v-text-field
                outlined
                v-model="usersController.middlename"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="4">
            <div>Last Name</div>
            <div>
              <v-text-field
                outlined
                v-model="usersController.lastname"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <div>Email Address</div>
            <div>
              <v-text-field
                outlined
                v-model="usersController.email"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="4">
            <div>Age</div>
            <div>
              <v-text-field
                outlined
                v-model="usersController.age"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="4">
            <div>Contact Number</div>
            <div>
              <v-text-field
                outlined
                v-model="usersController.contact_number"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <div>Address</div>
            <div>
              <v-text-field
                outlined
                v-model="usersController.address"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="4">
            <v-checkbox
              v-model="usersController.is_active"
              label="is Active"
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <div>Display Profile</div>
            <v-img
              :src="usersController.image"
              height="200"
              width="200"
            ></v-img>
          </v-col>
          <v-col cols="6" v-if="usersController.account_type=='Customer'">
            <div>Identity Document</div>
            <v-img
              :src="usersController.payslip"
              height="200"
              width="200"
            ></v-img>
          </v-col>
        </v-row>
      
        <div class="text-h6" align="center" v-if="usersController.account_type=='Customer'">
               <b> BUYER CONTRACT AGREEMENT</b>
            </div >
            <div class="text-h6" v-else>
              <b> SELLER CONTRACT AGREEMENT</b>
            </div>
            <div>
              <v-row>
             <v-col cols="auto" align-self="center">I </v-col><v-col><v-text-field v-model="usersController.name_signed"></v-text-field> </v-col><v-col align-self="center" cols="auto">with a mailing address of</v-col> <v-col ><v-text-field v-model="usersController.mailing_address"></v-text-field>,</v-col>
              </v-row>
               <v-row>
             <v-col cols="auto" align-self="center">City of,</v-col><v-col><v-text-field v-model="usersController.city_of"></v-text-field> </v-col><v-col align-self="center" cols="auto">State of</v-col> <v-col ><v-text-field v-model="usersController.state_of"></v-text-field></v-col><v-col align-self="center" cols="auto">who agrees to the agreement.</v-col>
              </v-row>
            </div>
            <div align="start" v-if="usersController.account_type=='Customer'">
              I agree that I will be responsible on buying and transacting within or without the system with the seller I’m transacting with. I agree that I will not troll and I will not back out whenever I want without contacting and having any valid reason to the seller. I understand that there will be legal consequences if I somehow became unable to complete the deal;
            </div>  
            <div v-else>
              I agree that I will be responsible on selling and transacting within or without the system with the buyer I’m transacting with. I agree that I will not sell unit that have fake and incomplete papers. I also agree that I will not back out whenever I want without contacting and having any valid reason to the buyer. I understand that there will be legal consequences if I somehow became unable to complete the deal;
            </div>
            <div>Signed</div>
            <v-img
              :src="usersController.signed_image"
              height="200"
              width="200"
            ></v-img>
      </v-card>
    </v-dialog>
    <users-add
      :isOpen="dialogAdd"
      @cancel="dialogAdd = false"
      @refresh="refresh"
      :items="selectedItem"
      @notify="successfullyAdded=true"
      :isAdd="isAdd"
    />
    <v-container fluid class="pb-0">
      <v-row class="pl-0" no-gutters align="start" elevation="5">
        <v-col
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
              >Admin Management</b
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
              >Account Management</b
            >
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div v-if="active_page == 0">
      <v-row>
        <v-col align="start" class="pa-10 text-h5" cols="auto">
          <b>Admin Management</b>
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
            <span class="text-none">Add User</span>
          </v-btn>
        </v-col>
      </v-row>
      <v-data-table
        class="pa-5"
        :headers="headers"
        :items="itemAdmin"
        :loading="isLoading"
      >
        <template v-slot:[`item.is_active`]="{ item }">
          <div :class="item.is_active ? 'green--text' : 'red--text'">
            <span>{{ item.is_active ? 'Activated' : 'Deactivated' }} </span>
          </div>
        </template>
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
              <v-list-item @click.stop="activate(item)">
                <v-list-item-content>
                  <v-list-item-title>Activate</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click.stop="deleteItem(item, 'Deactivate')">
                <v-list-item-content>
                  <v-list-item-title>Delete</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
    </div>
    <div v-else>
      <v-row>
        <v-col align="start" class="pa-10 text-h5" cols="auto">
          <b>Account Management</b>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-data-table
        class="pa-5"
        :headers="headers"
        :items="itemClient"
        :loading="isLoading"
      >
        <template v-slot:[`item.is_active`]="{ item }">
          <div :class="item.is_active ? 'green--text' : 'red--text'">
            <span>{{ item.is_active ? 'Activated' : 'Deactivated' }} </span>
          </div>
        </template>
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
              <v-list-item @click.stop="activate(item)">
                <v-list-item-content>
                  <v-list-item-title>Activate</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click.stop="viewUser(item)">
                <v-list-item-content>
                  <v-list-item-title>View</v-list-item-title>
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
    </div>
  </v-card>
</template>

<script>
import UsersAdd from './UsersAdd.vue'

export default {
  components: { UsersAdd },
  computed: {
    itemAdmin() {
      return this.users.filter((item) => {
        return item.account_type == 'Admin'
      })
    },
    itemClient() {
      return this.users.filter((item) => {
        return item.account_type != 'Admin'
      })
    },
  },
  created() {
    this.loadData()
  },
  data() {
    return {
      successfullyAdded:false,
      snackbarDelete:false,
      buttonLoad:false,
      selectedItem:[],
      isDelete:false,
      snackbar:false,
      usersController: [],
      active_page: 0,
      events: [],
      selectedItem: {},
      isLoading: false,
      users: [],
      dialogAdd: false,
      isAdd: true,
      isOpenDetails: false,
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'First Name', value: 'firstname' },
        { text: 'Last Name', value: 'lastname' },
        { text: 'Email', value: 'email' },
        { text: 'Account Type', value: 'account_type' },
        { text: 'Account Status', value: 'is_active' },
        { text: 'Actions', value: 'opt' },
        ,
      ],
    }
  },
  methods: {
    async deleteUser(){
      this.buttonLoad=true
         const response = await this.$axios
            .delete(`/users/user/${this.selectedItem.id}/`, {
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
      this.isDelete=true
      this.selectedItem = val
    }, 
    refresh(){
      this.snackbar=true
      this.loadData()
    },
    viewUser(val) {
      this.isOpenDetails = true
      this.usersController = val
    },
    async activate(val) {
      this.isLoading = true
      const res = await this.$axios
        .post(
          `/activation/users/`,
          { is_active: true, id: val.id, email: val.email },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        .then((res) => {
          this.loadData()
        })
    },
    editItem(val) {
      this.selectedItem = val
      this.dialogAdd = true
    },
    addItem() {
      this.isAdd = true
      this.dialogAdd = true
    },
    loadData() {
      this.dialogAdd = false
      this.usersGetall()
    },
    async usersGetall() {
      this.isLoading = true
      const res = await this.$axios
        .get(`/users/user/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
          this.users = res.data
          this.isLoading = false
        })
    },
  },
}
</script>

<style>
</style>