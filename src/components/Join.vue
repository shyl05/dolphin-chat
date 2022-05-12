<template>
    <div>
        <v-form @submit.prevent="joinRoom()">
            <v-btn
                color="success"
                class="mr-4"
                type="submit"
            >
                Join Room
            </v-btn>
        </v-form>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data: () => ({
            chat:{},
            valid: true,
        }),
        methods:{
            joinRoom() {
                this.chat.room = this.$route.params.id
                this.chat.nickname = this.$route.params.nickname
                this.chat.message = this.chat.nickname + ' join the room'
                axios.post(`http://localhost:3088/chats`, this.chat)
                .then(response => {
                    this.$router.push({
                        name: 'Chatbox',
                        params: { id: this.$route.params.id, nickname: this.$route.params.nickname }
                    })
                })
                .catch(e => {
                    this.errors.push(e)
                })
            },
        }     
    }
</script>

<style lang="css" scoped>

</style>