import React, { ReactNode } from "react";
import { User } from "firebase/auth"; // Firebase User type
import { auth } from "./firebase";

// Define the shape of the AuthContext's value
interface AuthContextType {
    currentUser: User | null;  // Firebase User or null when logged out
    userLoggedIn: boolean;     // Boolean to track if a user is logged in
    loading: boolean;          // Boolean to track loading state
}

// Declare the AuthContext as a React context with the defined type
declare const AuthContext: React.Context<AuthContextType>;

// Declare the useAuth hook which returns the AuthContextType
declare function useAuth(): AuthContextType;

// Define the props for the AuthProvider component
interface AuthProviderProps {
    children: ReactNode;  // Children components that the AuthProvider wraps
}

// Declare the AuthProvider component
declare function AuthProvider({ children }: AuthProviderProps): JSX.Element;

export { AuthContext, useAuth, AuthProvider };
