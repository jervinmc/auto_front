<template>
  <v-sheet color="transparent" >
      <div align="center" class="">
          <registration-form/>
      </div>
      <footer-all/>
    </v-sheet>
</template>

<script>
import FooterAll from '../../components/general/FooterAll.vue'
import RegistrationForm from '../../components/register/RegistrationForm.vue'
export default {
    components:{
        RegistrationForm,
        FooterAll
    }
}
</script>

<style>

</style>
x