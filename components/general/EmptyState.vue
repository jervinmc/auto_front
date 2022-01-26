<template>
  <div v-if="vertically" style="height:150px" class="px-5">
    <v-sheet class="d-flex justify-center align-center" height="150" color="#f4f4f4" style="border-radius: 12px;">
        <div align="center" class="pa-2 grey--text" > 
          <em>{{label}}</em>
        </div>
    </v-sheet>
  </div>
<v-container class="pa-0" v-else>
    <v-col>
     <v-col 
    style="background-color: #f4f4f4; 
    margin: 10px; 
    border-radius: 12px;
    min-height: 150px;">
    No display here.
    </v-col>
    </v-col>
</v-container>
</template>

<script>
export default {
    props:['vertically','label']
}
</script>

<style>

</style>
