hatX=0;
hatY=0;
var song="";

function preload(){
    sadhana=loadImage('hat.png');
    song=loadSound("song.mp3");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotResult);
}
function draw(){
    image(video,0,0,300,300);
    image(sadhana, hatX, hatY, 70,100);
    
}
function take_snapshot(){
    save('Happy_Birthday.png');
}

function modelLoaded(){
    console.log("Model loaded!");
}
function gotResult(results){
    if(results.length>0){
        console.log(results);
        hatX=results[0].pose.nose.x-30;
        hatY=results[0].pose.nose.y-150;
        console.log(" hat y ~  "+hatY);
        console.log(" hat x ~  "+hatX);
    }
}
function play(){
    song.play();
}

