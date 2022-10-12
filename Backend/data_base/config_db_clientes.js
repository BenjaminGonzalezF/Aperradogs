import { guardarCliente, verificarCorreo, buscarCliente } from '../controllers/clientes.js'
import * as jwtController from "../jwt.js";

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
export async function ingreso(req, res) {
        const {email,password} = req.body;
        let user = {email: email}
        if(email == null || password == null){
            return res.status(401).json({
                massage: "Datos no ingresados"
            });
        }

		buscarCliente({email:email,contrasena:password}).then((result)=>{
            if(result){
                const token = jwtController.generateToken(user);
                res.status(200).json({token, user});
            }else{
                return res.status(401).json({
                    massage: "Datos incorrectos"
                });
            }
        })


}


