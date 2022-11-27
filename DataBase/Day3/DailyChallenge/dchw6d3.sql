create table Customer(
id serial unique, 
first_name varchar(20) NOT NULL, 
last_name varchar(20) NOT NULL
)
--drop table Customer_profile

create table Customer_profile(
id serial primary key,
isLoggedIn Boolean default false,	
customer_id int REFERENCES Customer(id)
)

insert into customer(id,first_name,last_name)
values (default,'John','Doe'),
(default,'Jerome', 'Lalu'),
(default, 'Lea', 'Rive')

insert into Customer_profile(id,isLoggedIn,customer_id)
values (default, true, (select id from Customer where id=1)),
(default, default, (select id from Customer where id=2))

select * from customer_profile

--The first_name of the LoggedIn customers
select
first_name
from customer c
inner join customer_profile cp
on c.id=cp.customer_id
where cp.isLoggedIn='true';

--All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
select 
first_name, isLoggedIn
from customer c
left join customer_profile cp
on c.id=cp.customer_id

--The number of customers that are not LoggedIn
select count(*)  
from customer_profile cp
right join customer c
on c.id=cp.customer_id
where cp.isLoggedIn is null;

--------------------------------Part 2 - Many to many
create table book(
book_id SERIAL PRIMARY KEY,
title varchar(50) NOT NULL,
author varchar(50) NOT NULL
)

insert into book(book_id,title,author)
values(default,'Alice In Wonderland', 'Lewis Carroll'),
(default, 'Harry Potter', 'J.K Rowling'),
(default, 'To kill a mockingbird', 'Harper Lee')

create table student(
id SERIAL PRIMARY KEY,
name varchar(20) NOT NULL UNIQUE,
age smallint not null check(age<=15)
)

insert into student(id,name,age)
values(default,'John', 12),
(default,'Lera', 11),
(default,'Patrick', 10),
(default,'Bob', 14)

create table book_student(
	book_fk_id int references book(book_id) on delete set null on update set null,
	student_fk_id int references student(id) on delete cascade on update cascade,
	borrowed_date date,
	primary key(book_fk_id,student_fk_id)
)

insert into book_student(book_fk_id,student_fk_id,borrowed_date)
values
((select book_id from book where title ilike '%Alice In Wonderland%'),(select id from student where name='John'),'2022-02-14'),
((select book_id from book where title ilike '%Harry Potter%'),(select id from student where name='Lera'),'2022-03-14'),
((select book_id from book where title ilike '%To kill a mockingbird%'),(select id from student where name='Patrick'),'2022-03-22'),
((select book_id from book where title ilike '%Alice In Wonderland%'),(select id from student where name='Bob'),'2022-05-22')

--Display the data
---Select all the columns from the junction table
select * from book_student

---Select the name of the student and the title of the borrowed books
select 
name
title
from book_student bk
inner join student s 
on bk.student_fk_id=s.id
inner join book b 
on b.book_id=bk.book_fk_id
where borrowed_date is not null

---Select the average age of the children, that borrowed the book Alice in Wonderland
select round(avg(student.age))
from book_student
inner join student on student_fk_id=student.id
inner join book on book_id=book_fk_id
where title ilike '%Alice In Wonderland%'

--Delete a student from the Student table, what happened in the junction table ?

delete from student where id=1 
select * from book_student
--it will be easy delete a student, a table book_student - casscadion updated and deleted all data of previous student 





