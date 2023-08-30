const app = require('express')()
const consign = require('consign')

const PORT: number = 3001

consign()
    .then('./config/middlewares.ts')
    .into(app)


app.listen(PORT, () => {
    console.log('Running backend...')
})