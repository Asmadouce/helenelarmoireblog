<template>
  <v-layout row class="lnorange sec1">
    <v-container>
      <v-flex xs12>

          <v-container fluid>
            <nuxt-link class="title" to="/">
              <img src="../../static/logo.png" />
            </nuxt-link>
          </v-container>

        <div class="border pa-4">
          <h1 class="white--text" >LE PROJET D'HELENE</h1>
        </div>


        <div class="pa-4" >
          <div class="white--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ducimus est explicabo, molestias ipsum veniam voluptatum fuga</div>
        </div>

      </v-flex>
    </v-container>
  </v-layout>
</template>
<script>

    export default {
      name: "Section5"
    }
</script>

<style scoped>
  .sec1
  {
    margin-top: 45px;
  }

  .border{
    border-bottom: 1px solid white;
  }

</style>
