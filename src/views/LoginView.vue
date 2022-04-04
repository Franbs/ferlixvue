<template>
    <h1>Login</h1>

    <input type="text" v-model="email" placeholder="Email">
    <input type="text" v-model="password" placeholder="Password">

    <button @click="login">Login</button>
</template>

<script>
export default {
    created() {
        this.$auth.$subscribe((mutation, state) => {
            if (state.isAuthenticated) {
                this.$router.push('/');
            }
        })
    },
    data() {
        return {
            email: '', 
            password: ''
        }
    },
    methods: {
        login() { /*any*/
            this.$auth.login(this.email, this.password);
        }
    }
}
</script>