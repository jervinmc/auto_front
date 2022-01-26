<template>
  <div>
      <contact-hero />
      <contact-container />
  </div>
</template>

<script>
import ContactContainer from "../../components/contacts/ContactContainer.vue"
import ContactHero from '../../components/contacts/ContactHero.vue'

export default {
  components: { ContactContainer, ContactHero }

}
</script>

<style>

</style>