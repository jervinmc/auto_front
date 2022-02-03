<template>
  <div align="start">
        <v-dialog v-model="isOpenRate" width="500" persistent>
    <v-card class="pa-10">
    <div align="center" class="text-h6">Rate this seller</div>
    <div align="center" class="pa-10">
         <v-rating
        v-model="rate"
        background-color="orange lighten-3"
        color="orange"
        large
      ></v-rating>
    </div>
      <v-card-actions>
        <v-row align="center">
            <v-col align="end">
                <v-btn color="red" text @click="isOpenRate=false"> Cancel </v-btn>
            </v-col>
            <v-col>
                <v-btn color="success" :loading="buttonLoad" text @click="rateNow"> Rate </v-btn>
            </v-col>
        </v-row>  
      </v-card-actions>
    </v-card>
  </v-dialog>
    <v-row>
      <v-col cols="auto">
        <v-card max-width="400" class="">
          <v-list three-line>
            <v-skeleton-loader
              v-if="isLoading"
              class="mx-auto pt-10"
              width="300"
              type="card"
            ></v-skeleton-loader>
            <v-skeleton-loader
              v-if="isLoading"
              class="mx-auto pt-10"
              width="300"
              type="card"
            ></v-skeleton-loader>
            <template v-for="item in items">
              <v-list-item :key="item" @click="showChat(item.channel,item.users.firstname,item.seller_id)">
                <v-list-item-avatar>
                  <v-img :src="item.users.image"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    v-html="item.users.firstname"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    >Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum
                    ipsum</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="5" v-if="channel!=''">
          
          <v-toolbar color="cyan" dark>
            <v-toolbar-title>{{name}}</v-toolbar-title>
             
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon @click="isOpenRate=true">mdi-star</v-icon>
            </v-btn>
          </v-toolbar>
            <v-skeleton-loader
              v-if="isLoadChat"
              class="mx-auto pt-10"
              width="500"
              type="card"
            ></v-skeleton-loader>
           <div style="height:500px;overflow:scroll">
            <div :align="index.account_type=='Customer' ? 'end' : 'start'" class="pa-5" v-for="index in chatList" :key="index">
                     <v-chip  style="border-radius:15px;padding:25px;  color: #344557"
                                ><span>{{index.chat}}</span>
                </v-chip>
              
            </div>
            
           </div>
          <div class="d-flex align-end">
            <v-row no-gutters>
                <v-col class="pa-0" cols="12">
                       <v-text-field
              outlined
              @keyup.enter="sendMessage"
              hide-details=""
              v-model="message"
              append-icon="mdi-send"
            ></v-text-field>
                </v-col>
            </v-row>

          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Pusher from 'pusher-js';
export default {
  data() {
    return {
      isOpenRate:false,
      rate:5,
      isLoadChat:false,
      isLoading:true,
       name:'',
      items: [],
      chatList:[],
      channel:'',
      message:'',
      seller_id:0,
    }
  },
  mounted() {
    this.listingGetall()
  },
  methods: {
    async rateNow(){
      await this.$axios.post('/rate/',{seller_id:this.seller_id,rate:this.rate},
      {
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })
    },
    showChat(channel,name,seller_id){
        this.chatList=[]
        this.name=name
        this.channel=channel
         this.isLoadChat=true
         this.seller_id = seller_id
        const res =  this.$axios
        .post(`/chatgetall/`, {"channel":this.channel},{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((rest) => {
            this.chatList=rest.data
            this.isLoadChat=false
        })
         var pusher = new Pusher('33efacb6a0d9c7baad00', {
      cluster: 'ap1'
    });

    var channel = pusher.subscribe(this.channel);
    channel.bind('my-test', function(data) {
               const res2 =  this.$axios
        .post(`/chatgetall/`, {"channel":this.channel},{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((rest) => {
            this.chatList=rest.data
        })
    },this);
    },
  async  sendMessage(){
         const res = await this.$axios
        .post(`/sendMessage/`, {"channel":this.channel,"message":this.message,"chat":this.message,"account_type":localStorage.getItem('account_type')},{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
     
        })
        this.message=''
    },
    async listingGetall() {
      this.isLoading=true
      const res = await this.$axios
        .get(`/channel/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
          this.isLoading=false
          console.log(res.data)
          this.items = res.data
        })
    },
  },
}
</script>

<style>
</style>