<template>
  <div align="center">
      <div style="width:1200px">
        <v-row>
          <v-col align="start">
            <div>
          <b>INFORMATION</b>
        </div>
        <div class="text-h3 pt-5">
          <b>Contact Us</b>
        </div>
        <div class="pr-6 pt-5">
          <ul>
            <li>autootoncst@gmail.com</li>
             <li>09156830724</li>
              <li>Burol Main, Dasmariñas Cavite</li>
       
          </ul>
        </div>
      
          </v-col>
          <v-col>
              <v-row>
                <v-col><v-text-field outlined v-model="inquiries.name" placeholder="Name"></v-text-field></v-col>
                <v-col><v-text-field outlined v-model="inquiries.email" placeholder="Email"></v-text-field></v-col>
              </v-row>
              <div>
                <v-textarea outlined placeholder="Message" v-model="inquiries.message"></v-textarea>
              </div>
              <div align="end">
              <v-btn depressed color="#6609af" dark @click="send_message"> Send Message </v-btn>
              </div>
          </v-col>
        </v-row>
      </div>
      
  </div>
</template>

<script>
export default {
  data(){
    return {
      inquiries:[]
    }
  }
}
</script>

<style>

</style>