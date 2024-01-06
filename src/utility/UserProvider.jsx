import React, { createContext, useState, useContext } from "react";

// Create a context for user data
const UserContext = createContext();

// Custom hook to use the user context
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};

// UserProvider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Function to update the user data
    const updateUser = (userData) => {
        setUser(userData);
    };

    // Context value containing user state and update function
    const contextValue = {
        user,
        updateUser,
    };

    return (
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    );
};
