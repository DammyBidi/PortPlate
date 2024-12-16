import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import RegistrationPage from '../views/RegistrationPage.vue';
import Dashboard from '../views/Dashboard.vue';
import EditProfile from '../views/EditProfile.vue';
import Portfolio1 from '../views/Portfolio1.vue';
import Portfolio2 from '../views/Portfolio2.vue';
import Portfolio3 from '../views/Portfolio3.vue';
import PortfolioView from '../views/PortfolioView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/registration', 
      name: 'registration',
      component: RegistrationPage,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/edit-profile',
      name: 'edit-profile',
      component: EditProfile,
    },
    {
      path: '/portfolio1',
      name: 'portfolio1',
      component: Portfolio1,
    },
    {
      path: '/portfolio2',
      name: 'portfolio2',
      component: Portfolio2,
    },
    {
      path: '/portfolio3',
      name: 'portfolio3',
      component: Portfolio3,
    },
    {
      path: '/portfolio-view',
      name: 'portfolio-view',
      component: PortfolioView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
