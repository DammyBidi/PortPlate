<template>
  <div class="main">
    <nav>
      <div class="logo"><img src="@/assets/images/logo1.png" alt="" /></div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/">About</router-link>
        <router-link to="/">Contact</router-link>
      </div>
      <div class="nav-btn">
        <router-link to="/login"
          ><button class="btn1">Login</button></router-link
        >
        <router-link to="/signup"
          ><button class="btn2">SignUp</button></router-link
        >
      </div>
    </nav>

    <div class="form-container">
      <div class="form-card">
        <header>
          <img src="../assets/images/logo3.png" alt="" />
          <h2>Your Skills, Your Story, Your Portfolio</h2>
          <p>Fill in your details accordingly</p>
        </header>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <img src="../assets/images/uploadimg.png" alt="Upload Icon" />
            <div>
              <label for="profilePicture">Upload Profile Picture:</label>
              <input
                type="file"
                id="profilePicture"
                @change="handleFileUpload"
                accept="image/*"
              />
            </div>
          </div>
          <div class="input-group">
            <input
              v-model="name"
              type="text"
              placeholder=" FullName"
              required
            />
            <input
              v-model="title"
              type="text"
              placeholder="I am a..."
              required
            />
            <input
              v-model="githubLink"
              type="url"
              placeholder="Your GitHub Link"
              required
            />
            <input
              v-model="facebookLink"
              type="url"
              placeholder="Your Facebook Link"
              required
            />
            <input
              v-model="instagramLink"
              type="url"
              placeholder="Your Instagram Link"
              required
            />
            <input
              v-model="twitterLink"
              type="url"
              placeholder="Your Twitter Link"
              required
            />
            <textarea v-model="shortBio" placeholder="shortBio"></textarea>
            <textarea
              v-model="projects"
              placeholder="Experience/projects"
              required
            ></textarea>
            <textarea
              v-model="about"
              placeholder="About yourself"
              required
            ></textarea>
          </div>
          <button class="save-btn" type="submit">Save</button>
        </form>
      </div>
      <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const name = ref(userStore.userDetails?.name || "");
const title = ref("");
const shortBio = ref("");
const projects = ref("");
const about = ref("");
const githubLink = ref("");
const facebookLink = ref("");
const instagramLink = ref("");
const twitterLink = ref("");
const profilePicture = ref<File | null>(null);
const errorMessage = ref("");

const handleFileUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    profilePicture.value = file;
  }
};

const handleSubmit = () => {
  if (
    !name.value ||
    !title.value ||
    !shortBio.value ||
    !projects.value ||
    !about.value ||
    !githubLink.value ||
    !instagramLink ||
    !twitterLink ||
    !facebookLink.value ||
    !profilePicture.value
  ) {
    errorMessage.value = "Please fill in all fields.";
    return;
  }

  // Save user details in the store
  userStore.userDetails = {
    ...userStore.userDetails,
    name: name.value,
    title: title.value,
    shortBio: shortBio.value,
    projects: projects.value,
    about: about.value,
    facebookLink: facebookLink.value,
    instagramLink: instagramLink.value,
    twitterLink: twitterLink.value,
    githubLink: githubLink.value,
    profilePicture: profilePicture.value,
    email: userStore.userDetails?.email || "",
  };

  // Clear the form fields
  name.value = "";
  title.value = "";
  shortBio.value = "";
  projects.value = "";
  about.value = "";
  githubLink.value = "";
  facebookLink.value = "";
  instagramLink.value = "";
  twitterLink.value = "";
  profilePicture.value = null;

  // Redirect to the dashboard
  router.push("/dashboard");
};
</script>

<style scoped>
@import "../assets/views-styles/registration.css";
</style>
