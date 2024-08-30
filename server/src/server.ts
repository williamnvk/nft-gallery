import app from './app'
import * as dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

app.listen(process.env.PORT, () => console.log('Servidor em operação.'))

process.on('beforeExit', code => {
  setTimeout(() => {
    console.log(`Process will exit with code: ${code}`)
    process.exit(code)
  }, 100)
})

process.on('exit', code => {
  console.log(`Process exited with code: ${code}`)
})
