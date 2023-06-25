import app from './app'
import env from './modules/shared/env'

const PORT = env.PORT

function onListening(): void {
  console.log('init server on port:', PORT)
}

app.listen(PORT, onListening)
