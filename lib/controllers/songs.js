const { Router } = require('express');
const OsuSongs = require('../models/osuSongs');

module.exports = Router()
  .get('/', async (req, res) => {
    const allSongs = await OsuSongs.getAllSongs();
    res.json(allSongs);
  })
    
  .get('/:id', async (req, res) => {
    const singleSong = await OsuSongs.getSingleSong(req.params.id);
    res.json(singleSong);
  })



;
