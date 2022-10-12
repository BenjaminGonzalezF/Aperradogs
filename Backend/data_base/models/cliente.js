import mongoose from "mongoose";

var Clientes = new mongoose.Schema(
    {
        Nombre: {
            type: String,
            required: true,
        },
        Apellido: {
            type: String,
            required: true,
        },
        Email:{
            type: String,
            required: true,
        },
        Contrasena:{
            type: String,
            required: true,

        }
    },
    {
        collection : 'Clientes',
        versionKey: false
    }
)

export const cliente = new mongoose.model('Clientes', Clientes);

