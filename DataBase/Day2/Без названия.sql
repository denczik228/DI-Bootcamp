select * from actors

update actors
set first_name='Maty'
where first_name='Matt'

select * from actors

update actors
set number_oscars=4
where last_name='Clooney'

select * from actors

delete from actors
where last_name='Clooney'
RETURNING *;

ALTER TABLE actors RENAME COLUMN date_birth TO birthdate;
