-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS osu_players;

CREATE TABLE osu_players (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    rank INT NOT NULL,
    top_play INT NOT NULL,
    play_style VARCHAR NOT NULL,
    country VARCHAR NOT NULL
);

INSERT INTO osu_players (name, rank, top_play, play_style, country)
VALUES
('Mrekk', 1, 1322, 'DT', 'Australia'),
('WhiteCat', 4, 1102, 'No mod jumps', 'Germany'),
('Maliszewski', 12, 1008, 'Tourney', 'Poland'),
('Umbre', 40, 984, 'Stream', 'Germany'),
('Sytho', 73, 970, 'Speed', 'United States'),
('Clever', 17296, 394, 'No mod', 'United States');



-------- osu songs table
DROP TABLE IF EXISTS osu_songs;

CREATE TABLE osu_songs (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    diff_name VARCHAR NOT NULL,
    star_rating INT NOT NULL,
    bpm INT NOT NULL,
    cs INT NOT NULL
);

INSERT INTO osu_songs (name, diff_name, star_rating, bpm, cs)
VALUES
('Tsukinami', 'Nostalgia', 6.01, 180, 3.8),
('Save Me', 'Tradegy', 6.49, 190, 4),
('LionHeart', 'Extreme', 6.63, 180, 4.2),
('Louder Than Steel', 'Stainless Heart', 7.41, 190, 4.2),
('Blue Dragon', 'Blue Dragon', 7.22, 191, 4.6);

