CREATE DATABASE recipes_db;

USE recipes_db;

CREATE TABLE users (
	id int(14) auto_increment PRIMARY KEY,
    userName varchar(250) not null,
    password varchar(250) not null,
    wins int(100),
    losses int(100)
);