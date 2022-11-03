const pool = require('../utils/pool');
module.exports = class OsuGame {
    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.rank = row.rank;
        this.top_play = row.top_play;
        this.play_style = row.play_style;
        this.country = row.country;
    }

    static async getAllPlayers() {
        const { rows } = await pool.query('SELECT * FROM osu_players')
        return rows.map((osuRow) => new OsuGame(osuRow));
    }

    static async getSinglePlayer(id) {
        const { rows } = await pool.query('SELECT * FROM osu_players WHERE id = $1', [id])
        return new OsuGame(rows[0]);
    }
}