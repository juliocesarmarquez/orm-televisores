const express = require("express");
const { getModel } = require("../../database/index.js");
const preciosRouter = express();

const { Op } = require("sequelize");

preciosRouter.get("/precios/gt", async (req, res) => {
    try {
        /* const { Op } = require("sequelize"); */
        const Televisores = await getModel('Televisores').findAll({
            where: {
                precio:{[Op.gt]:35000
                },                            
            }
          });
        res.status(200).json(Televisores);
    } catch {
        res.status(404).json(`No hay televisores`);
    }
})

preciosRouter.get("/precios/lt", async (req, res) => {
    try {
        const Televisores = await getModel('Televisores').findAll({
            where: {
                precio:{[Op.lt]:35000
                },                            
            }
          });
        res.status(200).json(Televisores);
    } catch {
        res.status(404).json(`No hay televisores`);
    }
})


preciosRouter.get("/precios/od", async (req, res) => {
    try {
        const Televisores = await getModel('Televisores').findAll({
            order: [['precio', 'ASC']]
          });
        res.status(200).json(Televisores);
    } catch {
        res.status(404).json(`No hay televisores`);
    }
})



order:[
    "id",   // Ordenar por id
    ["id","desc"]// Orden inverso según id
],


module.exports = {
    preciosRouter
}
