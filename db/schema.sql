### Schema

CREATE DATABASE burgerDB;
USE burgerDB;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);