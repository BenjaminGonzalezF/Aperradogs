import express from 'express'
import { initRouters } from './router/main.js'
import cors from 'cors'
import initDB from './data_base/initDB.js'
import mongoose from "mongoose";
import dotnev from "dotenv";

const app = express()

app.use(cors())
app.use(express.json())

initRouters(app)

const port = 3000

//middleware
app.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


initDB()

