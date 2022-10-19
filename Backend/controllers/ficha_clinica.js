import { ficha_Clinica } from "../data_base/models/ficha_clinica.js";

let id=0
const guardarFicha = async (datosNuevaFicha) => {
    let id = await obtenerNumerosFicha();
    const nueva_ficha_Clinica = new ficha_Clinica({
        ID: id,
        Mascota: datosNuevaFicha.mascota,
        Historial_Clinico: datosNuevaFicha.historial_Clinico,
    })
    nueva_ficha_Clinica.save();
    console.log("Ficha clinica guardada: ", nuevaMascota);
};

//obtener numero de fichas en la base de datos
const obtenerNumerosFicha = async () => {
    let query = await ficha_Clinica.find();
    let numeroFichas = query.length;
    return numeroFichas;
}


const mostrarFichas = () => {
    ficha_Clinica.find({}, (err, fichas_Clinicas) => {
        if (err) {
            console.log('Error al mostrar las reservas');
        } else {
            console.log(fichas_Clinicas);
        }
    });
};
