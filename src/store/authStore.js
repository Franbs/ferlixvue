import { defineStore } from 'pinia'

export const authStore = defineStore('auth', {
    state: () => {
        return {
            email: null,
            access_token: null,
            isAuthenticated: false
        }
    },
    actions: {
        async login(email, password) {
            const response = await fetch('http://ferlixapp.herokuapp.com/api/login', 
                {
                    method: 'POST',
                    'Content-Type': 'application/json',
                    body: JSON.stringify({email, password})
                }
            );

            const data = await response.json();

            if (data.access_token) {
                this.email = email;
                this.access_token = data.access_token;
                this.isAuthenticated = true;
            }
        }
    }
})