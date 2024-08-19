import { Router } from 'express'
import { TwitService } from './twit.service.js'

const router = Router()

const twitsServer = new TwitService()

router.post('/', (req, res) => {
  //   if (!req.body.text.length) {
  // return res.status(400).json({ massage: 'not text' })
  //   }
//   console.log('not work')
  console.log('req: ', req.body)
//   console.log('res: ', res)
  const twit = twitsServer.createTwit(req.body)
  res.status(200).json(twit)
})

export const twitRouter = router
