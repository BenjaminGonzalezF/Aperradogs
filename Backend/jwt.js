import jwt from 'jsonwebtoken';
import store from 'store2'

const secret = "contraseña";

export function generateToken(email) {
	store('email', email); 

	return jwt.sign(email, secret, { expiresIn: '1h' });
	
}
export function verifyToken(token) {
	return jwt.verify(token, secret);
} 
export function obtenerEmail() {
	
	let cliente = [store('email')];
	
	return (cliente[0].email)
}


