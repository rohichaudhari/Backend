-- 1.insert data:-
insert into cricketer (firstname ,lastname,age) values ("virat" ,"kohli",45);

-- 2.insert multiple data:-
insert into cricketer (firstname,lastname,age) values 
("rohini","chaudhari",25),
("ganga","gamit",25),
("payal","patel",25);

        or
-- 1.insert single data:
insert into cricketer values ("keni","kakadiya",19);
2.insert multiple data:-
insert into cricketer values
("mahek","italiya",19),
("mansi","vaghasiya",20),
("shrusti","kathiriya",20);

-- 3.read data
select * from  cricketer;
select firstname from  cricketer;
select firstname, age from cricketer;
select firstname as "FullName",age,lastname from cricketer;
select firstname "Hello",age from cricketer;
select * ,age,age from cricketer;

