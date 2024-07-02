-- 1.create database
create database users;

--2. create Student tables
create table students(firstName varchar(20),lastName varchar(20),age int,city varchar(20),math int,eng int ,eng int);

-- 3.insert data student tables
insert into  students values 
("Rohini","chaudhari",25,"vyara",98,68,70),
("Ganga","Gamit",25,"Ucchal",80,90,67),
("keni","kakaddiya",20,"surat",90,98,77),
("Mahek","italiya",20,"surat",50,80,90),
("Mansi","vaghasiya",24,"surat",56,89,90),
("shrusti","kathiriya",24,"surat",77,80,54),
("Ragini","chaudhari",29,"vyara",44,67,89),
("Ripal","chaudhari",32,"vyara",90,76,65),
("Avinash","chaudhari",32,"vyara",90,78,66),
("Ankita","chaudhari",37,"bardoli",55,43,67);

-- show table
select * from students;

-- and
 select * from students where  math>70 and city="vyara";

--  or
 select * from students where eng<60 or city="surat";

--  between
select * from students where math between 50 and 70;

select * from students where city in ("vyara","bardoli");

-- NOT
select * from students where city not in ("surat","bardoli");
