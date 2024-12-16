// Step 6: Login Page (pages/Login.vue)
<template>
  <div class="main">
    <div class="left">
      <router-link to="/"
        ><button class="btn1">
          <div>
            <img src="../assets/images/arrowr.svg" alt="" />
            <p>Back to site</p>
          </div>
        </button></router-link
      >
    </div>
    <div class="right">
      <img src="../assets/images/logo1.png" alt="" />
      <h1>Login to your dashboard</h1>
      <p>
        Don't have an account with us?
        <router-link to="/signup">SignUp</router-link>
      </p>
      <form @submit.prevent="handleLogin">
        <label>Email:</label>
        <input v-model="email" type="email" required />

        <label>Password:</label>
        <input v-model="password" type="password" required />

        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";

const userStore = useUserStore();
const router = useRouter();
const email = ref('');
const password = ref('');
const errorMessage = ref('');

const handleLogin = () => {
  const user = userStore.authenticate({ email: email.value, password: password.value });
  if (user) {
    alert('Login Successful!');
    router.push('/dashboard');
  } else {
    errorMessage.value = 'Invalid email or password.';
  }
};


</script>

<style scoped>
@import "../assets/views-styles/login.css";
</style>
