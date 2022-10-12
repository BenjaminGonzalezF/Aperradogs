import * as userController from '../controllers/users.js';
import * as testController from '../controllers/test.js';
import *  as controladorClientes from '../data_base/config_db_clientes.js';
import * as controladorMascotas from '../data_base/config_db_mascotas.js';

export default function initUsers(app){
    app.get("/usuario", userController.getUser);
    app.post("/usuario", userController.postUser);
    app.delete("/usuario", userController.deleteUser);

    app.post("/login", controladorClientes.ingreso);
    app.post("/registro", controladorClientes.registro);
    app.post("/registroMascota", controladorMascotas.registro);


    app.get("/", testController.test);
}