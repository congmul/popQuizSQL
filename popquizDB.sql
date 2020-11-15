DROP DATABASE IF EXISTS popquizDB;

CREATE DATABASE popquizDB;

USE popquizDB;

CREATE TABLE quiz (
  id INT NOT NULL AUTO_INCREMENT,
  quiz VARCHAR(45) NULL,
  ex01 VARCHAR(45) NULL,
  ex02 VARCHAR(45) NULL,
  ex03 VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO quiz(quiz, ex01, ex02, ex03)
VALUES 
      ('What does SQL stand for?', 'Strong Question Language', 'Structured Query Language', 'Structured Question Language'),
      ('Which SQL statement is used to extract data from a database?', 'SELECT', 'GET', 'EXTRACT'),
      ('Which SQL statement is used to update data in a database?', 'UPDATE', 'SAVE AS', 'MODIFY')