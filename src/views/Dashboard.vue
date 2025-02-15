<!-- Dashboard -->
<template>
  <div class="dashboard-container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="logo">
        <router-link to="/"><img src="../assets/images/logo1.png" alt="Logo" /></router-link>
      </div>
      <nav>
        <ul>
          <li>
            <i class="icon"><img src="../assets/images/Icon1.svg" alt="" /></i>
            <span>Dashboard</span>
          </li>
          <li>
            <i class="icon"><img src="../assets/images/icon2.svg" alt="" /></i>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <i class="icon"><img src="../assets/images/icon3.svg" alt="" /></i>
            <span>Template</span>
          </li>
          <li>
            <i class="icon"><img src="../assets/images/icon4.svg" alt="" /></i>
            <span>About</span>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <header class="top-header">
        <div class="greeting">
          <img
          class="header-profile-pic"
            v-if="profilePicture"
            :src="profilePicture"
            alt="Profile"
          />
          <!-- <img class="header-profile-pic" v-if="typeof userDetails?.profilePicture === 'string'" :src="userDetails.profilePicture" alt="Profile Picture" /> -->
          <p>Hi,{{ userDetails?.name }}</p>
        </div>
        <div class="btn">
          <button @click="navigateToEdit" class="btn1">Edit</button>
          <button @click="logout" class="btn1">Logout</button>
        </div>
      </header>
      <!-- Header -->
      <section class="header">
        <div class="cover-image">
          <img src="../assets/images/coverimg.svg" alt="Cover" />
        </div>
        <div class="profile-info">
          <div class="profile-pic">
            <!-- <img  v-if="typeof userDetails?.profilePicture === 'string'" :src="userDetails.profilePicture" alt="Profile Picture" /> -->
            <img v-if="profilePicture" :src="profilePicture" alt="Profile Picture" />
            <!-- <span class="verified">✔️</span> -->
          </div>
          <div class="profile-text">
            <h1>{{ userDetails?.name }}</h1>
            <p>{{ userDetails?.title }}</p>
          </div>
        </div>
      </section>

      <!-- Experience -->
      <section class="section">
        <h2>Experience</h2>
        <p>
          {{ userDetails?.projects }}
        </p>
      </section>


      <!-- About Me -->
      <section class="section">
        <h2>About Me</h2>
        <p>
          {{ userDetails?.about }}
        </p>
      </section>

      <!-- Portfolios -->
      <section class="section">
        <h2>Select A Portfolio</h2>
        <div class="portfolio-templates">
          <div
            class="template"
            v-for="template in templates"
            :key="template.id"
            @click="selectTemplate(template.id)"
          >
            <img :src="template.image" :alt="template.name" />
            <p>{{ template.name }}</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";
import { ref, watchEffect, computed } from "vue";


const userStore = useUserStore();
const router = useRouter();

// Local State
const userDetails = ref(userStore.userDetails);
const profilePicture = ref<string | undefined>();

let previousObjectURL: string | null = null; // To clean up old URLs

// Function to safely get profilePicture
const getProfilePicture = () => {
  const picture = userStore.userDetails?.profilePicture;

  if (previousObjectURL) {
    URL.revokeObjectURL(previousObjectURL); // Cleanup old URL
    previousObjectURL = null;
  }

  if (picture instanceof Blob) {
    const newObjectURL = URL.createObjectURL(picture);
    previousObjectURL = newObjectURL;
    // previousObjectURL = URL.createObjectURL(picture);
   
    // Save Object URL to the user store for persistence
    userStore.updateUserDetails({ profilePicture: newObjectURL });
    return newObjectURL;
  }

  return picture as string | undefined;
};


// Watch for changes in userDetails
watchEffect(() => {
  userDetails.value = userStore.userDetails;
  profilePicture.value = getProfilePicture();

  // Redirect to login if userDetails is null
  if (!userDetails.value) {
    router.push("/login");
  }
});



// Redirect to login if not authenticated
if (!userStore.loggedIn) {
  router.push("/login");
}

const navigateToEdit = () => {
  router.push("/edit-profile");
};

if (!userDetails.value) {
  router.push("/login");
}
// Template Data
import templateImage1 from "../assets/images/template.svg";
import templateImage2 from "../assets/images/template2.svg";

const templates = ref([
  { id: 1, name: "Classic Portfolio", image: templateImage1 },
  { id: 2, name: "Modern Portfolio", image: templateImage2 },
  { id: 3, name: "Creative Portfolio", image: templateImage2 },
]);



const selectTemplate = (templateId: number) => {
  userStore.updateUserDetails({ selectedTemplate: templateId });
  router.push("/portfolio-view");
  // alert(`Template ${templateId} selected!`);
  // Logic to save the selected template for the user
};

const logout = () => {
  userStore.logout();
  router.push("/login");
};
</script>

<style scoped>
@import "../assets/views-styles/dashboard.css";
</style>
