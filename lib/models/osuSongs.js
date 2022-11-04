const pool = require('../utils/pool');
module.exports = class OsuSongs {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.diff_name = row.diff_name;
    this.star_rating = row.star_rating;
    this.bpm = row.bpm;
    this.cs = row.cs;
  }
    
  static async getAllSongs() {
    const { rows } = await pool.query('SELECT * FROM osu_songs');
    return rows.map((song) => new OsuSongs(song));
  }




};
