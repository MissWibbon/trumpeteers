--------------sorry this is confusing -- trying to figure out what works
---- different versions separated by ---------------

CREATE DATABASE recipes_db;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

CREATE DATABASE recipes_db;
USE recipes_db;
CREATE TABLE users (
    id int(14) auto_increment PRIMARY KEY,
   userName varchar(250) not null,
   password varchar(250) not null,
   wins int(100),
   losses int(100)
USE recipes_db;

CREATE TABLE IF NOT TABLE users (
	id int(14) auto_increment PRIMARY KEY,
    userName varchar(250) not null,
    password varchar(250) not null,
    wins int(100),
    losses int(100)
);

--------------------------------
CREATE USER [IF NOT EXISTS] account_name
IDENTIFIED BY 'password';

--------------------------
CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
--------------------------

DROP DATABASE IF EXISTS users_db;
CREATE DATABASE users_db;
USE users_db;
CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);