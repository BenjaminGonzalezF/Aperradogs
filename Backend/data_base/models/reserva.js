import mongoose from "mongoose";

var Reserva = new mongoose.Schema(
    {
        ID: {
            type: String,
            required: true,
        },
        Hora:{
            type: String,
            required: true,
        },
        Fecha:{
            type: String,
            required: true,
        },
        Estado:{
            type: String,
            required: true,
        },
        Cliente:{
            type: String,
            required: true,
        },
        Mascota:{
            type: String,
            required: true,
        }
    },
    {   
        collection : 'Reserva',
        versionKey: false
    }
)

export const reserva = new mongoose.model('Reserva', Reserva);
