<template>
  <v-container fluid class="pa-0">
     <v-img src="/hero_image.png" class="" gradient="to top right, rgba(100,115,201,.33), rgba(0,0,0,0.9)">
      <v-sheet
        color="transparent"
        height="85vh"
        class="d-flex justify-start align-center pl-16"
      >
        <hero />
      </v-sheet>
    </v-img>
    <div align="center">
      <contents />
    </div>
    <footer-all class="pt-10" />
  </v-container>
</template>

<script>
import FooterAll from '../components/general/FooterAll.vue'
import Contents from '../components/index/Contents.vue'
import Hero from '../components/index/Hero.vue'
export default {
  components: { Hero, Contents,FooterAll },
}
</script>

,
    FooterAll<style>
</style>