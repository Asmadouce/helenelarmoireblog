<template>
  <div class="lnbleufonce">
    <v-container >

      <v-layout row wrap class="white--text">

        <v-flex d-flex xs12 sm6 md9 lg10>

          <v-layout row wrap >
            <v-icon color="lnorange" x-large>bubble_chart</v-icon>
            <v-flex xs12 sm9 md10 class="pa-4 border">
              <v-icon color="lnorange" x-large>bubble_chart</v-icon>
              <h1 >ENTREPRENDRE DE L'IDEE</h1>
            </v-flex>

            <v-flex xs12 lg10 pa-5>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat<br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat<br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
              </div>

            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 sm3 md2 lg2>
          <!--          <v-avatar size="310px">-->
          <v-img
            :src="require('@/static/affaire.png')"
            aspect-ratio="0.7"
            contain
          ></v-img>
          <!--          </v-avatar>-->
        </v-flex>

      </v-layout>

    </v-container>
  </div>
</template>

<script>
    export default {
        name: "Section4"
    }
</script>

<style scoped>
  .border{
    border-bottom: 1px solid white;
  }
</style>
