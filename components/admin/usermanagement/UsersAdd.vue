<template>
  <v-dialog v-model="isOpen" width="1000" persistent>
    <v-card class="pa-10">
      <div align="center" class="text-h6">Add User</div>
      <div class="text-h6"></div>
      <v-col cols="12" class="px-0">
        <div>First Name</div>
        <div>
          <v-text-field outlined v-model="users.firstname"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Last Name</div>
        <div>
          <v-text-field outlined v-model="users.lastname"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Email</div>
        <div>
          <v-text-field outlined v-model="users.email"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Password</div>
        <div>
          <v-text-field outlined v-model="users.password" type="password"></v-text-field>
        </div>
      </v-col>
      <v-card-actions>
        <v-row align="center">
          <v-col align="end">
            <v-btn color="red" text @click="cancel"> Cancel </v-btn>
          </v-col>
          <v-col>
            <v-btn
              color="success"
              text
              @click="submitHandler"
              :loading="buttonLoad"
            >
              Save
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["isOpen", "items", "isAdd"],
  watch: {
    items() {
        this.users=this.items
    },
  },
  data() {
    return {
      reference:[],
      room_list:['Standard','Deluxe','Suite'],
      events: [],
      buttonLoad: false,
      img_holder:'image_placeholder.png',
      users:[]
    };
  },
  methods: {
      async submitHandler(){
      
      this.buttonLoad = true;
      try {
        let form_data = new FormData();
        if (this.image != null && this.image != "") {
          form_data.append("image", this.image);
        }
        if (this.image_payslip != null && this.image_payslip != "") {
          form_data.append("image_payslip", this.image_payslip);
        }
        form_data.append("is_verified", true);
        form_data.append("is_active", true);
        form_data.append("password", this.users.password);
        form_data.append("firstname", this.users.firstname);
        form_data.append("middlename", this.users.middlename);
        form_data.append("lastname", this.users.lastname);
        form_data.append("email", this.users.email);
        form_data.append("account_type", 'Admin');
          const response = await this.$axios
            .post("/signup/", form_data, {
              headers: {
              
              },
            })
            .then(() => {
              this.isRegistered=true
              this.$emit('refresh')
              this.isRegistered=true;
              this.buttonLoad = false;
            });
        
    
    }
    catch{
         this.buttonLoad = false;
    }
    },
    async addReference() {
      this.buttonLoad = true;
      try {
        let form_data = new FormData();
        if (this.image != null && this.image != "") {
          form_data.append("image", this.image);
        }
        form_data.append("reference_type", this.reference.reference_type);
        form_data.append("code", this.reference.code);
        form_data.append("name", this.reference.name);
        if (this.isAdd) {
          const response = await this.$axios
            .post("/reference/", form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
              this.$refs.form.reset()
              this.buttonLoad = false;
              this.$emit("cancel");
              this.$emit("refresh");
            });
        } else {
          const response = await this.$axios
            .patch(`/discussions/${this.discussions.id}/`, form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
              this.buttonLoad = false;
              this.$emit("cancel");
              this.$emit("refresh");
            });
        }
      } catch (error) {
        // alert(error);
        this.buttonLoad = false;
      }
    },
    onFileUpload(e) {
      this.image = e;
      e = e.target.files[0];
      if (e["name"].length > 100) {
        alert("255 characters exceeded filename.");
        return;
      }
      try {
        if (e.size > 16000000) {
          alert("Only 15mb file can be accepted.");
          return;
        }
      } catch (error) {
        alert(error);
        return;
      }
      this.image = e;
      if (e == null) {
      } else {
        this.url, (this.img_holder = URL.createObjectURL(e));
      }
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style>
</style>