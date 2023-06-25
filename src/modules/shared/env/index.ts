import dotenv from 'dotenv'

dotenv.config({ path: 'enviroment/.env.globals' })
dotenv.config({ path: 'enviroment/.env.supabase' })

export default process.env
