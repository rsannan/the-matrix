import { createClient } from "@supabase/supabase-js";
const options = {
  auth: {
    storageKey: "session",
  },
};
const url = import.meta.env.VITE_URL;
const key = import.meta.env.VITE_PUBLIC_KEY;
export const supabase = createClient(url, key, options);

export async function DBLogin(user) {
  const { email, password } = user;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    alert("Login Error: " + error.message);
  } else {
    localStorage.setItem("loggedIn", true);
  }
}

export async function DBSignUp(user) {
  const { username, password, email } = user;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    alert("SignUp Error: " + error.message);
  } else {
    const { error } = await supabase
      .from("profile")
      .insert({ user_id: data.user.id, username });
    if (error) {
      alert("Profile Update Error: " + error.message);
    }
  }
}

export async function DBGetPosts(Loadingfx, Postfx) {
  Loadingfx(true);
  const { data, error } = await supabase.from("posts").select();
  if (error) {
    alert(error);
  } else {
    Postfx(data.reverse());
    Loadingfx(false);
  }
}

export async function DBGetUser() {
  const { data, error } = await supabase.auth.getSession();
  return data.session.user;
}

export async function DBGetProfilePicture(userId) {
  const img = supabase.storage.from("profile-pictures").getPublicUrl(userId);
}

export async function DBPostProfilePicture(userId, file) {
  const { data, error } = await supabase.storage
    .from("profile-pictures")
    .upload(userId, file);
}

export async function DBGetPostUser(userId) {
  const { data, error } = await supabase
    .from("profile")
    .select("username")
    .eq("user_id", userId);
  if (error) {
    alert(error.message);
  } else {
    return data[0].username;
  }
}