select * from customers;
SELECT AVG(creditLimit)FROM customers;
SELECT COUNT(postalcode)FROM  customers;
SELECT COUNT(DISTINCT postalcode) AS "Number of employees"FROM customers;
select MAX(DISTINCT creditlimit) from customers;
select min(DISTINCT creditlimit) from customers;
select SUM(DISTINCT creditlimit) from customers;
-- select CORR("addressline1","addressline2") from customers;
-- select MEDIAN(creditlimit) from customers;
select STDDEV(creditlimit) from customers;
 SELECT  VARIANCE(creditlimit) as Sub1Variance FROM customers;
 

 
