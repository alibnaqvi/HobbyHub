import { createClient } from '@supabase/supabase-js'

const URL = 'https://vppyatnpciryldovuhek.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwcHlhdG5wY2lyeWxkb3Z1aGVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5ODcwNDMsImV4cCI6MjA0NzU2MzA0M30.q4M56kiRHA3kQMVI6dtt5mGwgH3cLGlRu9VIYQY0bxY';

export const supabase = createClient(URL, API_KEY);
