<template>
  <v-dialog v-model="isOpen" width="1000" persistent>
    <v-card class="pa-10">
      <div align="center" class="text-h6">Add Reference</div>
      <div class="text-h6">Event</div>
      <v-col cols="12" class="px-0">
        <div>Reference Type</div>
        <div>
          <v-select :items="reference_selection" outlined v-model="reference.reference_type"></v-select>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Code</div>
        <div>
          <v-text-field outlined v-model="reference.code"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Name</div>
        <div>
          <v-text-field outlined v-model="reference.name"></v-text-field>
        </div>
      </v-col>
      <!-- <v-col cols="12" class="px-0">
        <div>descriptions</div>
        <div>
          <v-textarea outlined v-model="events.descriptions"></v-textarea>
        </div>
      </v-col> -->
       <!-- <v-col>
        <span class="pt-2 pr-10 pb-10"><b>Upload Image<v-icon @click="$refs.file.click()">mdi-plus</v-icon></b></span>

        <div class="hover_pointer pt-10">
          <img
            @click="$refs.file.click()"
            :src="img_holder"
            alt="item_.js"
            height="150"
            width="150"
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
      </v-col> -->
      <v-card-actions>
        <v-row align="center">
          <v-col align="end">
            <v-btn color="red" text @click="cancel"> Cancel </v-btn>
          </v-col>
          <v-col>
            <v-btn
              color="success"
              text
              @click="addReference"
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
      //   this.announcement=this.items
    },
  },
  data() {
    return {
      reference_selection:['Car Brand','Car Model','Car Transmissions','Category','Car Color','Fuel Type'],
      reference:[],
      room_list:['Standard','Deluxe','Suite'],
      events: [],
      buttonLoad: false,
      img_holder:'image_placeholder.png'
    };
  },
  methods: {
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
        alert(error)
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