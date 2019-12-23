drop table clubs;


create table clubs as
select club, league from fifa_stats2
group by league, club
order by league;

select * from clubs


alter table clubs
add club_id serial primary key;

select * from clubs;



SELECT fifa_stats.fifa_id, fifa_stats.name, players.hand, matches.loser_rank
FROM matches
INNER JOIN players ON
players.player_id=matches.loser_id;