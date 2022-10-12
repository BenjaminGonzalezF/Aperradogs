import { guardarMascota} from '../controllers/mascotas.js'


export async function registro(req, res) {

    const { nombre, especie, } = req.body;

    let mascota = { nombre: nombre, especie: especie }

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