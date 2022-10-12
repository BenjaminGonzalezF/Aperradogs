import { mascota } from "../data_base/models/mascotas.js";

let id=0
const guardarMascota = async (datosNuevaMascota) => {
    let id = await obtenerNumeroMascotas();
    const nuevaMascota = new mascota({
        Nombre: datosNuevaMascota.nombre,
        ID: id,
        Especie: datosNuevaMascota.especie,
    })
    nuevaMascota.save();
    console.log("Mascota guardada: ", nuevaMascota);
};

//obtener numero de mascotas en la base de datos
const obtenerNumeroMascotas = async () => {

    let query = await mascota.find();
    let numeroMascotas = query.length;
    return numeroMascotas;
}


const mostrarMascotas = () => {
    mascota.find({}, (err, Clientes) => {
        if (err) {
            console.log('Error al mostrar los clientes');
        } else {
            console.log(Clientes);
        }
    });
};

export { guardarMascota, mostrarMascotas };