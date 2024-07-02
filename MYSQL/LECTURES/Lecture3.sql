--1. create table CLIENT_MASTER 
create table CLIENT_MASTER(ClientNo varchar(6),Name varchar(20),Address1 varchar(30),Address2 varchar(30),City varchar(15),pincode int,state varchar(20),baldua int);

-- insert CLIENT_MASTER data
insert into CLIENT_MASTER values 
("C00001","Ivan bayross","A/14","Worli","Mumbai",400054,"Maharastra",15000),
("C00002","Mamta Muzumdar","65","Nariman","Madras",780001,"Tamilnadu",0),
("C00003","Chhaya Bankar","P-7","Bandra","Mumbai",400057,"Maharastra",5000),
("C00004","Ashwini Joshi","A/5","Juhu","Banglore",560001,"Karnataka",0),
("C00005","Hansel Calco","p-6","Bandra","Mandras",400060,"Maharastra",2000),
("C00006","Deepak Sharma","A/12","Bandra","Manglore",560050,"Karnataka",0);

-- 2.create table PRODUCT_MASTER 
create table PRODUCT_MASTER (ProductNo varchar(8),Description varchar(30),Profit_percentage int,Unit_Measure varchar(10),QtyOnHand int,ReorderLvl int,SellingPrice int,CostPrice int);

-- insert PRODUCT_MASTER data

insert into PRODUCT_MASTER values 
("P00001","T-shirt",5,"piece",200,50,350,250),
("P0345","Shirt",6,"piece",150,50,500,350),
("P06734","Cotton jeans",5,"piece",100,20,600,450),
("P07865","jeans",5,"piece",100,20,750,500),
("P07868","Trousers",2,"piece",150,50,850,750),
("p07885","Pull overs",2.5,"piece",80,30,700,450),
("P07965","Denim Shirts",4,"piece",100,40,350,450),
("P07975","Lycra tops",5,"piece",70,30,300,175),
("P08865","Trousers",5,"piece",75,30,450,300);

-- 3.create table SALESMAN_MASTER 
create table SALESMAN_MASTER (SalesmanNo varchar(10),Name varchar(30),Address1 varchar(30),Address2 varchar(30),City varchar(20),pincode int,State varchar(20),SalAMT int,TgtToGet int,YtdSales int,Remarks varchar(60));

-- insert SALESMAN_MASTER dat
insert into SALESMAN_MASTER values
("S0001","Aman","A/14","Worli","Mumbai",400002,"Maharastra",3000,100,50,"good"),
("S0002","Omkar","65","Nariman","Mumbai",400001,"Maharastra",3000,200,100,"good"),
("S0003","Raj","P-7","Bandra","Mumbai",400032,"Maharastra",3000,200,100,"good"),
("S0004","Ashis","A/4","Juhu","Mumbai",400044,"Maharastra",3500,200,150,"good");


3a.select Name from client_master;
3b.select * from client_master;
3c.select Name,City from client_master;
3d.select  Description from Product_master;
3e.select * from client_master where City="mumbai";
3f.select * from   salesman_master where  SalAMT=3000;

4a.update client_master set City="banglore" where City="Mandras";
4b.update client_master set baldua=1000 where ClientNo="C00001";
4c.update product_master set CostPrice=950 where Description="Trousers"; 
4d.update salesman_master set City="pune" where City="mumbai";
