create database data;
show databases;
use data;
create table CLIENT_MASTER_DATA(ClientNo varchar(6) primary key,Name varchar(20),Address1 varchar(30),Address2 varchar(30),City varchar(15),pincode int,state varchar(20),baldua int);
desc CLIENT_MASTER_DATA;
insert into CLIENT_MASTER_DATA values 
("C00001","Ivan bayross","A/14","Worli","Mumbai",400054,"Maharastra",15000),
("C00002","Mamta Muzumdar","65","Nariman","Madras",780001,"Tamilnadu",0),
("C00003","Chhaya Bankar","P-7","Bandra","Mumbai",400057,"Maharastra",5000),
("C00004","Ashwini Joshi","A/5","Juhu","Banglore",560001,"Karnataka",0),
("C00005","Hansel Calco","p-6","Bandra","Mandras",400060,"Maharastra",2000),
("C00006","Deepak Sharma","A/12","Bandra","Manglore",560050,"Karnataka",0);
select *from CLIENT_MASTER_DATA;


create table PRODUCT_MASTER1(producno varchar(10) primary key,description varchar(15) not null,profitpercent int not null,unitmeasure varchar(10) not null,qtyonhand int not null,reorderlvl int not null,sellprice int not null,costprice int not null);
show tables;
desc product_master1;
insert into PRODUCT_MASTER1 values 
("P00001","T-shirt",5,"piece",200,50,350,250),
("P0345","Shirt",6,"piece",150,50,500,350),
("P06734","Cotton jeans",5,"piece",100,20,600,450),
("P07865","jeans",5,"piece",100,20,750,500),
("P07868","Trousers",2,"piece",150,50,850,750),
("p07885","Pull overs",2.5,"piece",80,30,700,450),
("P07965","Denim Shirts",4,"piece",100,40,350,450),
("P07975","Lycra tops",5,"piece",70,30,300,175),
("P08865","Trousers",5,"piece",75,30,450,300);
select * from product_master1;


create table SALESMAN_MASTER1(SalesmanNo varchar(10) primary key,salesmanName varchar(30) not null,Address1 varchar(30) not null,Address2 varchar(30),City varchar(20),pincode int,State varchar(20),SalAMT int not null,TgtToGet int not null,YtdSales int not null,Remarks varchar(60));
desc SALESMAN_MASTER1;
insert into SALESMAN_MASTER1 values
("S0001","Aman","A/14","Worli","Mumbai",400002,"Maharastra",3000,100,50,"good"),
("S0002","Omkar","65","Nariman","Mumbai",400001,"Maharastra",3000,200,100,"good"),
("S0003","Raj","P-7","Bandra","Mumbai",400032,"Maharastra",3000,200,100,"good"),
("S0004","Ashis","A/4","Juhu","Mumbai",400044,"Maharastra",3500,200,150,"good");
select * from SALESMAN_MASTER1;
desc SALESMAN_MASTER1;
insert into SALESMAN_MASTER1 values
("S0001","Aman","A/14","Worli","Mumbai",400002,"Maharastra",3000,100,50,"good"),
("S0002","Omkar","65","Nariman","Mumbai",400001,"Maharastra",3000,200,100,"good"),
("S0003","Raj","P-7","Bandra","Mumbai",400032,"Maharastra",3000,200,100,"good"),
("S0004","Ashis","A/4","Juhu","Mumbai",400044,"Maharastra",3500,200,150,"good");
select * from SALESMAN_MASTER1;

create table SALES_ORDER(orderno varchar(10) primary key,clientno varchar(10),orderdate DATE,delayaddr varchar(30),salsemanno varchar(6),delaytype char(1),billyn char(1),delaydate DATE, orderstatus varchar(10),foreign key (clientno) references CLIENT_MASTER_DATA(ClientNo), foreign key (salsemanno) references SALESMAN_MASTER1(SalesmanNo));
desc SALES_ORDER;
insert into SALES_ORDER values
("O19001","C00001","12-6-04","yogichowk","S0001","F","N","20-7-02","in process"),
("O19002","C00002","25-6-04","punagam","S0002","P","N","27-6-02","cancelled"),
("O46865","C00003","18-2-04","kumbhariya","S0003","F","Y","20-2-02","fulfiled"),
("O19003","C00001","3-4-04","saroli","S0001","F","Y","7-4-02","fulfield"), 
("O46866","C00004","20-5-04","Adajan","S0002","P","N","22-5-02","cancelled"),
("O19008","C00005","24-5-04","Adajan","S0004","F","N","26-7-02","In process");
select * from SALES_ORDER;
insert into SALES_ORDER values ("O19002","C00002","25-6-04","punagam","S0002","P","N","27-6-02","cancelled");
insert into SALES_ORDER values
("O46865","C00003","18-2-04","kumbhariya","S0003","F","Y","20-2-02","fulfiled"),
("O19003","C00001","3-4-04","saroli","S0001","F","Y","7-4-02","fulfield"), 
("O46866","C00004","20-5-04","Adajan","S0002","P","N","22-5-02","cancelled"),
("O19008","C00005","24-5-04","Adajan","S0004","F","N","26-7-02","In process");
select * from SALES_ORDER;

create table SALES_ORDER_DETAILS(orderno varchar(10),productno varchar(10),qtyordered int,qtydisp int,productrate int, foreign key(orderno) references SALES_ORDER(orderno),foreign key(productno) references PRODUCT_MASTER1(producno));
desc SALES_ORDER_DETAILS;
insert into SALES_ORDER_DETAILS values
("O19001","P00001",4,4,525);
insert into SALES_ORDER_DETAILS values
("O19001","P07865",2,1,8400),
("O19001","p07885",2,1,5250),
("O19002","P00001",10,0,525),
("O46865","P07868",3,3,3150),
("O46865","p07885",3,1,5250),
("O46865","P00001",10,10,525),
("O46865","P0345",4,4,1050),
("O19003","P06734",2,2,1050);
select * from SALES_ORDER_DETAILS;










