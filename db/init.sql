create table if not exists users (
user_id serial primary key,
city varchar(50)
);

create table if not exists user_bio(
bio_id serial primary key,
bio_interest text
);

select * from users;
select * from user_bio;

insert into users(user_id, city)
values(1, 'San Francisco');

insert into users(user_id, city)

select * from users
join user_bio
on users.user_id = user_bio.bio_id

values
(11, 'San Francisco'),
(12, 'Phoenix');

insert into user_bio(bio_id, bio_interest)
values(11, 'the fog'),
(12, 'the heat');

select * from users
join user_bio
on users.user_id = user_bio.bio_id;
where users.user_id = 1


---
drop table if exists travel_info;
drop table if exists passport_info;

create table travel_info(
person_id serial PRIMARY KEY,
name varchar(50),
email varchar(200)
);

create table passport_info(
passport_id serial PRIMARY KEY,
passport_num varchar(100),
passport_person_id int references travel_info(person_id)
);

insert into travel_info ( name, email)
values ('Tiffany Z', 'tiffz@gmail'),
('CJ M', 'cjm@gmail'),
('Sean P', 'sean@dm.com');

insert into passport_info(passport_num, passport_person_id)
values(1111,1),
(1222,2), 
(1333,3);


select * from travel_info;
select * from passport_info;
