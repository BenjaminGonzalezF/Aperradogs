import * as userController from '../controllers/users.js';
import * as testController from '../controllers/test.js';
import * as authController from '../controllers/auth.js';

export default function initUsers(app){
    app.get("/usuario", userController.getUser);
    app.post("/usuario", userController.postUser);
    app.delete("/usuario", userController.deleteUser);

    app.post("/login", authController.login);
    app.post("/registro", authController.registro);

    app.get("/", testController.test);
}