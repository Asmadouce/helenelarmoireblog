<template>
    <nav>
        <v-toolbar
          flat
          fixed
          class="lnorange"
        >
             <v-spacer></v-spacer>
            <h3 class="white--text">MENU</h3>
            <v-toolbar-side-icon dark @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>

        <v-navigation-drawer
                app
                v-model="drawer"
                temporary
                class="lnbleufonce"
        >
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route" class="white--text">
                    <v-list-tile-action>
                        <v-icon color="white">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                          {{ link.text }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        name: "Toolbar.vue",
        data() {
            return {
                drawer: null,
                links: [
                  { icon: 'dashboard', text: 'Menu', route: '/' },
                  { icon: 'folder', text: 'Pages', route: '/pages' },
                  { icon: 'folder', text: 'Posts', route: '/posts' },
                  { icon: 'email', text: 'Contact', route: '/pages/contact' },
                ]
            }
        }
    }
</script>

<style scoped>
    .title{
        text-decoration: none;
    }
    .title:visited{
        color:white;
    }

</style>
