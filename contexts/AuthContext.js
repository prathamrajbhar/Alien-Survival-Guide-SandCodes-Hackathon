import React, { createContext, useState } from 'react';
import { auth } from '../services/AuthService';  // Assuming AuthService provides auth functionality

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            setUser(userCredential.user);
        } catch (error) {
            console.error('Error signing in:', error.message);
        }
    };

    const logout = async () => {
        try {
            await auth.signOut();
            setUser(null);
        } catch (error) {
            console.error('Error signing out:', error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
