import { mascota } from "../models/mascotas.js";

const pet = new mascota({
    Nombre: 'Test',
    ID: 'Test',
});

const guardarMascota = () => {
    pet.save();
    console.log("Mascota guardada");
};

const mostrarMascota = () => {
    mascota.find({}, (err, Mascotas) => {
        if (err) {
            console.log('Error al mostrar los clientes');
        } else {
            console.log(Mascotas);
        }
    });
};

export { guardarMascota, mostrarMascota };