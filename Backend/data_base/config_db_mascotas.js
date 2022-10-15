import { guardarMascota, buscarMascotasDB } from '../controllers/mascotas.js'
import * as jwt from '../jwt.js';

export async function registro(req, res) {

    const { nombre, especie, } = req.body;

    let mascota = { nombre: nombre, especie: especie, dueño: (await jwt.obtenerEmail())}

    if (mascota.nombre == null || mascota.especie == null) {
        return res.status(401).json({
            massage: "Datos no ingresados"
        });
    } else {
        guardarMascota(mascota);
        return res.status(200).json({
            massage: "Mascota registrada"
        });

    }
}

export async function buscarMascotas(req, res) {

    try {
        let mascotas = await buscarMascotasDB(await jwt.obtenerEmail());
        return res.status(200).json({
            mascotas: mascotas
        });
    } catch (error) {
        console.log(error);
    }


}