import express from 'express'
import { initRouters } from './router/main.js'
import cors from 'cors'
import initDB from './data_base/initDB.js'
import mongoose from "mongoose";
import dotnev from "dotenv";

const app = express()


/*const TestSchema = new mongoose.Schema({   text: String, });
const Test = mongoose.model("Test", TestSchema);
let usuario = new Test({ text: 'asdc' });
usuario.save();
*/

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


//import { guardarCliente, mostrarClientes } from './controllers/clientes.js'
//import { guardarMascota, mostrarMascota } from './controllers/mascotas.js'
initDB()
//guardarCliente();
//mostrarClientes();
//guardarMascota();
//mostrarMascota();

