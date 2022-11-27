select * from items

--All items, ordered by price (lowest to highest).
select * from items order by price asc

--Items with a price above 80 (80 included), ordered by price (highest to lowest).
select * from items where price>=80 order by price desc

--The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
select * from customers
select first_name, last_name from customers order by first_name asc limit 3;

--All last names (no other columns!), in reverse alphabetical order (Z-A)
select last_name from customers order by last_name desc;
