// Name       : Kang Nayun
// Assignment : Make a game
// Course     : CS099
// Spring 2021

class main_menu_scene {
constructor(x,y){
this.x = x
this.y = y
this.image42;
this.image43;
this.image44;
this.button;
}

setup(){
  this.image42 = loadImage('image/floor_100.jpg');
  this.image43 = loadImage('image/about game.jpg');
  this.image44 = loadImage('image/how to play.jpg');
  this.button = loadSound('song/button.wav')
}
update(){
    //how to play
    let mouse_x_range = mouseX >= 35 && mouseX <= 35 + 250;
    let mouse_y_range = mouseY >= 110 && mouseY <= 110 + 60;
    if (mouse_x_range && mouse_y_range) {
      current_screen = how_to_play;
      this.button.play()
    }
    //about game
    let mouse_x_range_1 = mouseX >= 315 && mouseX <= 315 + 250;
    let mouse_y_range_1 = mouseY >= 110 && mouseY <= 110 + 60;
    if (mouse_x_range_1 && mouse_y_range_1) {
      current_screen = about_game;
      this.button.play()
}
}
key(){
  if (keyCode == 13) {
    current_screen = game_screen;
    this.button.play()
  }
}
how_to_play(){
  image(this.image44,0,0,600,600)
   push()
    noFill()
    stroke('White')
    strokeWeight(5)
    rect(295,428,70,70)
    strokeWeight(3)
    textSize(50)
    text('🏠',300,480)
    textSize(20)
    text(': GO BACK',380,470)
    pop()
}
how_to_play_mouse(){
  if(mouseX > 295 && mouseX<295+70 && mouseY>428 && mouseY<428+70){
    current_screen = main_menu
     }
     this.button.play()
}
about_game(){
  image(this.image43,0,0,600,600)
  push()
    noFill()
    stroke('White')
    strokeWeight(5)
    rect(295,428,70,70)
    strokeWeight(3)
    textSize(50)
    text('🏠',300,480)
    textSize(20)
    text(': GO BACK',380,470)
    pop()
}
about_game_mouse(){
  if(mouseX > 295 && mouseX<295+70 && mouseY>428 && mouseY<428+70){
    current_screen = main_menu
     }
     this.button.play()
}
draw(){
  image(this.image42,0,0,600,600)
//Doors and windows
push();
fill("LightSkyBlue");
noStroke();
textSize(60);
textStyle(BOLD);
text("IN THE BUILDING", 50, 80);
pop();
push();
strokeWeight(10);
fill("LightSkyBlue");
rect(35, 200, 250, 350);
rect(315, 200, 250, 350);
noFill();
circle(250, 370, 30);
circle(350, 370, 30);
fill("GOLD");
rect(35, 110, 250, 60);
rect(315, 110, 250, 60);
pop();
push();
fill("Black");
noStroke();
textSize(36);
textStyle(BOLD);
text("How To Play", 53, 153);
text("About Game", 333, 153);
textSize(20);
fill('LightSkyBlue')
text("Press enter key to enter the building.", 235, 590);
pop();
push();
noFill();
strokeWeight(5);
stroke('gold')
arc(230, 530, 70, 100, PI / 2, PI + PI / 2);
line(230, 480, 220, 460);
line(230, 480, 220, 500);
rect(230, 569, 366, 28);
pop();
}
}
