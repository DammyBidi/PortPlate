<template>
  <div class="main">
    <nav class="Navbar">
      <img src="../assets/images/logo1.png" alt="" />
      <div class="Navbar-item">
        <a href="">Home</a>
        <a href="">About</a>
        <button id="first-btn">Hire Me</button>
      </div>
      <!-- <div class="menu">
        <img class="hamburger" src="menu.png" alt="" />
        <img class="close-menu hide" src="close.svg" alt="" />
      </div> -->
    </nav>

    <div class="mobile-nav">
      <div>
        <h3>Projects</h3>
        <img src="../assets/Portfolioimages2/Linee.jpg" alt="" />
      </div>

      <div>
        <h3>About Me</h3>
        <img src="../assets/Portfolioimages2/Linee.jpg" alt="" />
      </div>

      <div>
        <h3>Resume</h3>
        <img src="../assets/Portfolioimages2/Linee.jpg" alt="" />
      </div>
    </div>
    <section class="B-section">
      <section class="firstbody">
        <div class="left1">
          <p>Welcome!</p>

          <div class="name">{{ userDetails?.name || "Your Name" }}</div>

          <p id="About">
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
            <button id="second-btn">See My Projects</button>
          </a>
        </div>

        <div class="right1">
          <img src="../assets/Portfolioimages2/first.jpg" alt="" />
        </div>
      </section>

      <section class="secondbody">
        <div class="left2">
          <img src="../assets/Portfolioimages2/pix.jpg" alt="" />
        </div>

        <div class="right2">
          <h2>ABOUT ME</h2>

          <p>
            {{ userDetails?.about || "Write something about yourself here." }}
          </p>
        </div>
      </section>

      <section class="thirdbody">
        <div class="left3">
          <h2>Projects/Experience</h2>
          <p>
            {{
              userDetails?.projects || "Write something about yourself here."
            }}
          </p>
        </div>

        <div class="right3">
          <img src="../assets/Portfolioimages2/frame.jpg" alt="" />
        </div>
      </section>

      <footer>
        <div class="footer-Img">
          <img src="../assets/images/logo1.png" alt="" />
        </div>

        <div class="centerfoot">
          <div v-if="userDetails?.facebookLink" class="face">
            <a :href="userDetails.facebookLink" target="_blank" rel="noopener">
              <img src="../assets/Portfolioimages2/facebook.svg" alt="" />
            </a>
          </div>

          <div v-if="userDetails?.twitterLink" class="twitter">
            <a :href="userDetails.twitterLink" target="_blank" rel="noopener">
              <img src="../assets/Portfolioimages2/twitter.svg" alt="" />
            </a>
          </div>

          <div v-if="userDetails?.instagramLink" class="insta">
            <a :href="userDetails.instagramLink" target="_blank" rel="noopener">
              <img src="../assets/Portfolioimages2/iG.svg" alt="" />
            </a>
          </div>
        </div>

        <p>Copyright©2024 | PortPlate. All rights reserved.</p>
      </footer>
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
@import "../assets/views-styles/portfolio2.css";
</style>
