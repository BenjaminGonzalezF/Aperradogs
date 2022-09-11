import * as userController from '../controllers/users.js';

export default function initUsers(app){
    app.get("/usuario", userController.getUser);
    app.post("/usuario", userController.postUser);
    app.delete("/usuario", userController.deleteUser);
}