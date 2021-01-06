CREATE TABLE artist (
    "id" serial PRIMARY KEY,
    "name" VARCHAR(80),
    "birthdate" DATE

);

CREATE TABLE song (
    "id" serial PRIMARY KEY,
    "title" VARCHAR(255),
    "length" VARCHAR(10),
    "released" DATE
);

INSERT INTO artist (id, name, birthdate)
VALUES (1, 'Frank Sinatra', '1-2-1918')


INSERT INTO song (id, title, length, released)
VALUES (1, 'Fly Me To the Moon', '3:55', '1-2-1955'),    {
        title: 'Take Five',
        length: '5:24',
        released: '1959-09-29'
    },
    {
        title: 'So What',
        length: '9:22',
        released: '1959-08-17'
    },
    {
        title: 'Black Gold',
        length: '5:17',
        released: '2012-02-01'
    }



