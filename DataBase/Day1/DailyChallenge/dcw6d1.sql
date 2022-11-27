create table actors3(
actor_id serial primary key,
	first_name varchar(20) not null,
	last_name varchar(20) not null,
	date_birth date not null,
	number_oscars smallint not null
);

INSERT INTO actors3 (first_name, last_name, date_birth, number_oscars) 
VALUES ('George', 'Clooney', '1999-01-08', 2);

INSERT INTO actors3 (first_name, last_name, date_birth, number_oscars) 
VALUES ('Matt', 'Damon', '1979-01-06', 2);

SELECT * FROM actors3;

--Count how many actors are in the table.
SELECT count(*) FROM actors3;

--Try to add a new actor with some blank fields. What do you think the outcome will be ?
INSERT INTO actors3 (first_name, last_name, date_birth, number_oscars) 
VALUES ('', '', '2005-01-09', 5);
--i'll get a rows with blank fields depend on their format, it doesn't allows to get nothing at date_birth column because of cryteria number can't be a null or nothing   
