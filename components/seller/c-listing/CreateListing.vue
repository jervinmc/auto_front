<template>
  <div class="pa-5">
    <v-snackbar
      top
      absolute
      bottom
      color="success"
      outlined
      centered
      v-model="isSuccessful"
    >
      Successfull !
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="isSuccessful = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-form ref="form">
    <div class="text-h5"><b>Create Listing</b></div>
    <div class="pa-10">
      <v-card elevation="5" class="pa-10">
        <v-row>
          <v-col cols="6">
            <div>Title</div>
            <div>
              <v-text-field outlined v-model="listing.title"></v-text-field>
            </div>
            <div>Price</div>
            <div>
              <v-text-field outlined v-model="listing.price"></v-text-field>
            </div>
            <div>Descriptions</div>
            <div>
              <v-textarea outlined v-model="listing.descriptions"></v-textarea>
            </div>
          </v-col>
          <v-col class="pl-10">
            <div>Please Upload I.D and (payslip or proof of billing)</div>
            <span class="pt-2 pr-10 pb-10"><b>Upload Image</b><v-icon @click="$refs.file.click()">mdi-plus</v-icon></span>

            <div class="hover_pointer pt-10">
              <img
                @click="$refs.file.click()"
                :src="img_holder"
                alt="item_.js"
                height="150"
                contain
                width="250"
                class="mb-0"
              />
            </div>
            <div>
             
            </div>
            <v-row>
              <v-col>
                 <v-checkbox v-model="listing.isSell" :disabled="listing.isBid"  label="Sell">Sell</v-checkbox>
               <v-checkbox v-model="listing.isBid" :disabled="listing.isSell || listing.isSwap" label="Bid">Bid</v-checkbox>
                <v-checkbox v-model="listing.isSwap" :disabled="listing.isBid" label="Swap">Swap</v-checkbox>
              </v-col>
              <v-col v-if="listing.isBid">
                <div>
                  <v-menu
                          class="pa-0"
                          ref="eventDate"
                          v-model="bidDate"
                          :close-on-content-click="false"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="date"
                              outlined
                              label="Date Bid"
                              persistent-hint
                              v-bind="attrs"
                              @blur="date = date"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="date"
                            no-title
                          ></v-date-picker>
                        </v-menu>
                </div>
                <div>
                  <v-menu
                          class="pa-0"
                          ref="eventDate"
                          v-model="bidTime"
                          :close-on-content-click="false"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="time"
                              outlined
                              label="Time Bid"
                              persistent-hint
                              v-bind="attrs"
                              @blur="time = time"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-time-picker
                            v-model="time"
                            format="24hr"
                          ></v-time-picker>
                        </v-menu>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="d-none">
            <input
              style="display: none"
              type="file"
              id="fileInput"
              ref="file"
              accept="image/png, image/jpeg"
              @change="onFileUpload"
            />
          </v-col>
        </v-row>
        <div></div>
                    <v-row>
              <v-col>
                <v-row>
                  <v-col cols="auto" align-self="start" >
                    <div class="pt-4">Brand <span class="red--text">*</span></div>
                  </v-col>
                  <v-col>
                    <div>
                      <v-select
                        outlined
                        :items="brand"
                        v-model="listing.brand"
                      ></v-select>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="auto" align-self="start" >
                    <div class="pt-4">Year <span class="red--text">*</span></div>
                  </v-col>
                  <v-col>
                    <div>
                      <v-text-field
                        outlined
                        v-model="listing.year">
                      </v-text-field>
                    </div>
                  </v-col>
                </v-row>
                <!-- <v-row>
                  <v-col cols="4" align-self="start" >
                    <div class="pt-0">Licensure plate number <span class="red--text">*</span></div>
                  </v-col>
                  <v-col>
                    <div>
                     <v-select
                     :items="plate_number"
                        outlined
                        v-model="listing.plate_number">
                      </v-select>
                    </div>
                  </v-col>
                </v-row> -->
                 <v-row>
                  <v-col cols="auto" align-self="start" >
                    <div class="pt-4">Transmission <span class="red--text">*</span></div>
                  </v-col>
                  <v-col>
                    <div>
                     <v-select
                        outlined
                        :items="transmission"
                        v-model="listing.transmission">
                      </v-select>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="auto" align-self="start" >
                    <div class="pt-4">Category <span class="red--text">*</span></div>
                  </v-col>
                  <v-col>
                    <div>
                     <v-select
                        outlined
                        :items="category"
                        v-model="listing.category">
                      </v-select>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col>
                <v-row>
                  <v-col cols="auto" align-self="start" >
                    <div class="pt-4">Model <span class="red--text">*</span></div>
                  </v-col>
                  <v-col>
                    <div>
                      <v-select
                      :items="model"
                        outlined
                        v-model="listing.model"
                      ></v-select>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="auto" align-self="start" >
                    <div class="pt-4">Condition <span class="red--text">*</span></div>
                  </v-col>
                  <v-col>
                    <div>
                      <v-text-field
                        outlined
                        v-model="listing.condition"
                      ></v-text-field>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="auto" align-self="start" >
                    <div class="pt-4">Color <span class="red--text">*</span></div>
                  </v-col>
                  <v-col>
                    <div>
                      <v-select
                      :items="color"
                        outlined
                        v-model="listing.color"
                      ></v-select>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="auto" align-self="start" >
                    <div class="pt-4">Fuel Type <span class="red--text">*</span></div>
                  </v-col>
                  <v-col>
                    <div>
                     <v-select
                        outlined
                        :items="fuel_type"
                        v-model="listing.fuel_type">
                      </v-select>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col>
                <v-row>
                  <v-col cols="auto" align-self="start" >
                    <div class="pt-4">Variant <span class="red--text">*</span></div>
                  </v-col>
                  <v-col>
                    <div>
                      <v-text-field
                        outlined
                        v-model="listing.variant"
                      ></v-text-field>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="auto" align-self="start" >
                    <div class="pt-4">Milleage <span class="red--text">*</span></div>
                  </v-col>
                  <v-col>
                    <div>
                      <v-text-field
                        outlined
                        v-model="listing.milleage"
                      ></v-text-field>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="auto" align-self="start" >
                    <div class="pt-4">Body Type <span class="red--text">*</span></div>
                  </v-col>
                  <v-col>
                    <div>
                      <v-text-field
                        outlined
                        v-model="listing.body_type"
                      ></v-text-field>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
             <div align="center">
                <v-btn outlined depressed color="#6609af" dark @click="addListing" :loading="buttonLoad"> Submit </v-btn>
            </div>
      </v-card>
    </div>
    </v-form>
  </div>
