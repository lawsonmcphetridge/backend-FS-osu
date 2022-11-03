const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const app = require('../lib/app');
// const request = require('supertest');
// const app = require('../lib/app');
const { osuPlayers } = require('../lib/models/osuModel');
const { request } = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });



  it('/osu should render a list of all osu players', async () => {
    const res = await request(app).get('/osu');
    const expected = osuPlayers.map((osu) => {
      return { id: osu.id, name: osu.name, rank: osu.rank, top_play: osu.top_play, play_style: osu.play_style, country: osu.country };
    });
    expect(res.body).toEqual(expected);
  });



  afterAll(() => {
    pool.end();
  });
});
