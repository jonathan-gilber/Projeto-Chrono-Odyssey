create database chrono;
use chrono;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
numeroTel char(11),
email varchar(75),
senha varchar(45)
);

create table votos (
idVoto int primary key auto_increment,
voto char(1), check (voto > 0 and voto <= 4),
opcaoVoto varchar(45),
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
);

select * from usuario;
select * from votos;

select * from usuario join votos on fkUsuario = idUsuario;