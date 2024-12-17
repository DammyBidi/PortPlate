<template>
  <body>
    <section id="home">
      <!-- NAV SECTION -->

      <div class="nav-bar">
        <div class="logo1">
          <img src="../assets/images/logo1.png" alt="logo" />
        </div>

        <div class="nav">
          <a class="home" href="#home"><h3>HOME</h3></a>
          <h3>ABOUT</h3>
          <a href="mailto:Bidigideondamilola@gmail.com"
            ><button class="Hire-me1">Hire Me</button></a
          >
        </div>

        <div class="hamburger">
          <img
            src="../assets/Portfolioimages3/Hamburger logo.png"
            alt="Hamburger-logo"
          />
        </div>
      </div>

      <!-- FIRST CONTAINER -->
      <div class="first-container">
        <div class="detail-1">
          <p class="im">I'm</p>
          <h1 class="name">{{ userDetails?.name || "Your Name" }}</h1>
          <p class="about-1">
            {{
              userDetails?.shortBio || "Write something about yourself here."
            }}
          </p>
          <a
            v-if="userDetails"
            :href="userDetails.githubLink"
            target="_blank"
            rel="noopener"
          >
            <button class="project">See My Projects</button>
          </a>
        </div>

        <div class="image-1">
          <img
            class="Dp"
            src="../assets/Portfolioimages3/hero.svg"
            alt="heroimg"
          />
        </div>
      </div>
    </section>

    <!-- SECOND CONTAINER -->
    <div class="second-container">
      <div class="image-2">
        <img
          class="Dp2"
          src="../assets/Portfolioimages3/about.svg"
          alt="dammy dp2"
        />
      </div>

      <div class="detail-2">
        <h1 class="about">ABOUT ME</h1>
        <p class="about-2">
          {{ userDetails?.shortBio || "Write something about yourself here." }}
        </p>

        <div class="resume-btn">
          <a href="mailto:Bidigideondamilola@gmail.com"
            ><button class="Hire-me2">Hire Me</button></a
          >
          <a
            v-if="userDetails"
            :href="userDetails.githubLink"
            target="_blank"
            rel="noopener"
          >
            <button class="Resume">See My Projects</button>
          </a>
        </div>
      </div>
    </div>

    <div class="third-container">
      <div class="image-3">
        <img src="../assets/Portfolioimages3/Frame 1.png" alt="" />
      </div>
      <div class="detail-3">
        <h2>Projects/Experience</h2>
        <p class="about-3">
          {{ userDetails?.projects || "Write something about yourself here." }}
        </p>
        <!-- <div class="name-2">
          <h5>Joy Nneji</h5>
          <p class="senior">-Senior Design Lead at Google</p>
        </div> -->
      </div>
    </div>

    <!-- FOOTER SECTION -->
    <div class="footer-container">
      <div class="logo2">
        <img src="../assets/images/logo2.png" alt="logo" />
      </div>

      <div class="social-logo">
        <div v-if="userDetails?.facebookLink" class="face">
          <a :href="userDetails.facebookLink" target="_blank" rel="noopener">
            <img
              src="../assets/Portfolioimages3/ic_baseline-facebook.png"
              alt=""
            />
          </a>
        </div>
        <div v-if="userDetails?.twitterLink" class="twitter">
          <a :href="userDetails.twitterLink" target="_blank" rel="noopener">
            <img src="../assets/Portfolioimages3/mdi_twitter.png" alt="" />
          </a>
        </div>
        <div v-if="userDetails?.instagramLink" class="insta">
          <a :href="userDetails.instagramLink" target="_blank" rel="noopener">
            <img src="../assets/Portfolioimages3/mdi_instagram.png" alt="" />
          </a>
        </div>
      </div>

      <div class="">
        <p class="copyright">
          Copyright©2024 | PortPlate. All rights reserved.
        </p>
      </div>
    </div>

    <div class="arrow">
      <a href="#home"
        ><img src="../assets/Portfolioimages3/arrow-up.svg" alt="arrow image"
      /></a>
    </div>
  </body>
</template>

<script setup lang="ts">
import { useUserStore } from "../store/user";
import { computed } from "vue";

// Access user data from the store
const userStore = useUserStore();
const userDetails = computed(() => userStore.userDetails);

// Helper function to resolve profile picture URL
const resolveProfilePicture = (
  profilePicture: string | Blob | undefined
): string => {
  if (!profilePicture) return "";
  return profilePicture instanceof Blob
    ? URL.createObjectURL(profilePicture)
    : profilePicture;
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
@import "../assets/views-styles/portfolio3.css";
</style>
