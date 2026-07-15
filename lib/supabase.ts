import { createClient } from "@supabase/supabase-js";

// These come from environment variables, set locally in .env.local,
// and in Vercel's Project Settings, Environment Variables for the live site.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
