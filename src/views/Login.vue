<template>
    <v-container>
        <v-row justify="center" justify-sm="center" class="pt-16">
            <v-col
                cols="12"
                md="6"
                sm="6"
            >
                <v-card
                    elevation="10"
                    max-width="500"
                    class="pa-6"
                    color="teal lighten-5"
                >   
                    <v-form>
                        <v-text-field
                        label="Email"
                        v-model="email"
                        :rules="emailRules"
                        outlined
                        ></v-text-field>

                        <v-text-field
                            label="Password"
                            v-model="password"
                            :rules="[passwordRules.required, passwordRules.min]"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            @click:append="show1 = !show1"
                            outlined
                            
                        ></v-text-field>
                
                        <v-card-actions>
                            <v-btn
                                elevation="10"
                                color="green lighten-1"
                                @click="login()"
                            >
                                Login
                            </v-btn>
                            <v-btn
                                elevation="10"
                                color="yellow lighten-3"
                                @click="signup()"
                            >
                                Sign Up
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                    
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
    export default {
        data(){
            return{
                valid: true,
                email:'',
                password:'',
                show1: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                passwordRules: {
                    required: value => !!value || 'Required.',
                    min: v => v.length >= 6 || 'Minimum 8 characters',
                }
            }
        },
        methods:{
            signup(){
                this.$router.push('/signup')
            },
            login(){
                const loginData = {
                    email:this.email,
                    password:this.password
                }
                axios.post('http://localhost:3088/users/login',loginData)
                .then((res)=>{
                    const result = res.data;
                    console.log(result);
                    if(result.errors){
                        swal({
                            title: "OOPS!",
                            text: "Invalid password or email!",
                            icon: "error",
                            button: "Ok!",
                        });
                    }
                    else{
                        swal({
                            title: "Logged!",
                            icon: "success",
                            button: "Ok",
                        })
                        .then(()=>{
                            sessionStorage.setItem('token',JSON.stringify(result.token));
                            this.$router.push('/groups')
                        })
                    }
                })
            }
        }
    }
</script>

<style lang="css" scoped>

</style>