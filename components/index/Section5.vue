
<template>

  <div>
    <v-layout row wrap>
      <v-container>
        <v-flex >
          <v-layout align-space-around justify-end row>
            <v-flex>
              <div class="border pa-4">
                <h1 class="lnbleufonce--text text-lg-left">MY BULLET JOURNAL</h1>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-container>
    </v-layout>

    <v-container>
      <v-layout row wrap justify-center>

        <v-card
          v-for="item in $store.state.items"
          :key="item.id"
          class="ma-4"
          width="500"
        >
          <v-img
            class="white--text"
            height="350px"
            :src="item.fimg_url"
            aspect-ratio="1"
          >
            <template v-slot:placeholder>
              <v-layout
                fill-height
                align-center
                justify-center
                ma-1
              >
                <v-progress-circular inderminate></v-progress-circular>
              </v-layout>
            </template>
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <nuxt-link
                    :to="'/posts/'+item.slug"
                    class="lnorange--text"
                  >
                    <h1>{{ item.title.rendered }}</h1>
                  </nuxt-link>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>

          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Partager</v-btn>
            <v-rating
              v-model="rating"
              background-color="orange"
              color="lnbleufonce"
              medium
            ></v-rating>
          </v-card-actions>
        </v-card>

      </v-layout>
    </v-container>
  </div>

</template>
<script>
  export default {
    name: "Section5.vue",
  }
</script>

<style scoped>

</style>
