DROP DATABASE IF EXISTS burgerDB;
CREATE DATABASE burgerDB;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    eaten BOOLEAN DEAFAULT FALSE
);