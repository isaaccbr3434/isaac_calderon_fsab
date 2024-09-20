// firebase/util/FirebaseInit/auth.js
import { auth } from "../util/FirebaseInit"; // Adjust path based on your structure
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Function to register a new user
export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential; // You can return user data if needed
    } catch (error) {
        console.error("Error registering user:", error);
        throw error; // Rethrow the error to handle it later
    }
};

// Function to sign in an existing user
export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential; // You can return user data if needed
    } catch (error) {
        console.error("Error signing in:", error);
        throw error; // Rethrow the error to handle it later
    }
};
