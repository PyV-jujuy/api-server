import env from '../env'
import type Database from './schema'
import { createClient } from '@supabase/supabase-js'

const URL = env.SUPABASE_URL ?? ''
const KEY = env.SUPABASE_KEY ?? ''

export default createClient<Database>(URL, KEY, {
  auth: { persistSession: false },
})
