import { reserva } from "../data_base/models/reserva.js";




let id=0
const guardarReserva = async (datosNuevaReserva) => {
    let id = await obtenerNumeroReservas();
    const nuevaReserva = new reserva({
        ID: id,
        Hora: datosNuevaReserva.hora,
        Fecha: datosNuevaReserva.fecha,
        Estado: 'Pendiente',
        Cliente: datosNuevaReserva.cliente,
        Mascota: datosNuevaReserva.mascota,
    })
    nuevaMascota.save();
    console.log("Reserva guardada: ", nuevaMascota);
};

//obtener numero de reservas en la base de datos
const obtenerNumeroReservas = async () => {
    let query = await reserva.find();
    let numeroReserva = query.length;
    return numeroReserva;
}


const mostrarReservas = () => {
    mascota.find({}, (err, reservas) => {
        if (err) {
            console.log('Error al mostrar las reservas');
        } else {
            console.log(reservas);
        }
    });
};
