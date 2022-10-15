import { guardarReserva, obtenerNumeroReservas } from '../controllers/reserva.js'
import {obtenerEmail} from '../jwt.js';
export async function registro(req, res) {

    const {  hora, fecha,mascota } = req.body;

    let reserva = { hora: hora, fecha: fecha, cliente:obtenerEmail , mascota: mascota };

    //console.log(user['email'])
    //console.log(users[0].email)
    console.log("Llego un dui:", reserva)


    if ((reserva.hora != null) && (reserva.fecha != null) && (reserva.cliente != null) && (reserva.mascota != null)) {
        guardarReserva(reserva);
        return res.status(200).json({
            massage: "Reserva registrada"
        });
    } else {
        return res.status(401).json({
            massage: "Error al registrar la reserva"
        });
    }
}