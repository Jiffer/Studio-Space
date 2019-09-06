var jsonThing;
function preload(){
jsonThing = loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Boulder&APPID=2766afd92bbcd1446ef143934c241f39", 
	gotDataCallback,  "jsonp");

}

function setup() {
  createCanvas(400, 400);
  

}

function draw() {
  
}

function gotDataCallback(data){
	console.log(data);

}

function mousePressed(){
	
}