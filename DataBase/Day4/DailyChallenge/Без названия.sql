create table product_order(
	id serial primary key,
	num_order int not null
	)
	
insert into product_order(id, num_order)
values (default, 1234),
(default, 1228)

create table items(
item_id serial primary key,
price int not null,
item varchar(50) not null unique,
num_fk_order int references product_order(id) on delete cascade on update cascade
)

--drop table items

insert into items(item_id,price,item,num_fk_order)
values	(default,16, 'downhill bike',(select id from product_order where id=1)),
		(default,21, 'snowboard',(select id from product_order where id=1)),
		(default,100,'tesla',(select id from product_order where id=2)),
		(default, 21,'iphone',(select id from product_order where id=1))
		

--drop table product_order
select * from product_order
select * from items

-----Create a function that returns the total price for a given order
select sum(price) as sum_order from items where num_fk_order=1 






