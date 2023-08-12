import { createClient } from "@supabase/supabase-js";
const options = {
  auth: {
    persistSession: false,
  },
};
const url = import.meta.env.VITE_URL;
const key = import.meta.env.VITE_PUBLIC_KEY;
export const supabase = createClient(url, key, options);
