GET api/players
<!-- Gets all players for distributing them to tournament bracket -->
POST api/players
<!-- Send array of players to the API when Roster component is submitted -->

GET api/games
<!-- Get a list of all games for determining tournament arrangement  -->
GET api/games/1
<!-- Gets current game information for display on the frontend -->
PUT api/games/1
<!-- Update current game information (when changing score/service/deuce/winner) -->
POST api/games/
<!-- Create a game with two players -->