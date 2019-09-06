var jsonThing;
function preload(){
jsonThing = loadJSON("http://api.open-notify.org/astros.json", gotDataCallback,  "jsonp");

}

function setup() {
  createCanvas(400, 400);
  

}

function draw() {
  
}

function gotDataCallback(data){
	// console.log(data);
	for(let i = 0; i < data.number; i++){
	    console.log(data.people[i].name);
    }
}

function mousePressed(){
	
}