<template>
  <div>
    <v-layout row wrap lnbleufonce>
      <v-container>
        <v-flex >
          <v-layout align-space-around justify-end row>
            <v-flex>
              <div class="border pa-4">
                <h1 class="text-lg-left white--text">MY YOUTUBE</h1>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-container>
    </v-layout>

    <v-layout lnbleufonce>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-container grid-list-sm fluid>
            <v-layout row wrap>
              <v-flex
                v-for="n in 9"
                :key="n"
                xs4
                d-flex
              >
                <v-card flat tile class="d-flex">
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-layout
                        fill-height
                        align-center
                        justify-center
                        ma-0
                      >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-layout>
                    </template>
                  </v-img>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

  </div>
</template>


<script>
    export default {
        name: "Section6"
    }
</script>

<style scoped>

</style>
