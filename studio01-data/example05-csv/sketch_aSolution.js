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
  noStroke();
  // starting at the first line of game data:
  gameIndex = 1;
  lastTime = 0;  // when did I last draw something
  interval = 200; // in ms
}


function draw() {

  noStroke();
  // display box at top
  fill(200);
  rect(0, 0, 400, 50);
  // display win percentage
  fill(0);
  var winPercentage = season.getNum(gameIndex, "W") / (season.getNum(gameIndex, "W")+ season.getNum(gameIndex, "L"))
  text("game: " + gameIndex, 10, 20);
  text("win percentage: " + winPercentage, 10, 40);

  // do we have more data to display and has the interval time ellapsed?
 if(gameIndex < season.getRowCount()-1 && (millis() - lastTime) > interval){
  fill(255, 10);
  rect(0, 0, width, height);
  // reset the timer
    lastTime = millis();
    // set home team color
    fill(50, 100, 150);
    ellipse(gameIndex*5, 100 + season.getNum(gameIndex, "Tm"), 5, 5);
    // away team color
    stroke(100);
    ellipse(gameIndex*5, 100 + season.getNum(gameIndex, "Opp"), 5, 5);
    
    // draw a line based on the current win percentage
    fill(0);
    line(width * winPercentage, height - 100, width * winPercentage, height);
    gameIndex++;
  }
  else if (gameIndex > season.getRowCount()){
    noLoop();
  }
}
