<template>
  <div v-if="isRegistered">
    <v-card width="1200">
      <div
        style="background-color: #6609af; color: white"
        align="start"
        class="pa-5"
      >
        Successfully Registered
      </div>
      <v-sheet class="d-flex justify-center align-center" align="center">
        <div class="pa-10">
          Your account is currently pending wait until the admin verify your
          account.<br />
          Estimated time 30-60 minutes.
        </div>
      </v-sheet>
      <div align="end" class="pa-5">
        <v-btn
          depressed
          color="#6609af"
          type="submit"
          dark
          :loading="buttonLoad"
          @click="goToLogin"
        >
          Ok
        </v-btn>
      </div>
    </v-card>
  </div>
  <div v-else-if="isOTP">
    <v-snackbar
      top
      absolute
      bottom
      color="error"
      outlined
      centered
      v-model="isOTPSuccessful"
    >
      Wrong OTP Code
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="isOTPSuccessful = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-card width="1200">
      <div
        style="background-color: #6609af; color: white"
        align="start"
        class="pa-5"
      >
        Enter OTP Code
      </div>
      <v-sheet class="d-flex justify-center align-center" align="center">
        <div class="pa-10">
          <v-text-field outlined v-model="otpValidate" solo> </v-text-field>
          <div>
            Expiration : <span class="red--text"> {{ expirationTime }}</span>
          </div>
          <div @click="goOTP" style="cursor: pointer">
            <b>Resend Code</b>
          </div>
        </div>
      </v-sheet>
      <div align="end" class="pa-5">
        <v-btn
          depressed
          color="#6609af"
          type="submit"
          dark
          :loading="buttonLoad"
          @click="submitHandler"
        >
          Ok
        </v-btn>
      </div>
    </v-card>
  </div>
  <div v-else class="pt-10">
    <v-form
      v-model="valid"
      ref="form"
      lazy-validation
      @submit.prevent="submitHandler"
    >
      <v-card width="1200">
        <div
          style="background-color: #6609af; color: white"
          align="start"
          class="pa-5"
        >
          Registration Form
        </div>
        <div class="pa-5" align="start">
          <div class="text-h6">User Information</div>
          <v-divider class="my-5"></v-divider>
          <v-row>
            <v-col>
              <div>Username</div>
              <div>
                <v-text-field
                  outlined
                  v-model="users.username"
                  :rules="standardRules"
                ></v-text-field>
              </div>
            </v-col>
            <v-col>
              <div>Password</div>
              <div>
                <v-text-field
                  outlined
                  type="password"
                  v-model="users.password"
                  :rules="standardRules"
                ></v-text-field>
              </div>
            </v-col>
            <v-col>
              <div>Suffix Name</div>
              <div>
                <v-text-field outlined v-model="users.suffix"></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>First name</div>
              <div>
                <v-text-field
                  outlined
                  v-model="users.firstname"
                  :rules="standardRules"
                ></v-text-field>
              </div>
            </v-col>
            <v-col>
              <div>Middle name</div>
              <div>
                <v-text-field
                  outlined
                  v-model="users.middlename"
                ></v-text-field>
              </div>
            </v-col>
            <v-col>
              <div>Last name</div>
              <div>
                <v-text-field
                  outlined
                  v-model="users.lastname"
                  :rules="standardRules"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>Email Address</div>
              <div>
                <v-text-field
                  outlined
                  v-model="users.email"
                  :rules="standardRules"
                ></v-text-field>
              </div>
            </v-col>
            <v-col>
              <div>Age</div>
              <div>
                <v-text-field
                  outlined
                  v-model="users.age"
                  placeholder="18 years old above is required."
                  :rules="standardRules"
                ></v-text-field>
              </div>
            </v-col>
            <v-col>
              <div>Contact Number</div>
              <div>
                <v-text-field
                  outlined
                  v-model="users.contact_number"
                  :rules="standardRules"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <div>Address</div>
              <div>
                <v-text-field
                  outlined
                  v-model="users.address"
                  :rules="standardRules"
                ></v-text-field>
              </div>
            </v-col>
            <v-col>
              <div>Gender</div>
              <div>
                <v-radio-group v-model="users.gender">
                  <v-row no-gutters>
                    <v-col>
                      <v-radio label="Male" value="Male"></v-radio>
                    </v-col>
                    <v-col>
                      <v-radio label="Female" value="Female"></v-radio>
                    </v-col>
                  </v-row>
                </v-radio-group>
              </div>
            </v-col>
            <v-col>
              <div>Status</div>
              <div>
                <v-text-field outlined></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <div>Select Occupation</div>
              <div>
                <v-radio-group
                  v-model="users.occupation"
                  :rules="standardRules"
                >
                  <v-radio label="Employee" value="employee"></v-radio>
                  <v-radio
                    label="Business Owner"
                    value="business_owner"
                  ></v-radio>
                </v-radio-group>
              </div>
            </v-col>
            <v-col>
              <div>
                <v-row>
                  <v-col cols="auto">
                    <v-checkbox
                      v-model="isAgree"
                      label="I agree to the Terms and Conditions.(Republic Act 10173  Data Privacy Act of 2012) "
                    ></v-checkbox>
                  </v-col>
                  <v-col align-self="center" class="pl-0" style="cursor:pointer" >
                    <div>Read More...</div>
                  </v-col>
                </v-row>
              </div>
              <div></div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-col>
                <div>Please Upload I.D and (payslip or proof of billing)</div>
                <span class="pt-2 pr-10 pb-10"><b>Upload Image</b></span>

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
            </v-col>

            <v-col class="pt-5" v-if="$route.name == 'register'">
              <div>Payslip or proof of billing</div>
              <span class="pt-2 pr-10 pb-10"><b>Upload Image</b></span>

              <div class="hover_pointer pt-10">
                <img
                  @click="$refs.filepaysplip.click()"
                  :src="img_holder_payslip"
                  alt="item_.js"
                  height="150"
                  contain
                  width="250"
                  class="mb-0"
                />
              </div>
            </v-col>
            <v-col class="d-none">
              <input
                style="display: none"
                type="file"
                id="fileInput"
                ref="filepaysplip"
                accept="image/png, image/jpeg"
                @change="onFileUploadPayslip"
              />
            </v-col>
          </v-row>
          <v-row v-if="$route.name == 'register'">
            <v-col>
              <div>Car Price</div>
              <v-range-slider
                v-model="price"
                max="1500000"
                min="10000"
                hide-details
                class="align-center"
              >
              </v-range-slider>
              <div>
                {{ price[1] }}
              </div>
            </v-col>
            <v-col>
              <div>Location</div>
              <div>
                <v-text-field
                  outlined
                  v-model="users.location"
                  :rules="standardRules"
                ></v-text-field>
              </div>
            </v-col>
            <v-col>
              <div>Car Transmission</div>
              <div>
                <v-select
                  :items="transmission"
                  outlined
                  :rules="standardRules"
                  v-model="users.car_transmission"
                ></v-select>
              </div>
            </v-col>
          </v-row>
          <v-row v-if="$route.name == 'register'">
            <v-col>
              <div>Car Brand</div>
              <div>
                <v-select
                  :items="brand"
                  outlined
                  :rules="standardRules"
                  v-model="users.car_brand"
                ></v-select>
              </div>
            </v-col>
            <v-col>
              <div>Car Category</div>
              <div>
                <v-text-field
                  outlined
                  v-model="users.car_category"
                  :rules="standardRules"
                ></v-text-field>
              </div>
            </v-col>
            <v-col>
              <div>Car Color</div>
              <div>
                <v-select
                  :items="color"
                  outlined
                  :rules="standardRules"
                  v-model="users.color"
                ></v-select>
              </div>
            </v-col>
          </v-row>
          <div align="center">
            <v-btn
              depressed
              color="#6609af"
              dark
              @click="goOTP"
              :disabled="!valid"
              :loading="buttonLoad"
            >
              Register
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-form>
  </div>
