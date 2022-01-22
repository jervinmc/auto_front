<template>
  <div>
    <v-snackbar
      top
      absolute
      bottom
      color="error"
      outlined
      centered
      v-model="snackbar"
    >
      Wrong Credentials
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
     <v-snackbar
      top
      absolute
      bottom
      color="error"
      outlined
      centered
      v-model="snackbarisVerified"
    >
      Not yet verified. Please check your email. Thank you!
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbarisVerified = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-card width="900">
      <div
        style="background-color: #6609af; color: white"
        align="start"
        class="pa-5"
      >
        Login Form 
      </div>
      <div class="pa-5" align="start">
        <v-row>
          <v-col>
            <div>Email</div>
            <div>
              <v-text-field outlined v-model="users.email"></v-text-field>
            </div>
          </v-col>
          <v-col cols="12">
            <div>Password</div>
            <div>
              <v-text-field outlined v-model="users.password" type="password"></v-text-field>
            </div>
          </v-col>
        </v-row>
        <div align="center">
          <v-btn depressed color="#6609af" dark @click="login" :loading="isLoaded"> Login </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snackbar:false,
      img_holder: 'image_placeholder.png',
      image: '',
      url: '',
      users:[],
      isLoaded:false,
      snackbarisVerified:false
    }
  },
  methods: {
     async login() {
      this.isLoaded = true;
      var credentials = {
        email: this.users.email,
        password: this.users.password,
      };
      try {
        var response = await this.$axios
          .post("auth/login/", credentials)
          .then((response) => {
            
            localStorage.setItem("token", response.data.access);
            const users = this.$axios
              .get(`/users/details/`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
              .then((users) => {
                // if(!users.data.is_verified){
                //   this.snackbarisVerified = true
                //   this.isLoaded=false
                //   return
                // }
                localStorage.setItem("id", users.data.id);
                localStorage.setItem("email", users.data.email);
                localStorage.setItem("name", users.data.name);
                localStorage.setItem("firstname", users.data.firstname);
                localStorage.setItem("lastname", users.data.lastname);
                localStorage.setItem("image", users.data.image);
                localStorage.setItem("brand", users.data.car_brand);
                localStorage.setItem("transmission", users.data.car_transmission);
                localStorage.setItem("brand", users.data.car_brand);
                localStorage.setItem("account_type",users.data.account_type)
                console.warn(users)
                if(users.data.account_type=='Admin'){
                  window.location.href="/admin/dashboard"
                }
                else if(users.data.account_type=='Seller'){
                  window.location.href="/seller/dashboard"
                }
                else{
                    window.location.href="/market"
                }
                this.isLoaded = false;
                
                // if(users.data.is_superuser) window.location.href = "/home";
                // else window.location.href = "/home";
              });
          });

        
      } catch (error) {
        this.snackbar = true;
        this.isLoaded = false;
      }
    },
    onFileUpload(e) {
      this.image = e
      e = e.target.files[0]
      if (e['name'].length > 100) {
        alert('255 characters exceeded filename.')
        return
      }
      try {
        if (e.size > 16000000) {
          alert('Only 15mb file can be accepted.')
          return
        }
      } catch (error) {
        alert(error)
        return
      }
      this.image = e
      if (e == null) {
      } else {
        this.url, (this.img_holder = URL.createObjectURL(e))
      }
    },
  },
}
</script>

<style>
</style>