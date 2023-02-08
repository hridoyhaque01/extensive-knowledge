import React, { useContext, useEffect } from "react";

const ScrollContext = React.createContext();

export function useScrollAuth() {
  return useContext(ScrollContext);
}

const handleClick = () => {
  window.scrollTo(0, 0);
};

const value = {
  handleClick,
};

export function AppProvider({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
}
