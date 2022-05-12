<template>
    <v-container>
        <v-row justify="center" justify-sm="center" class="pt-10">
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
                            v-model="email"
                            :rules="emailRules"
                            label="Email"
                            outlined
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="username"
                            :rules="usernameRules"
                            label="Username"
                            outlined
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="nickname"
                            :rules="nicknameRules"
                            label="Nick Name"
                            outlined
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="password"
                            :rules="[passwordRules.required, passwordRules.min]"
                            label="Password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            @click:append="show1 = !show1"
                            outlined
                            required
                        ></v-text-field>
                        <v-card-actions>
                            <v-btn
                                elevation="10"
                                color="teal lighten-3"
                            >
                                Sign Up
                            </v-btn>
                            <v-chip
                                class="mx-4 "
                                color="pink"
                                outlined
                                pill
                                @click="goToLogin"
                                >
                                <v-icon left>
                                    mdi-account-outline
                                </v-icon>
                                Already have an account
                            </v-chip>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data(){
            return{
                valid: true,
                email:'',
                username:'',
                nickname:'',
                password:'',
                show1: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                usernameRules: [
                    v => !!v || 'Username is required',
                ],
                nicknameRules: [
                    v => !!v || 'Nickname is required',
                ],
                passwordRules: {
                    required: value => !!value || 'Required.',
                    min: v => v.length >= 6 || 'Minimum 8 characters',
                }
            }
        },
        methods:{
            goToLogin(){
                this.$router.push('/')
            },
            adduser(){
                const signupData = {
                    email: this.email,
                    username: this.username,
                    nickname: this.nickname,
                    password: this.password
                }
                axios.post('http://localhost:3088/users/register',signupData)
                .then((res)=>{
                    const result = res.data;
                    console.log(result);
                    this.$router.push('/')

                })
            }
        }
    }
</script>

<style lang="css" scoped>

</style>