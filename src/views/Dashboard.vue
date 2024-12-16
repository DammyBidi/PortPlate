<!-- Dashboard -->
<template>
  <div class="dashboard-container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="logo">
        <img src="../assets/images/logo1.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <i class="icon"><img src="../assets/images/Icon1.svg" alt="" /></i>
            <span>Dashboard</span>
          </li>
          <li>
            <i class="icon"><img src="../assets/images/icon2.svg" alt="" /></i>
            <span>Home</span>
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
            v-if="userDetails && userDetails.profilePicture"
            :src="userDetails?.profilePicture"
            alt="Profile"
          />
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
            <img
              v-if="userDetails && userDetails.profilePicture"
              :src="userDetails.profilePicture"
              alt="Profile Picture"
            />
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
        <!-- <h2>Select a Portfolio Template</h2>
        <div
          v-for="template in templates"
          :key="template.id"
          class="template"
          @click="selectTemplate(template.id)"
        >
          <img :src="template.image" :alt="template.name" />
          <p>{{ template.name }}</p>
        </div> -->
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { computed } from "vue";

const userStore = useUserStore();
const router = useRouter();

const userDetails = ref({
  ...userStore.userDetails,
  profilePicture:
    userStore.userDetails?.profilePicture instanceof Blob
      ? URL.createObjectURL(userStore.userDetails.profilePicture)
      : (userStore.userDetails?.profilePicture as string | undefined),
});

const navigateToEdit = () => {
  router.push("/edit-profile");
};

if (!userDetails.value) {
  router.push("/login");
}

import templateImage1 from "../assets/images/template.svg";
import templateImage2 from "../assets/images/template2.svg";

const templates = ref([
  {
    id: 1,
    name: "Classic Portfolio",
    image: templateImage1,
  },
  {
    id: 2,
    name: "Modern Portfolio",
    image: templateImage2,
  },
  {
    id: 3,
    name: "Creative Portfolio",
    image: templateImage2,
  },
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
