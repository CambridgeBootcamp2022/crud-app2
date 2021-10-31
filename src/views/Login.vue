<template>
    <form @submit.prevent="signIn">
        <div class="flex align-items-center justify-content-center pt-4">
            <div class="surface-card mx-4 lg:mx-0 p-4 shadow-2 border-round w-full lg:w-8">
                <div class="text-center mb-5">
                    <img
                        src="../assets/images/logos/hyper.svg"
                        alt="Image"
                        height="50"
                        class="mb-3"
                    />
                    <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                    <span class="text-600 font-medium line-height-3">Don't have an account?</span>
                    <router-link
                        :to="{ name: 'Register' }"
                        class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
                    >Create today!</router-link>
                </div>

                <div>
                    <label for="email" class="block text-900 font-medium mb-2">Email</label>
                    <InputText v-model="email" id="email" type="text" class="w-full mb-3" />

                    <label for="password" class="block text-900 font-medium mb-2">Password</label>
                    <InputText
                        v-model="password"
                        id="password"
                        type="password"
                        class="w-full mb-3"
                    />

                    <div class="flex align-items-center justify-content-end mb-6">
                        <router-link
                            :to="{ name: 'ForgotPassword' }"
                            class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
                        >Forgot your password?</router-link>
                    </div>

                    <Button label="Sign In" icon="pi pi-user" type="submit" class="w-full"></Button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import authService from '../services/auth-service.js';

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async signIn() {
            const user = await authService.login(this.email, this.password);
            if (user) {
                this.$router.replace({ name: 'Home' });
            }
        }
    }
}
</script>

<style scoped>
</style>