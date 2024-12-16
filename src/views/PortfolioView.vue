<template>
    <div class="portfolio-view">
      <component :is="selectedTemplateComponent"  :user-details="userDetails" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from "vue";
  import { useUserStore } from "../store/user";
  
  // Import templates
  import PortfolioTemplate1 from "../views/Portfolio1.vue";
  import PortfolioTemplate2 from "../views/Portfolio2.vue";
  import PortfolioTemplate3 from "../views/Portfolio3.vue";
  
  const userStore = useUserStore();

  // Available templates mapping
const templates: { [key: number]: any } = {
  1: PortfolioTemplate1,
  2: PortfolioTemplate2,
  3: PortfolioTemplate3,
};

// Dynamically get the selected template from the store
const selectedTemplateComponent = computed(() => {
  const selectedTemplate = userStore.userDetails?.selectedTemplate;
  return selectedTemplate !== undefined ? templates[selectedTemplate] : null; // Return the component or null if no template is selected
});

// Get user details from the store
const userDetails = computed(() => userStore.userDetails);


  
//   const userDetails = computed(() => userStore.userDetails);
  
//   const selectedTemplateComponent = computed(() => {
//     switch (userStore.userDetails?.selectedTemplate) {
//       case 1:
//         return PortfolioTemplate1;
//       case 2:
//         return PortfolioTemplate2;
//       case 3:
//         return PortfolioTemplate3;
//       default:
//         return null;
//     }
//   });
  </script>
  