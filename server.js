import express from 'express'
import { twitRouter } from './src/twit/twit.controller.js'
// import { dotenv } from 'dotenv'

// dotenv.config()

// const PORT = 'http://localhost:4200/api/twits'


const app = express()

async function main() {
  app.use(express.json())

  app.use('/api/twits', twitRouter)

  app.all('*', (req, res) => {
    res.status(404).json({ massage: 'Error Massage' })
  })

  //   console.log(process.env.PORT)
  app.listen(4200, () => {
    console.log(`Example app listening on port 4200`)
  })
}
main()
