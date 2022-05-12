<template>
    <v-container>
        <v-list class="py-0">
            <v-list-item-group
                active-class="teal--text"
                multiple
            >
                <template v-for="(group, index) in groups">
                    <v-list-item :key="group._id" @click="openGroup(group._id)">
                        <!-- <template v-slot:default="{ active }"> -->
                        <template>
                            <v-list-item-content>
                                <v-list-item-title v-text="group.group_name"></v-list-item-title>
                            </v-list-item-content>

                            <!-- <v-list-item-action>
                                <v-list-item-action-text></v-list-item-action-text>
                                <v-icon
                                    v-if="!active"
                                    color="grey lighten-1"
                                >
                                    mdi-star-outline
                                </v-icon>
                                <v-icon
                                    v-else
                                    color="yellow darken-3"
                                >
                                    mdi-star
                                </v-icon>
                            </v-list-item-action> -->
                        </template>
                    </v-list-item>

                        <v-divider
                            v-if="index < groups.length - 1"
                            :key="index"
                        ></v-divider>
                    </template>
            </v-list-item-group>
        </v-list>
        <ul v-if="errors && errors.length">
            <li v-for="error of errors" :key="error">
                {{error.message}}
            </li>
        </ul>
    </v-container>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                groups : [],
                errors : [],
                userdata : {}
            }
        },
        methods:{
            getAllGroups(){
                axios.get(`http://localhost:3088/group`)
                .then(response => {
                    this.groups = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
            },
            getTokenData(){
                const token = sessionStorage.getItem('token')
                console.log(token)
                function parseJwt (token) {
                    var base64Url = token.split('.')[1];
                    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                    }).join(''));
                    return JSON.parse(jsonPayload);
                };
                const tokenData = parseJwt(token)
                this.userdata = tokenData

            },
            openGroup(_id){
                this.$router.push({
                    name: 'Join',
                    params: {
                                id: _id,
                                nickname: this.userdata.nickname
                            }
                })
            }
        },
        mounted:function(){
            this.getAllGroups()
            this.getTokenData()
        }
    }
</script>

<style lang="css" scoped>

</style>