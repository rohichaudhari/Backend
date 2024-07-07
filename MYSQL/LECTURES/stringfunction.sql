-- SELECT INITCAP('rohini') FROM dual; 
SELECT lower("RAGU") FROM dual;
SELECT upper("ragu") FROM dual;
SELECT concat("rohini","chaudhari") FROM dual;
select LPAD ( "rohini", 5 ,"ragini");
select RPAD ( "roh", 5 ,"ragini");
select RPAD ( "rohinichaudhari", 20,"rohini");
SELECT LTRIM('12345') AS trimmed_number FROM dual;
SELECT LTRIM('Hello World') AS trimmed_string FROM dual;
SELECT RTRIM('Hello World') AS trimmed_string FROM dual;
select RTRIM ("ROHINI" ,"I") AS trimmed_string FROM dual;
-- select initcap ("now is the time for all good men to come to the aid of the
-- party") as "SLOGAN" from dual;
select REPLACE ("rohini chaudhari", "chaudhari","gamit") from dual;
select  SUBSTR("chaudhari",3,5) from dual;
select  SUBSTR("chaudhari",3,5) from dual;
select  SUBSTR("rohinichaudhari",3,10) from dual;
select LENGTH("ROHINI") from dual;
SELECT INSTR("W3Schools.com", "o") from dual;
