import * as testController from '../controllers/test.js';
import *  as controladorClientes from '../data_base/config_db_clientes.js';
import * as controladorMascotas from '../data_base/config_db_mascotas.js';

export default function initUsers(app){
    app.post("/login", controladorClientes.ingreso);
    app.post("/registro", controladorClientes.registro);
    app.post("/registroMascota", controladorMascotas.registro);
    app.get("/buscarMascotas/", controladorMascotas.buscarMascotas);
    app.get("/", testController.test);
}