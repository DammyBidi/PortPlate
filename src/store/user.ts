import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [
      { email: 'test@example.com', password: 'password123', name: 'Test User' },
    ] as { email: string; password: string; name: string }[], // Array to store registered users
    userDetails: null as { name: string; email: string } | null, // Allow null or an object with name and email
  }),
  actions: {
    // Authenticate user credentials during login
    authenticate(credentials: { email: string; password: string }) {
      const user = this.users.find(
        (u) => u.email === credentials.email && u.password === credentials.password
      );
      if (user) {
        this.userDetails = user; // Set the logged-in user details
        return user;
      }
      return null; // Return null if authentication fails
    },

    // Save new user details during sign-up
    saveUserDetails(details: { name: string; email: string; password: string }) {
      const { name, email, password } = details;

      // Check if the email is already registered
      const existingUser = this.users.find((u) => u.email === email);
      if (existingUser) {
        throw new Error('Email already registered');
      }

      // Add the new user to the users array
      this.users.push({ name, email, password });

      // Set the newly registered user as the current user
      this.userDetails = { name, email };
    },

    // Log out the user
    logout() {
      this.userDetails = null;
    },
  },
});
