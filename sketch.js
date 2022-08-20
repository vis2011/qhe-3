var play;
var how;
var about;
//var body = document.querySelector(".body");

var htp,ply , backButton , atg , lvl1 , htpimg;
var backButton;

var gameState = "wait";

function preload(){
waitimg=loadImage("splash.gif");
htpimg=loadImage("htpbackground.png");
}


function setup(){
    createCanvas(windowWidth,windowHeight);

play=createImg("Play.png")
play.position(width-1080,820)
play.size(300,140)



how=createImg("how.png")
how.position(width-720,820)
how.size(300,140)


about=createImg("about.png")
about.position(width-380,820)
about.size(300,140)




}




function hide(){
    play.hide();
    how.hide();
    about.hide();
}



function draw(){

    if(gameState==="wait")
{
    background(waitimg)
    play.show();
    how.show();
    about.show();
}


if(gameState==="playstate")
{
    background("white");
    console.log("yess")
}

if(gameState==="how")
{
    background(htpimg);
    console.log("how");
                   htp = new Htp();
       htp.display();
}

if(gameState==="about")
{
    background("white");
    console.log("yess")
}


    play.mousePressed(() =>{
        play.hide();
        about.hide();
        how.hide();
        //ply = new Play();
        //ply.display();
                       gameState="playstate";
    })
        how.mousePressed(() =>{
        play.hide();
        about.hide();
        how.hide();

               gameState="how";
    })
        about.mousePressed(() =>{
        play.hide();
        about.hide();
        how.hide();
        //body.style.background="#A5E1FF";
      //  atg = new Atg();
      //  atg.display();
                     gameState="about";
    })


}