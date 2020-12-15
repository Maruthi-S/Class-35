var hypnoticBall , database , position;

function setup(){
      
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    hypnoticBall = createSprite(250,250,20,20);
    hypnoticBall.shapeColor = "red"; 

    var hypnoticBallPosition = database.ref('ball/position');
    hypnoticBallPosition.on("value",readPosition,showError);
}

function draw(){
   
    background("white");

    if(position !== undefined){

    
    if(keyDown("left_Arrow")){

        writePosition(-1,0);
    }

    if(keyDown("right_Arrow")){

        writePosition(1,0);
    }

    if(keyDown("up_Arrow")){

        writePosition(0,-1);
    }

    if(keyDown("down_Arrow")){

        writePosition(0,1);
    }
    
    drawSprites();
}

}

function readPosition(data){
    position = data.val();
    console.log(position.x);
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;
}

function writePosition(x,y){
    database.ref('ball/position').set({
     'x': position.x + x , 
     'y': position.y + y
    })  
}

function showError(){

    console.log("Error in writing to the database");

}
