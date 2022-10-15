import { mascota } from "../data_base/models/mascotas.js";

let id=0
const guardarMascota = async (datosNuevaMascota) => {
    let id = await obtenerNumeroMascotas();
    const nuevaMascota = new mascota({
        Nombre: datosNuevaMascota.nombre,
        ID: id,
        Especie: datosNuevaMascota.especie,
        Dueño: datosNuevaMascota.dueño,
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
    mascota.find({}, (err, mascotas) => {
        if (err) {
            console.log('Error al mostrar los clientes');
        } else {
            console.log(mascotas);
        }
    });
};

const buscarMascotasDB = async (email) => {
    let mascotas = await mascota.find({ Dueño: email });
    return mascotas;
}

export { guardarMascota, mostrarMascotas ,buscarMascotasDB};