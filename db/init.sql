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

insert into user_bio(bio_id, bio_interest)
values(1, 'like to watch TV');

select * from users
join user_bio
on users.user_id = user_bio.bio_id
where users.user_id = 1