"use client"
import { createContext, useContext, ReactNode } from "react";

export const AppContext = createContext(null);

export function AppProvider({ children, value }:{children:ReactNode, value:any}) {
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
