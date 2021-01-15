//Create variables here
var database;
var dog, happyDog, database, foodS, foodStock;
var food;

function preload(){

  dogImage = loadImage("images/Dog.png");
  happydogImage = loadImage("images/happydog.png");
  
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,250);
  dog.addImage("doge",dogImage);
  dog.scale = 0.1;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}

function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydogImage);
    dog.scale = 0.1;
  }


  drawSprites();
  fill("white");
  text("Note: Press UP_ARROW Key To feed Drago Milk!", 20,50);

}

function readStock(data){
  food = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  } else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
