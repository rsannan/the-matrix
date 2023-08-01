import { createClient } from "@supabase/supabase-js";
import "dotenv/config";
const options = {
  auth: {
    persistSession: false,
  },
};
const supabase = createClient(process.env.URL, process.env.PUBLIC_KEY, options);

const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    return error;
  } else {
    return "success";
  }
};

const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return error;
  } else {
    return data;
  }
};

const addPost = async (data) => {
  const { error } = await supabase.from("posts").insert(data);
  if (error) {
    return error;
  }
};
