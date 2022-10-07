import mongoose from "mongoose";
import dotnev from "dotenv";

dotnev.config();

const DB_URI = `${process.env.BASE_DE_DATOS}`;

export const initDB  = () => {

    const connect = () => {

        mongoose.connect(
            DB_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if (err) {
                    console.log('DB: ERROR !!');
                } else {
                    console.log('Conexion correcta!!')
                }
            }
        )

    }

    connect();

}