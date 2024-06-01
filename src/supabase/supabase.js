import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export const signUp = async (email, password) => {
  const { error } = await supabase.auth.signUp({ email, password });
  return { error };
};

export default supabase;
