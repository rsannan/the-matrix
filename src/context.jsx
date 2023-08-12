import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./components/database";

const Context = createContext();

export default function Provider({ children }) {
  const [user, setUser] = useState();
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    async function getUser() {
      supabase.auth.onAuthStateChange((event, session) => {
        setLoading(true);
        switch (event) {
          case "SIGNED_IN":
            setUser(session.user);
            setLoading(false);
            break;
          case "SIGNED_OUT":
            setUser(null);
          default:
            console.log("something went wrong");
        }
      });
    }
    getUser();
  }, []);
  return <Context.Provider value={user}>{children}</Context.Provider>;
}

export function useUser() {
  return useContext(Context);
}
