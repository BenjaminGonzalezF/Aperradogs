import { mascota } from "../data_base/models/mascotas.js";

const guardarMascota = (datosNuevaMascota) => {
    const nuevaMascota = new mascota({
        Nombre: datosNuevaMascota.nombre,
        ID: obtenerNumeroMascotas(),
        Especie: datosNuevaMascota.especie,
    })
    nuevaMascota.save();
    console.log("Mascota guardada");
};

//obtener numero de mascotas en la base de datos
const obtenerNumeroMascotas = async () => {
    let numeroMascotas = await mascota.countDocuments();
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