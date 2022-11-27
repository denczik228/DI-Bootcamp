CREATE TABLE DEPARTMENT
      (
         DEPTCODE   Integer PRIMARY KEY ,
         DeptName   varCHAR(30),
         LOCATION   VARCHAR(33) UNIQUE
      );
	  
drop table department
-- CREATE SEQUENCE deptcode
-- START 10
-- INCREMENT 10
-- MINVALUE 10
-- OWNED BY department.deptcode;

CREATE TABLE EMPLOYEE
      (
         EmpCode      INTEGER PRIMARY KEY,
         EmpFName     VARCHAR(15) NOT NULL,
         EmpLName     VARCHAR(15) NOT NULL,
         Job          VARCHAR(45),
         Manager      CHAR(4),
         HireDate     DATE,
         Salary       Decimal Default 0,
         Commission   INTEGER,
         Department_code int References department (deptcode) 
      );
	  
INSERT INTO DEPARTMENT (DeptCode,DeptName,LOCATION) 
VALUES (10,'FINANCE', 'EDINBURGH'),
(20,'SOFTWARE','PADDINGTON'),
(30,'SALES', 'MAIDSTONE'),
(40,'MARKETING', 'DARLINGTON'),
(50,'ADMIN', 'BIRMINGHAM');

create table boss(
boss_id serial not null,
boss_name varchar(20), 
boss_type varchar(20), 
dept_number int Unique References department(deptcode)
)
select * from boss
select * from department
insert into boss (boss_name, boss_type, dept_number)
values ('john', 'funny', (select deptcode from department where deptname='finance'))

select boss_name, boss_type, deptname
from department
inner join boss
on boss.dept_number=depatment.deptcode
where deptname='Finance';
