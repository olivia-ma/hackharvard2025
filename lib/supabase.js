import { createClient } from '@supabase/supabase-js'

// Single supabase client for the entire app
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,      // Keeps the user logged in after refresh
    autoRefreshToken: true,    // Automatically refreshes expired tokens
    detectSessionInUrl: true,  // Handles OAuth redirects
  },
})
