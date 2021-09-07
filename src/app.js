const express = require("express");
const dotenv = require("dotenv");


const { connect } = require("../database/index.js");
const { tvRouter } = require("../src/routers/tv.js");
const { marcaRouter } = require("../src/routers/marcas.js");
const { preciosRouter } = require("../src/routers/precios.js");


async function main() {
    
    dotenv.config();
    const app = express();
    app.use(express.json());

    const PORT = process.env.PORT;
    const DB_PORT = process.env.DB_PORT;
    const DB_USERNAME = process.env.DB_USERNAME;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const DB_HOST = process.env.DB_HOST;
    const DB_DATABASE = process.env.DB_DATABASE;

    try {
        await connect(DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
        app.use("/", tvRouter);
        app.use("/", marcaRouter);
        app.use("/", preciosRouter);

        app.listen(PORT, () => {
            console.log('Server is running...');
        })
    } catch (error) {
        console.log("No pudo cargar la base de datos", error);
    }

}

main();

