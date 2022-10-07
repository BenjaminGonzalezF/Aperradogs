import { guardarCliente, verificarCorreo } from '../controllers/clientes.js'

export async function registro(req, res) {

    const { email, password, nombre, apellido } = req.body;

    let cliente = { email: email, contrasena: password, nombre: nombre, apellido: apellido }

    //console.log(user['email'])
    //console.log(users[0].email)
    console.log("Llego un dui:", cliente)


    if ((await verificarCorreo(cliente))) {
        guardarCliente(cliente);
        return res.status(200).json({
            massage: "Usuario registrado"
        });
    } else {
        return res.status(401).json({
            massage: "Error email ya en uso"
        });
    }
}
