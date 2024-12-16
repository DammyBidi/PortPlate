<!-- Template -->
<template>
   <div class="classic-portfolio">
    <!-- Header -->
    <header class="header">
      <img
        class="header-profile-pic"
        v-if="userDetails?.profilePicture"
        :src="resolveProfilePicture(userDetails?.profilePicture)"
        alt="Profile"
      />
      <h1>{{ userDetails?.name || "Your Name" }}</h1>
      <p>{{ userDetails?.title || "Your Title" }}</p>
    </header>

    <!-- About Section -->
    <section class="about">
      <h2>About Me</h2>
      <p>{{ userDetails?.about || "Write something about yourself here." }}</p>
    </section>

    <!-- Projects Section -->
    <section class="projects" v-if="userDetails?.projects?.length">
      <h2>Projects</h2>
      <div class="project-grid">
        <div
          class="project-card"
          v-for="(project, index) in userDetails.projects"
          :key="index"
        >
          <h3>Project {{ index + 1 }}</h3>
          <p>{{ project || "Project description goes here." }}</p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" v-if="hasContactInfo">
      <h2>Contact</h2>
      <ul>
        <li v-if="userDetails?.githubLink">
          <a :href="userDetails.githubLink" target="_blank" rel="noopener">
            GitHub
          </a>
        </li>
        <li v-if="userDetails?.twitterLink">
          <a :href="userDetails.twitterLink" target="_blank" rel="noopener">
            Twitter
          </a>
        </li>
        <li v-if="userDetails?.facebookLink">
          <a :href="userDetails.facebookLink" target="_blank" rel="noopener">
            Facebook
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "../store/user";
import { computed } from "vue";

// Access user data from the store
const userStore = useUserStore();
const userDetails = computed(() => userStore.userDetails);

// Helper function to resolve profile picture URL
const resolveProfilePicture = (profilePicture: string | Blob | undefined): string => {
  if (!profilePicture) return "";
  return profilePicture instanceof Blob ? URL.createObjectURL(profilePicture) : profilePicture;
};

// Computed property to check if contact info exists
const hasContactInfo = computed(() => {
  return (
    userDetails.value?.githubLink ||
    userDetails.value?.twitterLink ||
    userDetails.value?.facebookLink
  );
});
</script>

<style scoped>
@import "../assets/views-styles/portfolio1.css";
</style>
