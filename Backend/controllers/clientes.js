import { cliente } from "../models/cliente.js";


/*const user = new cliente({
    Nombre: 'Test',
    Apellido: 'Test',
    Email: 'Test',
    Contrasena: 'Test',
});
*/

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
// compare the email with the of other emails users  in the database;



async function  verificarCorreo(nuevoCliente){
    let correo = nuevoCliente.email;

    let client = await cliente.findOne({Email: correo});
    if(client){
        console.log("Correo ya en uso");
        return false;
    }
    return true;
    }



export { guardarCliente, mostrarClientes,verificarCorreo };