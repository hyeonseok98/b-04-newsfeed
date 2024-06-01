import supabase from "./supabaseClient";

export const signUp = async (email, password) => {
  const { error } = await supabase.auth.signUp({ email, password });
  return { error };
};

export const signInWithEmail = async (email, password) => {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  return { error };
};
export const signInWithOAuth = async (provider) => {
  const { error } = await supabase.auth.signInWithOAuth({ provider });
  return { error };
};

export const signOut = async () => supabase.auth.signOut();
