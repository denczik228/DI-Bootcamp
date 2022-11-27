CREATE TABLE students (
    actor_id  SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name  VARCHAR(20) NOT NULL,
	birth_date DATE NOT NULL
);

INSERT INTO students (first_name,last_name,birth_date)
Values ('Marc','Benichou','1998/11/02'),
('Yoan','Cohen','2010/12/03'),
('Lea','Benichou','1987/07/27'),
('Amelia','Dux','1996/04/07'),
('David','Grez','2003/06/14'),
('Omer','Simpson','1980/10/03');

INSERT INTO students (first_name,last_name,birth_date)
Values ('Den','Bernikov','1992/01/19');

select * from students
select first_name, last_name from students
select * from students where actor_id = 2;
select * from students where last_name = 'Benichou' AND first_name = 'Marc';
select * from students where first_name like '%a%';
select * from students where last_name = 'Benichou' OR first_name = 'Marc';
select * from students where first_name ilike 'a%';
select * from students where first_name like '%a';
select * from students where first_name like '%%a%';
select * from students where actor_id = 1 or actor_id = 3;
select * from students where birth_date >= '2000/01/01';





