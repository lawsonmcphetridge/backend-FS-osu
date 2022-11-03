const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
// const request = require('supertest');
// const app = require('../lib/app');
const { osuPlayers } = require('../')

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });



  it('/osu should render a list of all osu players', () => {
    
  });



  afterAll(() => {
    pool.end();
  });
});
