import { UserCredential } from "firebase/auth";
import { auth } from "./firebase";

// Function to create a new user with email and password
export declare const doCreateUserWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>;

// Function to sign in a user with email and password
export declare const doSignInWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>;

// Function to sign out the current user
export declare const doSignOut: () => Promise<void>;
