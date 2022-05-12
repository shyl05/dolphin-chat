<template>
  <v-app>
    <v-app-bar
      app
      color="teal"
    >
      <div class="d-flex align-center">
        <v-btn
          class="ma-2"
          text
          color="teal darken-4"
          @click.stop="drawer = !drawer"
        >
         <v-icon
          large
          color="teal accent-1"
          class="pa-2"
          >
            mdi-dolphin
          </v-icon>
          Dolphin Chat 
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-sheet
        height="100%"
        class="overflow-hidden"
        style="position: relative;"
        color="green lighten-5"
        elevation=2 
      >
        <v-container>
          <router-view/>
        </v-container>

        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          app
          color="teal lighten-5"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Jake Blue</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <v-list
            nav
            dense
          >
            <router-link to="/">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-folder</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
            </router-link>
            
            <router-link to="/groups">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account-group</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Groups</v-list-item-title>
              </v-list-item>
            </router-link>

            <router-link to="/about">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-information-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-title>About</v-list-item-title>
              </v-list-item>
            </router-link>
          </v-list>
        </v-navigation-drawer>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data (){
    return {
        drawer: null
      }
  },
};
</script>
<style scoped>
.v-application a{
  text-decoration: none;
}
.v-list-item:hover{
  background-color: teal;
}
</style>
