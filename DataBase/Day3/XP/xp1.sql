--1.Get a list of all film languages.
select *from language
select *from film

--2.Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
--Get all films, even if they don’t have languages.
--Get all languages, even if there are no films in those languages.

SELECT f.title, f.description, l.name, l.language_id
FROM language l
Left JOIN film f
ON f.language_id=l.language_id;

SELECT f.title, f.description, l.name, f.language_id
FROM film f
Right JOIN language l
ON f.language_id=l.language_id;

--3.Create a new table called new_film with the following columns : id, name. Add some new films to the table.
create table new_film(
id serial unique, 
name varchar(20)
)

drop table new_film

insert into new_film(name)
values('Rambo'),
('Terminator'),
('The Godfather')



--4.Create a new table called customer_review, which will contain film reviews that customers will make. Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted. It should have the following columns:
create table customer_review(
review_id serial primary key,
title varchar,
score smallint,
review_text text,
last_update DATE
)

--drop table customer_review
--TRUNCATE TABLE customer_review;
--select*from new_film
--select *from language

--5.Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
insert into customer_review (review_id,film_id,language_id,title,score,review_text,last_update)
values (default, (select id from new_film where id=1), (SELECT language_id FROM language WHERE language_id = 1), (select name from new_film where id=1),5,'Live For Nothing, Or Die For Something','1992-03-01'),
(default, (select id from new_film where id=2), (SELECT language_id FROM language WHERE language_id = 1), (select name from new_film where id=2),5,'Hasta la vista, baby','1992-05-01');



--6.Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film WHERE name='Rambo';
--he will not allow to do this, because of FK!we will have an error
--ERROR:  update or delete on table "new_film" violates foreign key constraint "customer_review_film_id_fkey" on table "customer_review"
--DETAIL:  Key (id)=(1) is still referenced from table "customer_review".

--EXERCISE 2
--1.Use UPDATE to change the language of some films. Make sure that you use valid languages.
--select language_id from film

UPDATE film
SET language_id=2
WHERE language_id=1;

--2.Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

-- FK from customer table:
-- film_id int unique REFERENCES new_film(id),
-- language_id int REFERENCES language(language_id),
-- its affect into two our columns in way of counting id from new film table, and our language depends on the language id from table language 

--3.We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
drop table customer_review --yes because its a child table

--4.Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT * FROM rental WHERE return_date IS NULL;

--5.Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT * FROM rental
select*from payment
select*from film

SELECT 
r.return_date, p.amount, f.title, r.rental_id, i.inventory_id, i.film_id
FROM rental r
inner JOIN payment p 
ON r.rental_id = p.rental_id
inner JOIN inventory i 
ON r.inventory_id = i.inventory_id 
inner JOIN film f 
ON i.film_id = f.film_id
WHERE return_date IS NULL
ORDER BY amount DESC LIMIT 30;

--6.Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
--1)
SELECT * FROM film --description, film_id, title
SELECT * FROM actor --first_name,last_name, actor_id
SELECT * FROM film_actor --film_id,actor_id

SELECT title, description FROM film WHERE description ILIKE '%sumo wrestler%';
select actor_id from actor where first_name='Penelope' and last_name='Monroe' --120

SELECT 
f.description, f.film_id, f.title,
a.first_name, a.last_name, a.actor_id
FROM film_actor fa
inner JOIN film f
ON fa.film_id = f.film_id
inner JOIN actor a
ON fa.actor_id=a.actor_id
WHERE f.description ILIKE '%sumo wrestler%'
and a.first_name='Penelope' and a.last_name='Monroe';

--2)
select * from film_category -- film_id, category_id
select * from category -- category_id, name documentary
select * from film -- film_id, rating, length, title,description, language_id

SELECT 
c.category_id, c.name,
f.film_id, f.rating, f.length, f.title, f.description, f.language_id
FROM film_category fc
inner JOIN film f
ON fc.film_id = f.film_id
inner JOIN category c
ON fc.category_id = c.category_id
WHERE f.length<60 and f.rating='R' and c.name='Documentary';

--3)
select * from customer -- customer_id, first_name, last_name
select * from rental -- rental_date, inventory_id, customer_id, rental_id, return_date
select * from film -- film_id, title, description, language, rental_rate
select* from payment -- customer_id, rental_id, amount, payment_date
select * from inventory

SELECT
c.first_name, c.last_name,
r.customer_id, r.return_date,
p.amount, 
f.title, f.description
FROM customer c
inner JOIN rental r
ON c.customer_id = r.customer_id
inner JOIN payment p
ON p.customer_id = c.customer_id
inner JOIN inventory i 
ON r.inventory_id = i.inventory_id 
inner JOIN film f 
ON i.film_id = f.film_id
WHERE c.first_name='Matthew' and c.last_name='Mahan' and p.amount>4.00
and r.return_date between '2005-07-28' AND '2005-08-01';

--4)
select * from customer -- customer_id, first_name, last_name
select * from rental -- rental_date, inventory_id, customer_id, rental_id, return_date
select * from film -- film_id, title, description, language, rental_rate
select* from payment -- customer_id, rental_id, amount, payment_date
select * from inventory

SELECT
c.first_name, c.last_name,
p.amount, 
f.title, f.description
FROM customer c
inner JOIN payment p
ON p.customer_id = c.customer_id
inner JOIN rental r
ON c.customer_id = r.customer_id
inner JOIN inventory i 
ON r.inventory_id = i.inventory_id 
inner JOIN film f 
ON i.film_id = f.film_id
WHERE  (c.first_name='Matthew' and c.last_name='Mahan') 
and (f.description ILIKE '%boat%' or f.title ILIKE '%boat%')
ORDER BY p.amount DESC
