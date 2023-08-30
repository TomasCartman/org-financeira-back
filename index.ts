const consign = require('consign')
import 'dotenv/config'
import express, { Request, Response, Application} from 'express'

const app: Application = express()
const PORT = process.env.PORT || 3001

consign()
    .then('./config/middlewares.ts')
    .then('./api')
    .then('./config/routes.ts')
    .into(app)

app.listen(PORT, () => {
    console.log(`Running backend on port ${PORT}`)
})

import database from './sql/database'
database()