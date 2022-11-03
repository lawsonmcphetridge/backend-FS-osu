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