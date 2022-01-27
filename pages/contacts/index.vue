<template>
  <div>
      <contact-hero />
      <contact-container />
      <footer-all />
  </div>
</template>

<script>
import ContactContainer from "../../components/contacts/ContactContainer.vue"
import ContactHero from '../../components/contacts/ContactHero.vue'
import FooterAll from '../../components/general/FooterAll.vue'

export default {
  components: { ContactContainer, ContactHero,FooterAll }

}
</script>
<style>

</style>