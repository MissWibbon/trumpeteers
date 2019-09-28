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

--
CREATE USER [IF NOT EXISTS] account_name
IDENTIFIED BY 'password';

--
CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
--

DROP DATABASE IF EXISTS Users;
CREATE DATABASE Users;
CREATE LOGIN Molly WITH PASSWORD= 'PWD', DEFAULT_DATABASE=Users;
USE Users;
CREATE USER Molly2 FOR LOGIN Molly;
-- Clean up
USE master;
DROP DATABASE Users;
DROP LOGIN Molly;

-- 
CREATE DATABASE [NewDatabase]
GO
CREATE LOGIN [NewLogin] WITH PASSWORD=N’test’, DEFAULT_DATABASE=[NewDatabase]
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [NewLogin]
GO
USE [NewDatabase]
GO
CREATE USER [NewUser] FOR LOGIN [NewLogin]
GO
ALTER USER [NewUser] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [NewUser]
GO
-- Clean up
USE master
GO
DROP DATABASE [NewDatabase]
GO
DROP LOGIN [NewLogin]
GO