--Basic Select Statement
--1.Write a query to display the names (first_name, last_name) using an alias name “First”, “Last” from the employee table.
select first_name as first, last_name as last from employees

--2.Write a query to get unique departments ID from the employee table (ie. without duplicates).
select * from departments
SELECT location_id, COUNT(location_id)
FROM departments
GROUP BY location_id
HAVING COUNT(location_id) = 1

--3.Write a query to get the details of all employees from the employee table, do so in descending order by first name.
select * from employees order by first_name desc

--4.Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees. 
SELECT first_name, last_name, salary, salary*.15 PF FROM employees;

--5.Write a query to get the employee IDs, names (first_name, last_name) and salary in ascending order according to their salary.
SELECT  employee_id, first_name, last_name,salary FROM employees order by salary asc 

--6.Write a query to get the total sum of all salaries paid to the employees.
select sum(salary) from employees

--7.Write a query to get the maximum and minimum salaries paid to the employees.
select max(salary) from employees
select min(salary) from employees

--8.Write a query to get the average salary paid to the employees.
select avg(salary) from employees

--9.Write a query to get the number of employees working in the company.
select count(employee_id) from employees
select * from employees

--10.Write a query to get all the first names from the employees table in upper case.
SELECT UPPER(first_name) from employees

--11.Write a query to get the first three characters of each first name of all the employees in the employees table.
SELECT SUBSTRING(first_name,1,3) FROM employees;

--12.Write a query to get the full names of all the employees in the employees table. You have to include the first name and last name.
SELECT  CONCAT(first_name,' ', last_name) FROM employees;

--13.Write a query to get the first name, last name and the length of the full name of all the employees from the employees table.
SELECT first_name,last_name, LENGTH(first_name)+LENGTH(last_name) FROM employees;

--14. Write a query to check whether the first_name column of the employees table contains any numbers.
SELECT * FROM employees WHERE  first_name 
SIMILAR TO   '%0|1|2|3|4|5|6|7|8|9%';

--15.Write a query to select the first ten records from a table.
select*from employees limit 10;

-----------Restricting And Sorting
--1.Write a query to display the first_name, last_name and salary of all employees whose salary is between $10,000 and $15,000.
select first_name, last_name,salary from employees where salary between 10000 and 15000

--2.Write a query to display the first_name, last_name and hire date of all employees who were hired in 1987.
SELECT first_name, last_name, hire_date 
FROM employees 
WHERE TO_CHAR(hire_date, 'YYYY')  LIKE '%87';

--3.Write a query to get the all employees whose first_name has both the letters ‘c’ and ‘e’.
select first_name from employees where first_name like '%c%' and first_name like 'e'

--4.Write a query to display the last_name, job, and salary of all the employees who don’t work as Programmers or Shipping Clerks, and who don’t receive a salary equal to $4,500, $10,000, or $15,000.
select * from jobs
select * from employees

SELECT last_name, job_id, salary
FROM employees
WHERE job_id != 9 and job_id != 17
AND salary NOT IN (4500,10000, 15000);

--5.Write a query to display the last names of all employees whose last name contains exactly six characters
SELECT last_name FROM employees WHERE last_name LIKE '______';

--6.Write a query to display the last name of all employees who have the letter ‘e’ as the third character in the name.
SELECT last_name FROM employees WHERE last_name LIKE '__e%';

--7.Write a query to display the jobs title appearing in the employees table.
select * from employees
select* from jobs

select e.employee_id,e.first_name,e.last_name,
j.job_title
from employees e
inner join jobs j
on e.job_id=j.job_id

--8.Write a query to select all information of employees whose last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’.
SELECT * FROM employees WHERE last_name IN('Jones', 'Blake', 'Scott', 'King', 'Ford');



