<template>
  <v-container>
      <v-col cols=12>
        <v-card elevation="4">
          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="teal"
            grow
          >
            <v-tab>
              Chats
            </v-tab>
            <v-tab>
              Wishes
            </v-tab>
            <v-tab>
              Calls
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <Chats/>
            </v-tab-item>
            <v-tab-item>
              <Wishes/>
            </v-tab-item>
            <v-tab-item>
              <Calls/>
            </v-tab-item>
          </v-tabs-items>    
        </v-card>
      </v-col>
  </v-container>
</template>

<script>
import Chats from './Chats.vue'
import Wishes from './Wishes.vue'
import Calls from './Calls.vue'
  export default {
    name: 'ChatBox',
    components:{
      Chats,
      Wishes,
      Calls
    },
    data () {
      return {
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>
