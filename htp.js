class Htp{
    constructor(){
    this.backButton = createImg("backArrow.png", "bb");
    this.title = createElement("h1");
        this.text = createElement("h2");
    }

    hide() {
    this.title.hide();
 this.backButton.hide();
        this.text.hide();
  }

  display(){

          this.backButton.position(width-1900,10);
          this.backButton.size(90,80);
          this.title.position(width-1200,30);
          this.text.position(width-1500,200);
          this.title.class("htptitle");
          this.text.class("htptext");

    var text = `How to Play`;
    this.title.html(text);
     var stext = `Click on the options with mouse which is given there . <br> <br>
     Rules :<br> <br>
     <center>Once you  given the answer a you can't change the answer</center><br> <br>
     <center>Once the time is over you can't give the answers</center><br> <br>
     <center>Once you have exited the game you have to play it from first</center><br> <br>
     `
    this.text.html(stext);

         this.backButton.mousePressed(() =>{
            this.title.hide();
            this.text.hide();
            this.backButton.hide();
             gameState="wait"
        })
  }
}