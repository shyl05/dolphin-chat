<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-list class="panel-body">
          <v-list-item v-for="(item, index) in chats" :key="index" class="chat">
            <div class="left clearfix" v-if="item.nickname === nickname">
              
              <div class="chat-body clearfix">
                <div class="header">
                  <strong class="chathead">{{ item.nickname }}</strong>
                </div>
                <p>{{ item.message }}</p>
              </div>
            </div>
            <div class="right clearfix" v-else>
              
              <div class="chat-body clearfix">
                <div class="header">
                  <strong class="chathead">{{ item.nickname }}</strong>
                </div>
                <p>{{ item.message }}</p>
              </div>
            </div>
          </v-list-item>
        </v-list>
        <ul v-if="errors && errors.length">
          <li v-for="error of errors">
            {{error.message}}
          </li>
        </ul>
        <v-form @submit.prevent="onSubmit" class="chat-form">
            <v-text-field id="message" v-model.trim="chat.message"></v-text-field>
            <v-input>
              <v-btn type="submit" variant="info">Send</v-btn>
            </v-input>
        </v-form>
      </v-col>
  </v-row>
  </v-container>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ChatRoom',
  data () {
    return {
      chats: [],
      errors: [],
      nickname: this.$route.params.nickname,
      chat: {}
    }
  },
  created () {
    console.log(this.$route.params.id)
    axios.get(`http://localhost:3088/chats/`+this.$route.params.id)
    .then(response => {
      this.chats = response.data
      console.log(this.chats)
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    logout (id) {
      this.$router.push({
        name: 'JoinRoom',
        params: { _id: _id }
      })
    },
    onSubmit () {
      this.chat.group = this.$route.params.id
      this.chat.nickname = this.$route.params.nickname
      axios.post(`http://localhost:3088/chats`, this.chat)
      .then(response => {
        this.chats.push(response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>

  .chat{
    border: 1px solid teal;
    width: 200px;
    margin: 5px;
    margin-left: 100px;
    margin-right: 100px;
  }
  .chat .left .chat-body {
    text-align: left;
    
  }

  .chat .right .chat-body {
    text-align: right;
   
  }

  .chat .chat-body p {
    margin: 0;
    color: #777777;
  }

  .panel-body {
    overflow-y: scroll;
    height: 250px;
  }

  .chat-form {
    margin: 10px auto;
    width: 80%;
  }

  .chathead{
    color: teal;
  }

  
</style>