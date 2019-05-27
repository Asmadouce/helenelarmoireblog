<template>
  <div>
    <v-app>
      <Toolbar/>
      <nuxt/>
    </v-app>
  </div>
</template>

<script>
  import Toolbar from '~/components/Toolbar.vue';

  export default {
    components: {
      Toolbar
    }
  }

</script>
