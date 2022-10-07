import { cliente } from "../models/cliente.js";

const user = new cliente({
    Nombre: 'Test',
    Apellido: 'Test',
    Email: 'Test',
    Contrasena: 'Test',
});

const guardarCliente = () => {
    user.save();
    console.log("Cliente guardado");
};

const mostrarClientes = () => {
    cliente.find({}, (err, Clientes) => {
        if (err) {
            console.log('Error al mostrar los clientes');
        } else {
            console.log(Clientes);
        }
    });
};

export { guardarCliente, mostrarClientes };