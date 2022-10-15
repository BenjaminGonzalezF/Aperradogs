import mongoose from "mongoose";

var Ficha_Clinica = new mongoose.Schema(
    {
        ID: {
            type: String,
            required: true,
        },
        Mascota: {
            type: String,
            required: true,
        },
        Historial_Clinico:{
            type: String,
            required: true,
        },
    },
    {
        collection : 'Ficha_Clinica',
        versionKey: false
    }
)

export const ficha_Clinica = new mongoose.model('Ficha_Clinica', Ficha);

