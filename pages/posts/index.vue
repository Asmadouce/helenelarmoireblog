<template>
  <v-container>
    <v-timeline class="ma-5">

      <v-timeline-item
        v-for=" items in $store.state.items"
        :key="items.id"
        color="lnvert"
        large
      >
        <template v-slot:opposite>
          <span>{{ items.date }}</span>
        </template>
        <v-card
          class="elevation-2"
        >
          <v-card-title class="headline lnbleufonce--text"><h1>{{ items.title.rendered }}</h1></v-card-title>
          <v-card-text>
            <div v-html="items.content.rendered"></div>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
