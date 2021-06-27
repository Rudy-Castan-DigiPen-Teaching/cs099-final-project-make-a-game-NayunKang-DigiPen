// Name       : Kang Nayun
// Assignment : Make a game
// Course     : CS099
// Spring 2021

class floor_3_scene {
constructor(x,y){
    this.x = x
    this.y = y
    this.image2;
    this.image24;
    this.image25;
    this.image26;
    this.image27;
    this.image28;
    this.image29;
    this.image30;
    this.image31;
    this.image32;
    this.image33;
    this.image34;
    this.image35;
    this.image36;
    this.bool1;
    this.bool2;
    this.bool3;
    this.bool4;
    this.bool5;
    this.bool6;
    this.bool7;
    this.bool8;
    this.bool9;
    this.mouse_click;
    this.correct;
}
setup(){
    this.image2 = loadImage("image/speech bubble.jpg");
    this.image24 = loadImage("image/art gallery.jpg");
    this.image25 = loadImage('image/floor_3_pic.jpg')
    this.image26 = loadImage('image/teacup.jpg');
    this.image27 = loadImage('image/ring.jpg');
    this.image28 = loadImage('image/slice of pie.jpg');
    this.image29 = loadImage('image/floor_3_game_2.jpg');
    this.image30 = loadImage('image/comb.jpg');
    this.image31 = loadImage('image/rabbit.jpg');
    this.image32 = loadImage('image/nail.jpg');
    this.image33 = loadImage('image/floor_3_game_3.jpg');
    this.image34 = loadImage('image/cupcake.jpg');
    this.image35 = loadImage('image/spoon.jpg');
    this.image36 = loadImage('image/pencil.jpg');
    this.mouse_click = loadSound('song/mouse click.wav')
    this.correct = loadSound('song/correct.wav')
    
}
floor_3_main (){
    image(this.image24,0,0,600,600)
    image(this.image2, 50, 50, 530, 200);
     fill('Black');
     triangle(430, 200, 430, 220, 450, 210);
    textSize(25);
    textStyle(BOLD);
        text("This is an art gallery.", 80, 105);
        text("You should find the things", 80, 140);
        text("that is shown. You can click", 80, 175);
        text("if you think it's right.", 80, 210);
}
floor_3_1(){
    image(this.image24,0,0,600,600)
    fill('Black')
  noStroke()
  textSize(50)
  textStyle(BOLD)
  text("STAGE",220,100)
  fill('White')
  rect(45,150,150,400)
  rect(225,150,150,400)
  rect(405,150,150,400)
  fill('BurlyWood')
  rect(45,150,150,20)
  rect(45,530,150,20)
  rect(45,150,20,400)
  rect(175,150,20,400)
  rect(45+180,150,150,20)
  rect(45+180,530,150,20)
  rect(45+180,150,20,400)
  rect(175+180,150,20,400)
  rect(45+360,150,150,20)
  rect(45+360,530,150,20)
  rect(45+360,150,20,400)
  rect(175+360,150,20,400)
  stroke('Peru')
  strokeWeight(3)
  line(46+180,150,64+180,170)
  line(46+180,550,64+180,530)
  line(194+180,150,176+180,170)
  line(194+180,550,176+180,530)
  line(46,150,64,170)
  line(46,550,64,530)
  line(194,150,176,170)
  line(194,550,176,530)
  line(46+360,150,64+360,170)
  line(46+360,550,64+360,530)
  line(194+360,150,176+360,170)
  line(194+360,550,176+360,530)
  fill('Black')
  noStroke()
  text('L',100,220)
  text('E',100,275)
  text('V',100,330)
  text('E',100,385)
  text('L',100,440)
  text('1',100,505)
  text('L',100+180,220)
  text('E',100+180,275)
  text('V',100+180,330)
  text('E',100+180,385)
  text('L',100+180,440)
  text('2',100+180,505)
  text('L',100+360,220)
  text('E',100+360,275)
  text('V',100+360,330)
  text('E',100+360,385)
  text('L',100+360,440)
  text('3',100+360,505)
}
floor_3_level1(){
    image(this.image24,0,0,600,600)
   image(this.image25,20,70,418,514)
   image(this.image26,450,70,130,130)
   image(this.image27,450,262,130,130)
   image(this.image28,450,454,130,130)
   push()
   fill('Black')
  noStroke()
  textSize(30)
  textStyle(BOLD)
  text("Find it and click it",160,50)
  pop()
if(this.bool1 == true) {
    push()
  noFill()
    stroke('Red')
    strokeWeight(5)
    circle(132,145,30)
    circle(512,135,100)
    pop()
}
  if(this.bool2 ==true) {
      push()
    noFill()
    stroke('Red')
    strokeWeight(5)
    circle(133,306,50)
    circle(512,322,100)
    pop()
  }
  if(this.bool3 == true) {
      push()
    noFill()
    stroke('Red')
    strokeWeight(5)
    circle(200,531,50)
    circle(512,510,100)
    pop()
  }
  if(this.bool1 == true && this.bool2 == true && this.bool3 == true ){
    current_screen = hint_7
  }
  push()
  noFill()
  stroke('Peru')
  strokeWeight(5)
  rect(20,70,418,514)
  rect(450,70,130,130)
  rect(450,262,130,130)
  rect(450,454,130,130)
  pop()
}
floor_3_level2(){
    image(this.image24,0,0,600,600)
    image(this.image29,20,70,418,514)
   image(this.image30,450,70,130,130)
   image(this.image31,450,262,130,130)
   image(this.image32,450,454,130,130)
   push()
   fill('Black')
  noStroke()
  textSize(30)
  textStyle(BOLD)
  text("Find it and click it",160,50)
  pop()
  if(this.bool4 == true) {
      push()
    noFill()
      stroke('Red')
      strokeWeight(5)
      circle(67,370,50)
      circle(512,135,100)
      pop()
  }
    if(this.bool5 ==true) {
        push()
      noFill()
      stroke('Red')
      strokeWeight(5)
      circle(272,121,30)
      circle(512,322,100)
      pop()
    }
    if(this.bool6 == true) {
        push()
      noFill()
      stroke('Red')
      strokeWeight(5)
      circle(115,397,50)
      circle(512,510,100)
      pop()
}
if(this.bool4 == true && this.bool5 == true && this.bool6 == true ){
    current_screen = hint_8
  }
  push()
  noFill()
  stroke('Peru')
  strokeWeight(5)
  rect(20,70,418,514)
  rect(450,70,130,130)
  rect(450,262,130,130)
  rect(450,454,130,130)
  pop()
}
floor_3_level3(){
    image(this.image24,0,0,600,600)
    image(this.image33,20,70,418,514)
   image(this.image34,450,70,130,130)
   image(this.image35,450,262,130,130)
   image(this.image36,450,454,130,130)
   push()
   fill('Black')
  noStroke()
  textSize(30)
  textStyle(BOLD)
  text("Find it and click it",160,50)
  pop()
  if(this.bool7 == true) {
      push()
      noFill()
      stroke('Red')
      strokeWeight(3)
      circle(84,463,50)
      circle(512,135,100)
      pop()
  }
    if(this.bool8 ==true) {
        push()
        noFill()
        stroke('Red')
        strokeWeight(3)
        circle(159,147,50)
        circle(512,322,100)
      pop()
    }
    if(this.bool9 == true) {
        push()
        noFill()
        stroke('Red')
        strokeWeight(3)
        circle(375,413,50)
        circle(512,510,100)
      pop()
}
if(this.bool7 == true && this.bool8 == true && this.bool9 == true ){
    current_screen = hint_9  
  }
  push()
  noFill()
  stroke('Peru')
  strokeWeight(5)
  rect(20,70,418,514)
  rect(450,70,130,130)
  rect(450,262,130,130)
  rect(450,454,130,130)
  pop()
}
floor_3_main_update(){
    let mouse_x_range_1 = mouseX >= 430 && mouseX <= 450;
    let mouse_y_range_1 = mouseY >= 200 && mouseY <= 220;
    if (mouse_x_range_1 && mouse_y_range_1) {
      current_screen = floor_3_1;
      this.mouse_click.play()
    }
}
floor_3_1_update(){
    rect(45,150,150,400)
  rect(225,150,150,400)
  rect(405,150,150,400)
   if(mouseX>45&&mouseX<195&&mouseY>150&&mouseY<550){
       current_screen = floor_3_level1
       this.mouse_click.play()
   }
   if(mouseX>45+180&&mouseX<195+180&&mouseY>150&&mouseY<550){
    current_screen = floor_3_level2
    this.mouse_click.play()
}
if(mouseX>45+360&&mouseX<195+360&&mouseY>150&&mouseY<550){
    current_screen = floor_3_level3
    this.mouse_click.play()
}
}
floor_3_level1_update(){
    if(mouseX > 106 && mouseX < 156 && mouseY > 130 && mouseY < 160){
        this.bool1 = true;
        this.correct.play()
      } 
      if (mouseX > 112 && mouseX < 162 && mouseY > 281 && mouseY < 331){
        this.bool2 = true;
        this.correct.play()
      }
      if(mouseX > 183 && mouseX < 228 && mouseY > 511 && mouseY < 541){
        this.bool3 = true;
        this.correct.play()
      }
      
}
floor_3_level2_update(){
    if(mouseX > 46 && mouseX < 87 && mouseY > 320 && mouseY < 430){
        this.bool4 = true;
        this.correct.play()
      } 
      if (mouseX > 252 && mouseX < 287 && mouseY > 103 && mouseY < 137){
        this.bool5 = true;
        this.correct.play()
      }
      if(mouseX > 99 && mouseX < 185 && mouseY > 362 && mouseY < 410){
        this.bool6 = true;
        this.correct.play()
      }
}
floor_3_level3_update(){
    if(mouseX > 63 && mouseX < 106 && mouseY > 438 && mouseY < 492){
        this.bool7 = true;
        this.correct.play()
      } 
      if (mouseX > 152 && mouseX < 161 && mouseY > 96 && mouseY < 198){
        this.bool8 = true;
        this.correct.play()
      }
      if(mouseX > 355 && mouseX < 390 && mouseY > 367 && mouseY < 442){
        this.bool9 = true;
        this.correct.play()
      }
}
}
