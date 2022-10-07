import mongoose from "mongoose";

var Mascotas = new mongoose.Schema(
    {
        Nombre: {
            type: String,
            required: true,
        },
        ID:{
            type: String,
            required: true,
        }
    },
    {   
        collection : 'Mascotas',
        versionKey: false
    }
)

export const mascota = new mongoose.model('Mascotas', Mascotas);

