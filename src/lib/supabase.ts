import { createBrowserClient } from "@supabase/auth-helpers-nextjs";
import { supabaseAnonKey, supabaseUrl } from "@/lib/env";

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);
