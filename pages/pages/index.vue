<template>
  <v-container class="my-5">
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg6
              v-for=" pages in $store.state.pages"
              class="data"
              :key="pages.id"
      >
        <v-card class="text-xs-center ma-3 lnbleufonce">
          <nuxt-link
            :to="'/pages/'+pages.slug"
          >
            <h1>{{ pages.title.rendered }}</h1>
          </nuxt-link>
          <div v-html="pages.content.rendered"></div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
        name: "pages"
    }
</script>

<style scoped>

</style>
