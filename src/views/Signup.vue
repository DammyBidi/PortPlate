<template>
  <div class="main">
    <div class="left">
      <img src="../assets/images/logo1.png" alt="" />
      <h1>Create an account</h1>
      <p>
        Already have an account?
        <router-link to="/login">Login here</router-link>
      </p>
      <form @submit.prevent="handleSignUp">
        <input
          placeholder="Fullname"
          v-model="name"
          type="text"
          required
        />

        <input
          placeholder="Enter Email"
          v-model="email"
          type="email"
          required
        />

        <input v-model="password" type="password" placeholder="Enter Password" required />

        <div class="terms">
          <input type="checkbox" name="checkbox" id="remember" />
          <label for="remember">I agree with the terms and conditions </label>
        </div>

        <button type="submit">Sign Up</button>
      </form>
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    </div>
    <div class="right">
      <router-link to="/"
        ><button class="btn1">
          <div>
            <img src="../assets/images/arrow.png" alt="" />
            <p>Back to site</p>
          </div>
        </button></router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');
const errorMessage = ref('');

const handleSignUp = () => {
  try {
    userStore.saveUserDetails({ name: name.value, email: email.value, password: password.value });
    alert('Sign-Up Successful!');
    router.push('/registration'); // Redirect to the registration page
  } catch (error) {
    if (error instanceof Error) {
      errorMessage.value = error.message;
    } else {
      errorMessage.value = String(error);
    }
  }
};

</script>

<style scoped>
@import "../assets/views-styles/signup.css";
</style>
