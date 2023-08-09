import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersService from './app/modules/users/users.service'
const app: Application = express()

//cors
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Testing
app.get('/', async (req: Request, res: Response) => {
  await usersService.createUser({
    id: '999',
    password: '12345',
    role: 'student',
  })
  res.send('Work successfully')
})

export default app
