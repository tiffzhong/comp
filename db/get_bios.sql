select * from cities
join user_bio
on cities.id = user_bio.bio_id;