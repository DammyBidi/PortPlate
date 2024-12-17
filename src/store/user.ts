import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [
      { email: "test@example.com", password: "password123", name: "Test User" },
    ] as { email: string; password: string; name: string }[], // Array to store registered users

    userDetails: JSON.parse(localStorage.getItem("userDetails") || "null") as {
      name: string;
      title?: string;
      email: string;
      shortBio?: string;
      projects?: string;
      about?: string;
      githubLink?: string;
      facebookLink?: string;
      instagramLink?: string;
      twitterLink?: string;
      profilePicture?: File | string | null;
      selectedTemplate?: number;
    } | null, // Allow null or an object with name and email

    loggedIn: JSON.parse(localStorage.getItem("loggedIn") || "false"), // Persist login state
  }),

  actions: {
    // Authenticate user credentials during login
    authenticate(credentials: { email: string; password: string }) {
      const user = this.users.find(
        (u) =>
          u.email === credentials.email && u.password === credentials.password
      );
      if (user) {
        this.userDetails = { ...user, ...this.userDetails }; // Merge user details
        this.loggedIn = true; // Set login state
        localStorage.setItem("userDetails", JSON.stringify(this.userDetails)); // Save to
        localStorage.setItem("loggedIn", JSON.stringify(this.loggedIn));
        return user;
      }
      return null; // Return null if authentication fails
    },

    // Save new user details during sign-up
    saveUserDetails(details: {
      name: string;
      email: string;
      password: string;
    }) {
      const { name, email, password } = details;

      // Check if the email is already registered
      const existingUser = this.users.find((u) => u.email === email);
      if (existingUser) {
        throw new Error("Email already registered");
      }

      // Add the new user to the users array
      this.users.push({ name, email, password });

      // Set the newly registered user as the current user
      this.userDetails = { name, email };
      this.loggedIn = true; // Set login state
      localStorage.setItem("userDetails", JSON.stringify(this.userDetails)); // Save to localStorage
      localStorage.setItem("loggedIn", JSON.stringify(this.loggedIn));
    },

    // Save or update additional user details
    updateUserDetails(details: {
      name?: string;
      title?: string;
      shortBio?: string;
      projects?: string;
      about?: string;
      githubLink?: string;
      facebookLink?: string;
      instagramLink?: string;
      twitterLink?: string;
      profilePicture?: File | null | string;
      selectedTemplate?: number;
    }) {
      if (!this.userDetails) return;
      const saveDetails = async () => {
        let updatedDetails = { ...this.userDetails, ...details } as {
          name: string;
          email: string;
          title?: string;
          shortBio?: string;
          projects?: string;
          about?: string;
          githubLink?: string;
          facebookLink?: string;
          instagramLink?: string;
          twitterLink?: string;
          profilePicture?: File | string | null;
          selectedTemplate?: number;
        };

        // Handle profilePicture conversion to Base64
        if (details.profilePicture instanceof File) {
          const base64Image = await this.convertFileToBase64(
            details.profilePicture
          );
          updatedDetails.profilePicture = base64Image;
        }

        // Merge and persist the updated details
        this.userDetails = updatedDetails;
        localStorage.setItem("userDetails", JSON.stringify(this.userDetails));
      };

      saveDetails();
    },

    // Convert file to Base64
    convertFileToBase64(file: File): Promise<string> {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        // reader.onerror = (error) => reject(error);
      });
    },

    // Log out the user
    logout() {
      this.loggedIn = false; // Update login state
      localStorage.setItem("loggedIn", JSON.stringify(this.loggedIn));
    },

    loadUserDetails() {
      const storedUser = localStorage.getItem("userDetails");
      const loggedInState = localStorage.getItem("loggedIn");
      if (storedUser) {
        this.userDetails = JSON.parse(storedUser);
      }
      if (loggedInState) this.loggedIn = JSON.parse(loggedInState);
    },
  },
});