</template>

<script>
export default {
  created(){
    this.loadData()
  },
  data() {
    return {
      bidDate:false,
      bidTime:false,
      time:'',
      date:'',
      isSuccessful:false,
      category:[],
      fuel_type:[],
      isBid:false,
      isSwap:false,
      isSell:false,
      img_holder: '/image_placeholder.png',
      listing: [],
      reference:[],
      image: '',
      brand:[],
      model:[],
      year:[],
      plate_number:['2523','3242','2342'],
      transmission:[],
      color:[],
      buttonLoad:false,
      
    }
  },
  methods: {
    loadData() {
      this.dialogAdd=false
      this.eventsGetall();
    },
    async eventsGetall() {
      this.color=[]
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
          this.reference.map(item=>{
             if(item.reference_type=='Car Color'){
               this.color.push(item.name)
             }
             else if(item.reference_type=='Car Transmissions'){
               this.transmission.push(item.name)
             }
             else if(item.reference_type=='Car Model'){
               this.model.push(item.name)
             }
              else if(item.reference_type=='Car Brand'){
               this.brand.push(item.name)
             }
             else if(item.reference_type=='Category'){
               this.category.push(item.name)
             }
             else if(item.reference_type=='Fuel Type'){
               this.fuel_type.push(item.name)
             }
          })
          this.isLoading = false;
        });
    },
    async addListing() {
      this.buttonLoad = true;
      try {
        let form_data = new FormData();
        if (this.image != null && this.image != "") {
          form_data.append("image", this.image);
        }
        form_data.append("title", this.listing.title);
        form_data.append("user_id", localStorage.getItem('id'));
        form_data.append("price", this.listing.price);
        form_data.append("brand", this.listing.brand);
        form_data.append("year", this.listing.year);
        form_data.append("plate_number", this.listing.plate_number);
        form_data.append("transmission", this.listing.transmission);
        form_data.append("model", this.listing.model);
        form_data.append("condition", this.listing.condition);
        form_data.append("fuel_type", this.listing.fuel_type);
        form_data.append("category", this.listing.category);
        form_data.append("color", this.listing.color);
        form_data.append("variant", this.listing.variant);
        form_data.append("current_bid", this.listing.price);
        form_data.append("start_bidding", this.listing.isBid ? this.date+" "+this.time : null);
        form_data.append("milleage", this.listing.milleage);
        form_data.append("body_type", this.listing.body_type);
        form_data.append("isBid", this.listing.isBid==null ? false : this.listing.isBid);
        form_data.append("isSell", this.listing.isSell==null ? false : this.listing.isSell);
        form_data.append("isSwap", this.listing.isSwap==null ? false : this.listing.isSwap);
        form_data.append("descriptions", this.listing.descriptions);
          const response = await this.$axios
            .post("/listing/", form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
              this.isSuccessful=true
              this.$refs.form.reset()
              this.buttonLoad = false;
            });
      } catch (error) {
        // alert(error);
        this.buttonLoad = false;
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