<template>
    <div class="edit-profile">
      <nav>
        <div class="logo"><img src="@/assets/images/logo1.png" alt="Logo" /></div>
        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/dashboard">Dashboard</router-link>
        </div>
        <div>
            <div class="nav-btn">
          <button @click="logout" class="btn-logout">Logout</button>
        </div>

        </div>
    
        
      </nav>
  
      <div class="form-container">
        <div class="form-card">
          <header>
            <h2>Edit Your Profile</h2>
            <p>Update your details below</p>
          </header>
          <form @submit.prevent="handleProfileUpdate">
            <div class="form-group">
              <label for="profilePicture">Profile Picture:</label>
              <input type="file" id="profilePicture" @change="handleFileUpload" />
              <!-- <div v-if="previewImage" class="image-preview">
                <img :src="previewImage" alt="Profile Preview" />
              </div> -->
            </div>
  
            <div class="input-group">
              <input v-model="name" type="text" placeholder="Full Name" required />
                <input v-model="title" type="text" placeholder="Title" required />
              <textarea v-model="shortBio" placeholder="Short Bio"></textarea>
              <textarea v-model="projects" placeholder="Experience/Projects"></textarea>
              <textarea v-model="about" placeholder="About Yourself"></textarea>
              <input
                v-model="githubLink"
                type="url"
                placeholder="GitHub Link"
                required
              />
              <input
                v-model="facebookLink"
                type="url"
                placeholder="Facebook Link"
              />
              <input
                v-model="instagramLink"
                type="url"
                placeholder="Instagram Link"
              />
              <input
                v-model="twitterLink"
                type="url"
                placeholder="Twitter Link"
              />
            </div>
  
            <button class="save-btn" type="submit">Save Changes</button>
          </form>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
        </div>
      </div>
    </div>
  </template>
  

  <script setup lang="ts">
  import { ref, computed } from "vue";
  import { useUserStore } from "../store/user";
  import { useRouter } from "vue-router";
  
  const userStore = useUserStore();
  const router = useRouter();
  
  // Load user details from the store
  const userDetails = computed(() => userStore.userDetails);
  
  const name = ref(userDetails.value?.name || "");
    const title = ref(userDetails.value?.title || "");
  const shortBio = ref(userDetails.value?.shortBio || "");
  const projects = ref(userDetails.value?.projects || "");
  const about = ref(userDetails.value?.about || "");
  const githubLink = ref(userDetails.value?.githubLink || "");
  const facebookLink = ref(userDetails.value?.facebookLink || "");
  const instagramLink = ref(userDetails.value?.instagramLink || "");
  const twitterLink = ref(userDetails.value?.twitterLink || "");
  const profilePicture = ref<File | null>(null);
  const previewImage = ref<string | null>(typeof userDetails.value?.profilePicture === 'string' ? userDetails.value.profilePicture : null);
  
  const errorMessage = ref("");
  const successMessage = ref("");
  
  // Handle file upload and preview
  const handleFileUpload = (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      profilePicture.value = file;
      const reader = new FileReader();
      reader.onload = () => {
        previewImage.value = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Save profile updates
  const handleProfileUpdate = () => {
    if (!name.value || !githubLink.value) {
      errorMessage.value = "Please fill in all required fields.";
      successMessage.value = "";
      return;
    }
  
    // Update user details in the store
    userStore.updateUserDetails({
      name: name.value,
        title: title.value,
      shortBio: shortBio.value,
      projects: projects.value,
      about: about.value,
      githubLink: githubLink.value,
      facebookLink: facebookLink.value,
      instagramLink: instagramLink.value,
      twitterLink: twitterLink.value,
      profilePicture: profilePicture.value,
    });

     // Clear the form fields
  name.value = "";
  shortBio.value = "";
  projects.value = "";
  about.value = "";
  githubLink.value = "";
  facebookLink.value = "";
  instagramLink.value = "";
  twitterLink.value = "";
  profilePicture.value = null;
  previewImage.value = null;

  // Redirect to the dashboard
  router.push("/dashboard");

  
    successMessage.value = "Profile updated successfully!";
    errorMessage.value = "";
  };

  
  
  // Logout user
  const logout = () => {
    userStore.logout();
    router.push("/login");
  };
  </script>
  

<style scoped>
@import "../assets/views-styles/editprofile.css";

</style>