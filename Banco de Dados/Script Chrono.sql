create database chrono;

use chrono;

create table usuario (
idUsuario int primary key auto_increment,
Nome varchar(45),
Sobrenome varchar(45),
NumeroTel char(11),
email varchar(45),
senha varchar(45)
);

select * from usuario;