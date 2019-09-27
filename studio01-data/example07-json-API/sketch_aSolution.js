var jsonThing;
function preload(){
jsonThing = loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Boulder&APPID=2766afd92bbcd1446ef143934c241f39", 
	gotDataCallback,  "jsonp");

}

function setup() {
  createCanvas(400, 400);
  text("City: " + jsonThing.name, 10, 10);
  text("Temp (K): " + jsonThing.main.temp, 10, 30);
  var tempInF = (jsonThing.main.temp - 272.15) * 9/5 + 32;
  text("Temp (F): " + tempInF, 10, 50);

  createP(jsonThing);
  

}

function draw() {
  
}

function gotDataCallback(data){
	console.log(data);

}

function mousePressed(){
	
}