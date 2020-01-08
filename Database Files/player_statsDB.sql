drop table player_stats;

create table player_stats as
select fifa_id, crossing, finishing, headingaccuracy,
	shortpassing, volleys, dribbling, curve, fkaccuracy,
	longpassing, ballcontrol, acceleration, sprintspeed,
	agility, reactions, balance, shotpower, jumping,
	stamina, strength, longshots, aggression, interceptions,
	positioning, vision, penalties, composure, marking,
	standingtackle, slidingtackle, gkdiving, gkhandling,
	gkkicking, gkpositioning, gkreflexes
	from fifa_stats;
	
select * from player_stats;

alter table player_stats
add foreign key (fifa_id) 
references player_info(fifa_id);