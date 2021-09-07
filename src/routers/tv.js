const express = require("express");
const { getModel } = require("../../database/index.js");
const tvRouter = express();



tvRouter.post("/televisores", async (req, res) => {
    try {
        const Televisores = getModel('Televisores');
        const tv = new Televisores({
            MarcaId: req.body.MarcaId,
            modelo: req.body.modelo,
            pantalla: req.body.pantalla,
            smart: req.body.smart,
            precio: req.body.precio
        })
        await tv.save();
        return res.status(200).json(`El televisor ${tv.modelo} fue cargado de manera exitosa`);
    } catch {
        res.status(404).json(`El televisor no pudo ser cargada`);
    }
})

tvRouter.get("/televisores", async (req, res) => {
    try {
        const tv = await getModel('Televisores').findAll();
        res.status(200).json(tv);
    } catch {
        res.status(404).json(`No existen televisores`);
    }
})


module.exports = {
    tvRouter
}
