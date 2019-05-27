<template>
  <div >
    <v-container class="text">
      <v-layout row wrap >

        <v-flex d-flex xs12 sm6 md9 lg10>

          <v-layout row wrap >

            <v-icon color="lnbleufonce" x-large>bubble_chart</v-icon>
            <v-flex xs12 sm9 md10 class="pa-4 border">
              <v-icon color="lnbleufonce" x-large>bubble_chart</v-icon>
              <h1 >MIEUX RECRUTER EST MA DEVISE!</h1>
            </v-flex>

            <v-flex xs12 sm3 md2 lg4>
              <v-avatar size="310px">
                <v-img
                  :src="require('@/static/ampoule.png')"
                  aspect-ratio="1.4"
                  contain
                ></v-img>
              </v-avatar>
            </v-flex>

            <v-flex xs12 lg8 pa-5 text-lg-left>
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
      </v-layout>
    </v-container>
  </div>
</template>

<script>
    export default {
        name: "Section3"
    }
</script>

<style scoped>
.text{
  color:#2e3f5f;
}
.border{
  border-bottom: 1px solid #2e3f5f;
}
</style>
