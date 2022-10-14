import { cliente } from "../data_base/models/cliente.js";
import * as jwtController from "./../jwt.js";

const guardarCliente = (nuevoCliente) => {
    const client = new cliente({
        Nombre: nuevoCliente.nombre,
        Apellido: nuevoCliente.apellido,
        Email: nuevoCliente.email,
        Contrasena: nuevoCliente.contrasena,

    })
    client.save();
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


async function verificarCorreo(nuevoCliente) {
    let correo = nuevoCliente.email;

    let client = await cliente.findOne({ Email: correo });
    if (client) {
        console.log("Correo ya en uso");
        return false;
    }
    return true;
}

async function buscarCliente(nuevoCliente) {
    let correo = nuevoCliente.email;
    let contrasena = nuevoCliente.contrasena;

    let client = await cliente.findOne({ Email: correo, Contrasena: contrasena });
    if (client) {
        console.log("Cliente encontrado");
        return true;
    }
    return false;
}



export { guardarCliente, mostrarClientes, verificarCorreo, buscarCliente };