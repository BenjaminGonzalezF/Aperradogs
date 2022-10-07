import { cliente } from "../models/cliente.js";

const cliente1 = new cliente({
    Nombre: 'Test',
    Apellido: 'Test',
    Email: 'Test',
    Contrasena: 'Test',
});

const guardarCliente = () => {
    cliente1.save();
    console.log(cliente1);
};

export { guardarCliente };