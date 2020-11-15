DROP DATABASE IF EXISTS popquizDB;

CREATE DATABASE popquizDB;

USE popquizDB;

CREATE TABLE quiz (
  id INT NOT NULL AUTO_INCREMENT,
  quiz VARCHAR(100) NULL,
  ex01 VARCHAR(45) NULL,
  ex02 VARCHAR(45) NULL,
  ex03 VARCHAR(45) NULL,
  solution INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO quiz(quiz, ex01, ex02, ex03, solution)
VALUES 
      ('What does SQL stand for?', 'Structured Query Language', 'Strong Question Language',  'Structured Question Language', 1),
      ('Which SQL statement is used to extract data from a database?', 'GET', 'EXTRACT', 'SELECT', 3),
      ('Which SQL statement is used to update data in a database?', 'SAVE AS', 'UPDATE', 'MODIFY', 2)