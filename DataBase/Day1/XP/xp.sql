CREATE TABLE customers (
    actor_id  SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name  VARCHAR(20) NOT NULL
)

INSERT INTO customers (first_name, last_name) 
VALUES ('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');

select * from customers
--All customers whose last name is ‘Smith’ (What will be your outcome?)
SELECT * FROM customers WHERE last_name = 'Smith';
--we will get a blank row
--All customers whose last name is ‘Jones’.
SELECT * FROM customers WHERE last_name = 'Jones';
--All customers whose firstname is not ‘Scott’
SELECT * FROM customers WHERE first_name != 'Scott';

--All the items.
select * from items
--All the items with a price above 80 (80 not included).
SELECT * FROM items WHERE price > 80;
--All the items with a price below 300. (300 included)
SELECT * FROM items WHERE price <= 300;




