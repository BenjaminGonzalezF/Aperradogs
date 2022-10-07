import { guardarCliente, mostrarClientes } from '../controllers/clientes.js'

var users = [
	{email: "usuario@gmail.com", password: "usuario", name: "Usuario 1", apellido: "Nul"},
]


export async function registro(req,res){

	const {email,password,nombre,apellido} = req.body;

	let cliente = {email: email, contrasena: password, nombre: nombre, apellido: apellido}
	
	//console.log(user['email'])
	//console.log(users[0].email)
	console.log("Llego un dui:", cliente)

	if(cliente.email == users[0].email){
		return res.status(401).json({
			massage: "Error email ya en uso"
		});
	}

    //validate if guardarCliente(cliente) is ok
    guardarCliente(cliente);
    return res.status(200).json({
		massage: "Ok"
	});




}