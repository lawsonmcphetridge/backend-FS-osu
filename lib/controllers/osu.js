const { Router } = require('express');
const OsuGame = require('../models/osuModel')
module.exports = Router()

    .get('/', async (req, res) => {
        const allPlayers = await OsuGame.getAllPlayers();
        res.json(allPlayers);
    })



    ;