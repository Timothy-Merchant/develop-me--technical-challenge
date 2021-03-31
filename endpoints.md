<!-- Post Players -->
POST api/players
<!-- This will then create rounds and games -->

Get Rounds
<!-- Get all rounds -->
GET api/rounds
<!-- Get a single round -->
GET api/rounds/1
<!-- Get all games for a single round -->
GET api/rounds/1/games
<!-- Get a single game -->
GET api/rounds/1/games/1
<!-- Get players for a specific game -->
GET api/rounds/1/games/1/players

One to Many relationships:

Rounds (Have Many Games) 
Games (Have Many Players)