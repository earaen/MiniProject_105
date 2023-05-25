import React, { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

// Create a provider component to wrap the components that need access to the user data
export const UserProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
