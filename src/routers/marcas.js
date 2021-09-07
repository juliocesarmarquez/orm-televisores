const express = require("express");
const { getModel } = require("../../database/index.js");
const marcaRouter = express();



marcaRouter.get("/marcas/:id", async (req, res) => {
    try {
        const Marcas = await getModel('Marcas');
        const Modelos = await getModel('Modelos').findAll({
            where: {
                MarcaId: req.params.id
            },
            include: Marcas
        });
        res.status(200).json(Modelos);
    } catch {
        res.status(404).json(`No hay televisores`);
    }
})

module.exports = {
    marcaRouter
}