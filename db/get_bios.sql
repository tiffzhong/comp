select * from users
join user_bio
on users.user_id = user_bio.bio_id;