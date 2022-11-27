--In the dvdrental database write a query to select all the columns from the “customer” table.
select * from customer

--Write a query to display the names (first_name, last_name) using an alias named “full_name”.
select concat(first_name, ' ',last_name) as full_name from customer

--Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
select DISTINCT create_date from customer 

--Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
select * from customer order by first_name desc

--Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
select*from film
select film_id, title, description, release_year, rental_rate from film order by rental_rate asc

--Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
select*from address
select address, phone from address where district='Texas'

--Write a query to retrieve all movie details where the movie id is either 15 or 150.
select*from film
select * from film where film_id=15 or film_id=150

--Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
select film_id, title, description, length, rental_rate from film where title='Rambo'

--No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
select film_id, title, description, length, rental_rate from film where title like 'Ra%'

--Write a query which will find the 10 cheapest movies.
select film_id, title, description, length, rental_rate from film order by rental_rate asc FETCH FIRST 10 ROW ONLY;

--Not satisfied with the results. Write a query which will find the next 10 cheapest movies. Bonus: Try to not use LIMIT.
select rental_rate, title, description, length from film where rental_rate=(
	select min(rental_rate) from film ) OFFSET 10 ROWS FETCH FIRST 10 ROW ONLY;

--Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
select
first_name, last_name,
amount, payment_date, c.customer_id
from 
customer c
inner join payment p
on p.customer_id=c.customer_id
order by c.customer_id asc;

--You need to check your inventory. Write a query to get all the movies which are not in inventory.
select *from inventory where inventory_id is null
select *from film

select
title, description, release_year, f.film_id
from 
film f
inner join inventory i
on i.film_id = f.film_id
where i.inventory_id is null;

--Write a query to find which city is in which country.
select *from city
select *from country

select
city, country, c.country_id
from 
country c
inner join city ci
on ci.country_id = c.country_id
order by c.country asc;

--Bonus You want to be able to see how your sellers have been doing? Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.
select *from customer
select*from payment

select
first_name, last_name,
p.customer_id, amount, payment_date, staff_id
from 
payment p
inner join customer c
on p.customer_id = c.customer_id
order by p.staff_id asc;



