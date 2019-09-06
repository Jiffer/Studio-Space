// Based on example found at:
// https://creative-coding.decontextualize.com/arrays-and-objects/

var season;
var gameIndex;
var lastTime;
var interval;

function preload() {
  season = loadTable(
    'teams_UTA_2015_games_teams_games.csv',
    'csv',
    'header');
}
function setup() {
  createCanvas(400, 400);
  background(50);
  // starting at the first line of game data:
  gameIndex = 1;
  lastTime = 0;  // when did I last draw something
  interval = 50; // in ms
}


function draw() {
  // do we have more data and has the interval time ellapsed?
 if(gameIndex < season.getRowCount() && (millis() - lastTime) > interval){

 	// reset the timer
  	lastTime = millis();
  	// set home team color
    fill(50, 100, 150);
    ellipse(gameIndex*5, 100 + season.getNum(gameIndex, "Tm"), 5, 5);
    // away team color
    fill(100);
    ellipse(gameIndex*5, 100 + season.getNum(gameIndex, "Opp"), 5, 5);
    gameIndex++;
  }
  else if (gameIndex > season.getRowCount()){
  	noLoop();
  }
}