</template>
<script>
import validations from '@/utils/validations'
export default {
  data() {
    return {
      expirationTime: 60,
      isOTPSuccessful: false,
      isAgree: false,
      isRegistered: false,
      ...validations,
      price: [10000, 10000],
      img_holder: 'image_placeholder.png',
      image: '',
      valid: false,
      url: '',
      otpValidate: '',
      users: [],
      buttonLoad: false,
      image_payslip: '',
      img_holder_payslip: 'image_placeholder.png',
      isOTP: false,
      brand: [],
      color: [],
      transmission: [],
      otpVal: '',
    }
  },
  created() {
    this.loadData()
    const string_length = 6
    this.otpVal = [...Array(string_length)]
      .map((i) => (~~(Math.random() * 36)).toString(36))
      .join('')
  },
  methods: {
    loadData() {
      this.dialogAdd = false
      this.eventsGetall()
    },
    async eventsGetall() {
      this.color = []
      this.isLoading = true
      const res = await this.$axios
        .get(`/referencegetall/`, {
          headers: {
            // Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data)
          this.reference = res.data
          this.reference.map((item) => {
            if (item.reference_type == 'Car Color') {
              this.color.push(item.name)
            } else if (item.reference_type == 'Car Transmissions') {
              this.transmission.push(item.name)
            }
            //  else if(item.reference_type=='Car Model'){
            //    this.model.push(item.name)
            //  }
            else if (item.reference_type == 'Car Brand') {
              this.brand.push(item.name)
            }
          })
          this.isLoading = false
        })
    },
    countDownTimer() {
      if (this.expirationTime > 0) {
        setTimeout(() => {
          this.expirationTime -= 1
          this.countDownTimer()
        }, 1000)
      } else {
        this.otpVal = [...Array(string_length)]
          .map((i) => (~~(Math.random() * 36)).toString(36))
          .join('')
      }
    },
    async goOTP() {
      if (!this.isAgree) {
        return
      }
      this.expirationTime = 60
      this.countDownTimer()
      this.buttonLoad = true
      const res = await this.$axios
        .post(
          `/otp/`,
          { code: this.otpVal, email: this.users.email },
          {
            headers: {
              // Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          this.isOTP = true
          this.buttonLoad = false
        })
    },
    goToLogin() {
      this.$router.push('/login')
    },
    async submitHandler() {
      if (this.otpVal != this.otpValidate) {
        this.isOTPSuccessful = true
        return
      }
      // this.valid = this.$refs.form.validate();
      // if (!this.valid) {
      //   return;
      // }
      this.buttonLoad = true
      try {
        let form_data = new FormData()
        if (this.image != null && this.image != '') {
          form_data.append('image', this.image)
        }
        if (this.image_payslip != null && this.image_payslip != '') {
          form_data.append('payslip', this.image_payslip)
        }
        form_data.append('username', this.users.username)
        form_data.append('is_verified', false)
        form_data.append('password', this.users.password)
        form_data.append('suffix', this.users.suffix)
        form_data.append('firstname', this.users.firstname)
        form_data.append('middlename', this.users.middlename)
        form_data.append('lastname', this.users.lastname)
        form_data.append('email', this.users.email)
        form_data.append('age', this.users.age)
        form_data.append('contact_number', this.users.contact_number)
        form_data.append('address', this.users.address)
        form_data.append('gender', this.users.gender)
        form_data.append('occupation', this.users.occupation)
        form_data.append('car_price', this.price[1])
        form_data.append('location', this.users.location)
        form_data.append('car_transmission', this.users.car_transmission)
        form_data.append('car_brand', this.users.car_brand)
        form_data.append('car_category', this.users.car_category)
        form_data.append('car_color', this.users.car_color)
        form_data.append(
          'account_type',
          this.$route.name == 'register' ? 'Customer' : 'Seller'
        )
        const response = await this.$axios
          .post('/signup/', form_data, {
            headers: {},
          })
          .then(() => {
            this.isRegistered = true
            // this.$refs.form.reset()
            this.isRegistered = true
            this.buttonLoad = false
          })
      } catch {
        this.buttonLoad = false
      }
    },
    onFileUploadPayslip(e) {
      this.image_payslip = e
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
      this.image_payslip = e
      if (e == null) {
      } else {
        this.url, (this.img_holder_payslip = URL.createObjectURL(e))
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