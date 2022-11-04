const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
// const app = require('../lib/app');
const OsuGame = require('../lib/models/osuModel');
const OsuSongs = require('../lib/models/osuSongs');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/osu should render a list of all osu players', async () => {
    const res = await request(app).get('/osu');
    const allPlayers = await OsuGame.getAllPlayers();
    const expected = allPlayers.map((osu) => {
      return { id: osu.id, name: osu.name, rank: osu.rank, top_play: osu.top_play, play_style: osu.play_style, country: osu.country };
    });
    expect(res.body).toEqual(expected);
  });

  it('/osu/1 should render out only one player', async () => {
    const res = await request(app).get('/osu/1');
    const mrekk = {
      id: '1',
      name: 'Mrekk',
      rank: 1,
      top_play: 1322,
      play_style: 'DT',
      country: 'Australia'
    };
    expect(res.body).toEqual(mrekk);
  });


  it('/songs should render a list of songs', async () => {
    const res = await request(app).get('/songs');
    const allSongs = await OsuSongs.getAllSongs();
    const expected = allSongs.map((song) => {
      return { id: song.id, name: song.name, diff_name: song.diff_name, star_rating: song.star_rating, bpm: song.bpm, cs: song.cs };
    });
    expect(res.body).toEqual(expected);
  });

  it('/songs/1 should only render one song', async () => {
    const res = await request(app).get('/songs/1');
    const tsukinami = {
      id: '1',
      name: 'Tsukinami',
      diff_name: 'Nostalgia',
      star_rating: 6.01,
      bpm: 180,
      cs: 3.8

    };
    expect(res.body).toEqual(tsukinami);
  });
  



  afterAll(() => {
    pool.end();
  });
});
