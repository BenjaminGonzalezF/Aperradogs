import express from 'express'
import { initRouters } from './router/main.js'
import cors from 'cors'
import mongoose from "mongoose";
import dotnev from "dotenv";

const app = express()
dotnev.config();
const uri = `${process.env.BASE_DE_DATOS}`;
mongoose.connect(uri, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

/*const TestSchema = new mongoose.Schema({   text: String, });
const Test = mongoose.model("Test", TestSchema);
let usuario = new Test({ text: 'asdc' });
usuario.save();
*/

import { guardarCliente } from './controllers/clientes.js'
guardarCliente();


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
