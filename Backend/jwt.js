import jwt from 'jsonwebtoken';
const secret = "contraseña";

export function generateToken(username) {
	return jwt.sign(username, secret, { expiresIn: '1h' });
}
export function verifyToken(token) {
	return jwt.verify(token, secret);
} 