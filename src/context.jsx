import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./components/database";

const Context = createContext();

export default function Provider({ children }) {
  useEffect(() => {
    async function getUser() {
      supabase.auth.onAuthStateChange((event, session) => {
        switch (event) {
          case "SIGNED_OUT":
            localStorage.removeItem("session");
            localStorage.removeItem("loggedIn");
          default:
            console.log("context");
        }
      });
    }
    getUser();
  }, []);
  return <Context.Provider value={"none"}>{children}</Context.Provider>;
}
