import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ifajifrjraxwqpsgdwwg.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmYWppZnJqcmF4d3Fwc2dkd3dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1MTE3MzcsImV4cCI6MjA0NDA4NzczN30._b4yGg3V_Yvb5QSzXY2Q7ec2H6c67lZRN8FEHmRIvnQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
