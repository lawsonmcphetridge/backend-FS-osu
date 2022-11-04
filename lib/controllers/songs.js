const { Router } = require('express');
const OsuSongs = require('../models/osuSongs');

module.exports = Router()
  .get('/', async (req, res) => {
    const allSongs = await OsuSongs.getAllSongs();
    res.json(allSongs);
  })



;
