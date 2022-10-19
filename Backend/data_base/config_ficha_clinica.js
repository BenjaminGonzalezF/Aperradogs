import {guardarFicha } from '../controllers/ficha_clinica'
export async function registro(req, res) {

    const { mascota,historial_Clinico} = req.body;

    let ficha_Clinica = { mascota: mascota, historial_Clinico: historial_Clinico};


    console.log("Llego una dui:", ficha_Clinica)


    if (ficha_Clinica.mascota == null || ficha_Clinica.historial_Clinico == null) {
        guardarFicha(ficha_Clinica);
        return res.status(200).json({
            massage: "Ficha clinica registrada"
        });
    } else {
        return res.status(401).json({
            massage: "Error al registrar la ficha clinica"
        });
    }
}