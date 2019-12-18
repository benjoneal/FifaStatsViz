-- Drop table if exists
DROP TABLE fifa_stats;

-- Create new table
CREATE TABLE fifa_stats (
	fifa_id int primary key,
	name varchar,
	age	int,
	nationality varchar,
	overall int,
	club varchar,
	value dec,
	wage dec,
	position varchar,
	crossing int,
	finishing int,
	headingAccuracy	int,
	shortPassing int,
	volleys int,
	dribbling int,
	curve int,
	FKAccuracy int,
	longPassing int,
	ballControl	int,
	acceleration int,
	sprintSpeed int,
	agility int,
	reactions int,
	balance int,
	shotPower int,
	jumping int,
	stamina int,
	strength int,
	longShots int,
	aggression int,
	interceptions int,
	positioning int,
	vision int,
	penalties int,
	composure int,
	marking int,
	standingTackle int,
	slidingTackle int,
	GKDiving int,
	GKHandling int,
	GKKicking int,
	GKPositioning int,
	GKReflexes int
);


-- View table columns and datatypes
SELECT * FROM fifa_stats;