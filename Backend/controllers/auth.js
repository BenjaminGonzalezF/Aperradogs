import * as jwtController from "./../jwt.js";

export async function login(req,res){
		const {email,password} = req.body;

		// create example users
		let users = [
			{email: "usuario@gmail.com", password: "usuario", name: "Usuario 1"},
		]

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