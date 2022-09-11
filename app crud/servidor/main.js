import express from 'express'
import {initRouters} from './router/main.js'
const app = express()

app.use(express.json())
initRouters(app)

const port = 3000

app.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




