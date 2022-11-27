CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


SELECT * FROM SecondTab

--1.What will be the OUTPUT of the following statement?
--select count of everything from 1st tab that will renamed by ft where column id isn't included null - answer 3  
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

--2. What will be the OUTPUT of the following statement? answer is 2(id from second table= 5 and from first table we need to select everything besides 5 - its 6,7! null its nothing the count will be 2)
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

--3. What will be the OUTPUT of the following statement? answer is 2(id from second t its 0 and 5 that will not included to the 1st table, will stay 6,7 and count of id will be 2)  
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

--4.4. What will be the OUTPUT of the following statement? answer is 2(id from second t will be 5 that will be not included to the first table and will stay 6,7 and null - count will be 2)
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL)

