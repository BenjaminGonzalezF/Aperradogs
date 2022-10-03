import express from 'express'
import {initRouters} from './router/main.js'
// import cors
import cors from 'cors'
const app = express()

import mongoose from "mongoose";
import dotnev from "dotenv";
dotnev.config();
const uri = `${process.env.BASE_DE_DATOS}`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const TestSchema = new mongoose.Schema({   text: String, });
const Test = mongoose.model("Test", TestSchema);

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
