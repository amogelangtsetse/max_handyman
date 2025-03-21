CREATE DATABASE handyman;

USE handyman;

CREATE TABLE contact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    message TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE appointment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    service VARCHAR(100),
    date DATE,
    time TIME,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
