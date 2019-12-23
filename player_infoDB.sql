drop table player_info;

create table player_info as
select fifa_stats.fifa_id, fifa_stats.name, fifa_stats.age, 
	fifa_stats.nationality, fifa_stats.overall, clubs.club_id,
	fifa_stats.value, fifa_stats.wage, fifa_stats.position 
	from fifa_stats left join clubs on clubs.club = fifa_stats.club;
	
select * from player_info;

alter table player_info
add ranking serial;

alter table player_info
add primary key (fifa_id);

