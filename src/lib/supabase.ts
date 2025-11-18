import { createClient } from '@supabase/supabase-js';

// Supabase credentials
const supabaseUrl = 'https://pcihjcuzwkpryzwsgpip.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjaWhqY3V6d2twcnl6d3NncGlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNjA2NzEsImV4cCI6MjA3NzgzNjY3MX0.2WJ42EgebBhkrwVQgMj3m8hPfXVk-fZ9TGYyzMH4xmA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
