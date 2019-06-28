CREATE DATABASE burgers_db;
use burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers_tbl(
    id INT PRIMARY KEY auto_increment,
    burger_name VARCHAR(30) NOT NULL,
    devoured_burgers BOOLEAN,
    burger_time TIMESTAMP,
);
