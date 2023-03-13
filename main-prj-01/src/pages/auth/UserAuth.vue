<template>
    <div>
        <section>
            <base-dialog :show="!!error" title="Error">
                {{  error }}
            </base-dialog>
            <base-dialog fixed :show="isLoading" title="Authenticating...">
                <base-spinner></base-spinner>
            </base-dialog>
        </section>
        <base-card>
            <form @submit.prevent="submitForm">
                <div>
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model.trim="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" id="password" v-model.trim="password" />
                </div>
                <div>
                    <base-button>{{submitButtonCaption}}</base-button>
                    <base-button type="button" mode="flat" @click="switchButton">{{switchButtonCaption}}</base-button>
                </div>
                <p v-if="!formValid">
                    Please enter valid email and password(length of password should be greater then 6 characters).
                </p>
            </form>
        </base-card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            email: "",
            password: "",
            formValid: true,
            mode: "login",
            error: null,
            isLoading: false
        }
    },
    computed:{
        submitButtonCaption(){
            if (this.mode  === 'login'){
                return 'Login'
            }else {
                return "Signup"
            }
        },
        switchButtonCaption(){
            if (this.mode  === 'login'){
                return 'Signup instead'
            }else {
                return "Login instead"
            }
        }
    },
    methods:{
        async submitForm(){
            this.formValid = true;
            if(this.email === '' || !this.email.includes('@') || this.password === '' ||this.password.length <  6){
                this.formValid = false;
                return
            }
            
            const actionPayload = {
                        email: this.email,
                        password: this.password
            };

            try{
                this.isLoading = true;
                if (this.mode === 'login'){
                    await this.$store.dispatch('login', actionPayload)
                }else {
                    await this.$store.dispatch('signup', actionPayload);
                }
            }catch(error){
                this.error = error || 'Something went wrong';
            }
            this.isLoading = false;
        

        },
        switchButton(){
            if(this.mode === 'login') {
                this.mode = 'signup';
            } else{
                this.mode = 'login';
            }
        }
    }
};
</script>