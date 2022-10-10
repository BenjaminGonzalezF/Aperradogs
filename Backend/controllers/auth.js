import * as jwtController from "./../jwt.js";

var users = [
	{email: "usuario@gmail.com", password: "usuario", name: "Usuario 1", apellido: "Nul"},
]

export async function login(req,res){
		const {email,password} = req.body;

		// create example users
		

		// find user
		const user = users.find(user => user.email === email);

		// check if user exists
		if(!user){
			return res.status(401).json({message: "User not found"});
		}

		// check if password is correct
		if(user.password !== password){
			return res.status(401).json({message: "Password is incorrect"});
		}

		// create token
		const token = jwtController.generateToken(user);

		// return token
		return res.status(200).json({token, user});
}
export async function registro(req,res){

	const {email,password,nombre,apellido} = req.body;

	var user = {email: email, password: password, name: nombre, apellido: apellido}
	
	//console.log(user['email'])
	//console.log(users[0].email)
	console.log("Llego un usuario:" + user)

	if(user.email == users[0].email){
		return res.status(401).json({
			massage: "Error email ya en uso"
		});
	}
	
	return res.status(200).json({
		massage: "Ok"
	});

}