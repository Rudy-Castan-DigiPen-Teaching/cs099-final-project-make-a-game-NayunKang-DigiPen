// Name       : Kang Nayun
// Assignment : Make a game
// Course     : CS099
// Spring 2021

class floor_2_scene  {
constructor(x,y){
    this.x = x
    this.y = y
    this.image2;
    this.image8;
    this.image9;
    this.image10;
    this.image11;
    this.image12;
    this.image13;
    this.image14;
    this.image15;
    this.image16;
    this.image17;
    this.image18;
    this.image19;
    this.image20;
    this.image21;
    this.image22;
    this.image23;
    this.mouse_click;
    this.key;
    this.correct;
    this.wrong;
}
setup(){
    this.image2 = loadImage("image/speech bubble.jpg");
    this.image8 = loadImage("image/starbucks.jpg");
    this.image9 = loadImage("image/drinks_1.png");
    this.image10 = loadImage("image/drinks_2.png");
    this.image11 = loadImage("image/drinks_3.png");
    this.image12 = loadImage("image/hot water.jpg");
    this.image13 = loadImage("image/chocolate powder.jpg");
    this.image14 = loadImage("image/syrup.jpg");
    this.image15 = loadImage("image/milk.jpg");
    this.image16 = loadImage("image/sugar.jpg");
    this.image17 = loadImage("image/salt.jpg");
    this.image18 = loadImage("image/coffee powder.jpg");
    this.image19 = loadImage("image/ice.jpg");
    this.image20 = loadImage("image/vanilla syrup.jpg");
    this.image21 = loadImage("image/steamed milk.jpg");
    this.image22 = loadImage("image/espresso.jpg");
    this.image23 = loadImage("image/chocolate syrup.jpg");
    this.mouse_click = loadSound("song/mouse click.wav")
    this.key = loadSound('song/key.wav')
    this.wrong = loadSound('song/wrong.mp3')
    this.correct = loadSound('song/correct.wav')
}
draw_1 (){
        image(this.image8,0,0,width,height)
        fill('LightGreen')
        noStroke()
        rect(465,550,100,50)
        fill('Green')
        textSize(30)
        text("Starpucks",450,585)
        image(this.image2, 50, 50, 530, 200);
        fill('Black');
        triangle(430, 200, 430, 220, 450, 210);
        textSize(25);
        textStyle(BOLD);
        fill("Green")
        text("This is the starpucks, cafe.", 80, 105);
        text("You could choose one among", 80, 140);
        text("three drinks. Of course you", 80, 175);
        text(" have to do all !", 80, 210);
}
draw_2(){
    image(this.image8,0,0,width,height)
        fill('LightGreen')
        noStroke()
        rect(465,550,100,50)
        fill('Green')
        textSize(30)
        text("Starpucks",450,585)
        fill('White')
        stroke('Green')
        strokeWeight(5)
        rect(50,50,220,220)
        rect(330,50,220,220)
        rect(50,330,220,220)
        rect(330,330,220,220)
        textSize(20)
        text("If you click it, you", 70,90)
        text("will make a drink.", 70,120)
        text("You have to guess", 70,150)
        text("the ingredients that", 70,180)
        text("should be in the", 70,210)
        text("drink. Guess it !", 70,240)
        image(this.image9,380,50,140,210)
        image(this.image10, 380,330,140,210)
        image(this.image11,100,330,140,210)
        textSize(40)
        text("1",340,90)
        text("2",60,370)
        text("3",340,370)
}
draw_3(){
    image(this.image8,0,0,width,height)
    fill('LightGreen')
    noStroke()
    rect(465,550,100,50)
    fill('Green')
    textSize(30)
    text("Starpucks",450,585)
    image(this.image9,50,50,80,120)
    fill('White')
    stroke('Green')
    rect(150,70, 440,100)
    fill('Black')
    noStroke()
    textSize(25)
    text("You have to guess the ingredients",165,100)
   text("What is inside the drinks? Press the",165,130)
    text("key if you think right or not.",165,160)
    stroke('Black')
    line(90,180,90,240)
    line(90,240,150,240)
    line(150,240,140,220)
    line(150,240,140,260)
    textSize(40)
    noStroke()
    text("Hot chocolate",180, 250)
    image(this.image12,70,290,200,200)
    text("hot water",80,530)
    push()
    stroke('Black')
    strokeWeight(3)
    fill('White')
    square(400,300,80)
    square(400,390,80)
    square(310,390,80)
    square(490,390,80)
    textSize(50)
    text("⭕",405,360)
    text("❌",405,450)
    textSize(30)
    text("Press the key",355,510)
    pop()
}
draw_3_1 (){
    image(this.image8,0,0,width,height)
    fill('LightGreen')
    noStroke()
    rect(465,550,100,50)
    fill('Green')
    textSize(30)
    text("Starpucks",450,585)
    image(this.image9,50,50,80,120)
    fill('White')
    stroke('Green')
    rect(150,70, 440,100)
    fill('Black')
    noStroke()
    textSize(25)
    text("You have to guess the ingredients",165,100)
   text("What is inside the drinks? Press the",165,130)
    text("key if you think right or not.",165,160)
    stroke('Black')
    line(90,180,90,240)
    line(90,240,150,240)
    line(150,240,140,220)
    line(150,240,140,260)
    textSize(40)
    noStroke()
    text("Hot chocolate",180, 250)
    image(this.image13,70,290,200,200)
    text("chocolate",80,530)
    text("powder",80,570)
    push()
    stroke('Black')
    strokeWeight(3)
    fill('White')
    square(400,300,80)
    square(400,390,80)
    square(310,390,80)
    square(490,390,80)
    textSize(50)
    text("⭕",405,360)
    text("❌",405,450)
    textSize(30)
    text("Press the key",355,510)
    pop()
}
draw_3_2(){
    image(this.image8,0,0,width,height)
    fill('LightGreen')
    noStroke()
    rect(465,550,100,50)
    fill('Green')
    textSize(30)
    text("Starpucks",450,585)
    image(this.image9,50,50,80,120)
    fill('White')
    stroke('Green')
    rect(150,70, 440,100)
    fill('Black')
    noStroke()
    textSize(25)
    text("You have to guess the ingredients",165,100)
   text("What is inside the drinks? Press the",165,130)
    text("key if you think right or not.",165,160)
    stroke('Black')
    line(90,180,90,240)
    line(90,240,150,240)
    line(150,240,140,220)
    line(150,240,140,260)
    textSize(40)
    noStroke()
    text("Hot chocolate",180, 250)
    image(this.image14,70,290,200,200)
    text("syrup",80,530)
    push()
    stroke('Black')
    strokeWeight(3)
    fill('White')
    square(400,300,80)
    square(400,390,80)
    square(310,390,80)
    square(490,390,80)
    textSize(50)
    text("⭕",405,360)
    text("❌",405,450)
    textSize(30)
    text("Press the key",355,510)
    pop()   
}
draw_3_3(){
    image(this.image8,0,0,width,height)
    fill('LightGreen')
    noStroke()
    rect(465,550,100,50)
    fill('Green')
    textSize(30)
    text("Starpucks",450,585)
    image(this.image9,50,50,80,120)
    fill('White')
    stroke('Green')
    rect(150,70, 440,100)
    fill('Black')
    noStroke()
    textSize(25)
    text("You have to guess the ingredients",165,100)
   text("What is inside the drinks? Press the",165,130)
    text("key if you think right or not.",165,160)
    stroke('Black')
    line(90,180,90,240)
    line(90,240,150,240)
    line(150,240,140,220)
    line(150,240,140,260)
    textSize(40)
    noStroke()
    text("Hot chocolate",180, 250)
    image(this.image15,70,290,200,200)
    text("milk",80,530)
    push()
    stroke('Black')
    strokeWeight(3)
    fill('White')
    square(400,300,80)
    square(400,390,80)
    square(310,390,80)
    square(490,390,80)
    textSize(50)
    text("⭕",405,360)
    text("❌",405,450)
    textSize(30)
    text("Press the key",355,510)
    pop()   
    
}
draw_3_4(){
    image(this.image8,0,0,width,height)
    fill('LightGreen')
    noStroke()
    rect(465,550,100,50)
    fill('Green')
    textSize(30)
    text("Starpucks",450,585)
    image(this.image9,50,50,80,120)
    fill('White')
    stroke('Green')
    rect(150,70, 440,100)
    fill('Black')
    noStroke()
    textSize(25)
    text("You have to guess the ingredients",165,100)
   text("What is inside the drinks? Press the",165,130)
    text("key if you think right or not.",165,160)
    stroke('Black')
    line(90,180,90,240)
    line(90,240,150,240)
    line(150,240,140,220)
    line(150,240,140,260)
    textSize(40)
    noStroke()
    text("Hot chocolate",180, 250)
    image(this.image16,70,290,200,200)
    text("sugar",80,530)
    push()
    stroke('Black')
    strokeWeight(3)
    fill('White')
    square(400,300,80)
    square(400,390,80)
    square(310,390,80)
    square(490,390,80)
    textSize(50)
    text("⭕",405,360)
    text("❌",405,450)
    textSize(30)
    text("Press the key",355,510)
    pop()
}
draw_3_5(){
    image(this.image8,0,0,width,height)
    fill('LightGreen')
    noStroke()
    rect(465,550,100,50)
    fill('Green')
    textSize(30)
    text("Starpucks",450,585)
    image(this.image9,50,50,80,120)
    fill('White')
    stroke('Green')
    rect(150,70, 440,100)
    fill('Black')
    noStroke()
    textSize(25)
    text("You have to guess the ingredients",165,100)
   text("What is inside the drinks? Press the",165,130)
    text("key if you think right or not.",165,160)
    stroke('Black')
    line(90,180,90,240)
    line(90,240,150,240)
    line(150,240,140,220)
    line(150,240,140,260)
    textSize(40)
    noStroke()
    text("Hot chocolate",180, 250)
    image(this.image17,70,290,200,200)
    text("salt",80,530)
    push()
    stroke('Black')
    strokeWeight(3)
    fill('White')
    square(400,300,80)
    square(400,390,80)
    square(310,390,80)
    square(490,390,80)
    textSize(50)
    text("⭕",405,360)
    text("❌",405,450)
    textSize(30)
    text("Press the key",355,510)
    pop()
}
draw_4 (){
    image(this.image8,0,0,width,height)
    fill('LightGreen')
    noStroke()
    rect(465,550,100,50)
    fill('Green')
    textSize(30)
    text("Starpucks",450,585)
    image(this.image11,50,50,80,120)
    fill('White')
    stroke('Green')
    rect(150,70, 440,100)
    fill('Black')
    noStroke()
    textSize(25)
    text("You have to guess the ingredients",165,100)
   text("What is inside the drinks? Press the",165,130)
    text("key if you think right or not.",165,160)
    stroke('Black')
    line(90,180,90,240)
    line(90,240,150,240)
    line(150,240,140,220)
    line(150,240,140,260)
    textSize(40)
    noStroke()
    text("ice vanilla latte",180, 250)
    image(this.image12,70,290,200,200)
    text("hot water",80,530)
    push()
    stroke('Black')
    strokeWeight(3)
    fill('White')
    square(400,300,80)
    square(400,390,80)
    square(310,390,80)
    square(490,390,80)
    textSize(50)
    text("⭕",405,360)
    text("❌",405,450)
    textSize(30)
    text("Press the key",355,510)
    pop()
}
draw_4_1(){
    image(this.image8,0,0,width,height)
    fill('LightGreen')
    noStroke()
    rect(465,550,100,50)
    fill('Green')
    textSize(30)
    text("Starpucks",450,585)
    image(this.image11,50,50,80,120)
    fill('White')
    stroke('Green')
    rect(150,70, 440,100)
    fill('Black')
    noStroke()
    textSize(25)
    text("You have to guess the ingredients",165,100)
   text("What is inside the drinks? Press the",165,130)
    text("key if you think right or not.",165,160)
    stroke('Black')
    line(90,180,90,240)
    line(90,240,150,240)
    line(150,240,140,220)
    line(150,240,140,260)
    textSize(40)
    noStroke()
    text("ice vanilla latte",180, 250)
    image(this.image18,70,290,200,200)
    text("coffee powder",80,530)
    push()
    stroke('Black')
    strokeWeight(3)
    fill('White')
    square(400,300,80)
    square(400,390,80)
    square(310,390,80)
    square(490,390,80)
    textSize(50)
    text("⭕",405,360)
    text("❌",405,450)
    textSize(30)
    text("Press the key",355,510)
    pop()
}
draw_4_2(){
    image(this.image8,0,0,width,height)
    fill('LightGreen')
    noStroke()
    rect(465,550,100,50)
    fill('Green')
    textSize(30)
    text("Starpucks",450,585)
    image(this.image11,50,50,80,120)
    fill('White')
    stroke('Green')
    rect(150,70, 440,100)
    fill('Black')
    noStroke()
    textSize(25)
    text("You have to guess the ingredients",165,100)
   text("What is inside the drinks? Press the",165,130)
    text("key if you think right or not.",165,160)
    stroke('Black')
    line(90,180,90,240)
    line(90,240,150,240)
    line(150,240,140,220)
    line(150,240,140,260)
    textSize(40)
    noStroke()
    text("ice vanilla latte",180, 250)
    image(this.image20,70,290,200,200)
    text("vanilla syrup",80,530)
    push()
    stroke('Black')
    strokeWeight(3)
    fill('White')
    square(400,300,80)
    square(400,390,80)
    square(310,390,80)
    square(490,390,80)
    textSize(50)
    text("⭕",405,360)
    text("❌",405,450)
    textSize(30)
    text("Press the key",355,510)
    pop()
}
draw_4_3(){
    image(this.image8,0,0,width,height)
    fill('LightGreen')
    noStroke()
    rect(465,550,100,50)
    fill('Green')
    textSize(30)
    text("Starpucks",450,585)
    image(this.image11,50,50,80,120)
    fill('White')
    stroke('Green')
    rect(150,70, 440,100)
    fill('Black')
    noStroke()
    textSize(25)
    text("You have to guess the ingredients",165,100)
   text("What is inside the drinks? Press the",165,130)
    text("key if you think right or not.",165,160)
    stroke('Black')
    line(90,180,90,240)
    line(90,240,150,240)
    line(150,240,140,220)
    line(150,240,140,260)
    textSize(40)
    noStroke()
    text("ice vanilla latte",180, 250)
    image(this.image15,70,290,200,200)
    text("milk",80,530)
    push()
    stroke('Black')
    strokeWeight(3)
    fill('White')
    square(400,300,80)
    square(400,390,80)
    square(310,390,80)
    square(490,390,80)
    textSize(50)
    text("⭕",405,360)
    text("❌",405,450)
    textSize(30)
    text("Press the key",355,510)
    pop()
}
draw_4_4(){
    image(this.image8,0,0,width,height)
    fill('LightGreen')
    noStroke()
    rect(465,550,100,50)
    fill('Green')
    textSize(30)
    text("Starpucks",450,585)
    image(this.image11,50,50,80,120)
    fill('White')
    stroke('Green')
    rect(150,70, 440,100)
    fill('Black')
    noStroke()
    textSize(25)
    text("You have to guess the ingredients",165,100)
   text("What is inside the drinks? Press the",165,130)
    text("key if you think right or not.",165,160)
    stroke('Black')
    line(90,180,90,240)
    line(90,240,150,240)
    line(150,240,140,220)
    line(150,240,140,260)
    textSize(40)
    noStroke()
    text("ice vanilla latte",180, 250)
    image(this.image16,70,290,200,200)
    text("sugar",80,530)
    push()
    stroke('Black')
    strokeWeight(3)
    fill('White')
    square(400,300,80)
    square(400,390,80)
    square(310,390,80)
    square(490,390,80)
    textSize(50)
    text("⭕",405,360)
    text("❌",405,450)
    textSize(30)
    text("Press the key",355,510)
    pop()
}
draw_4_5(){
    image(this.image8,0,0,width,height)
    fill('LightGreen')
    noStroke()
    rect(465,550,100,50)
    fill('Green')
    textSize(30)
    text("Starpucks",450,585)
    image(this.image11,50,50,80,120)
    fill('White')
    stroke('Green')
    rect(150,70, 440,100)
    fill('Black')
    noStroke()
    textSize(25)
    text("You have to guess the ingredients",165,100)
   text("What is inside the drinks? Press the",165,130)
    text("key if you think right or not.",165,160)
    stroke('Black')
    line(90,180,90,240)
    line(90,240,150,240)
    line(150,240,140,220)
    line(150,240,140,260)
    textSize(40)
    noStroke()
    text("ice vanilla latte",180, 250)
    image(this.image19,70,290,200,200)
    text("ice",80,530)
    push()
    stroke('Black')
    strokeWeight(3)
    fill('White')
    square(400,300,80)
    square(400,390,80)
    square(310,390,80)
    square(490,390,80)
    textSize(50)
    text("⭕",405,360)
    text("❌",405,450)
    textSize(30)
    text("Press the key",355,510)
    pop()
}
draw_5 (){
    image(this.image8,0,0,width,height)
    fill('LightGreen')
    noStroke()
    rect(465,550,100,50)
    fill('Green')
    textSize(30)
    text("Starpucks",450,585)
    image(this.image10,50,50,80,120)
    fill('White')
    stroke('Green')
    rect(150,70, 440,100)
    fill('Black')
    noStroke()
    textSize(25)
    text("You have to guess the ingredients",165,100)
   text("What is inside the drinks? Press the",165,130)
    text("key if you think right or not.",165,160)
    stroke('Black')
    line(90,180,90,240)
    line(90,240,150,240)
    line(150,240,140,220)
    line(150,240,140,260)
    textSize(40)
    noStroke()
    text("cappuccino",180, 250)
    image(this.image23,70,290,200,200)
    text("chocolate syrup",80,530)
    push()
    stroke('Black')
    strokeWeight(3)
    fill('White')
    square(400,300,80)
    square(400,390,80)
    square(310,390,80)
    square(490,390,80)
    textSize(50)
    text("⭕",405,360)
    text("❌",405,450)
    textSize(30)
    text("Press the key",355,510)
    pop()
}
draw_5_1(){
    image(this.image8,0,0,width,height)
    fill('LightGreen')
    noStroke()
    rect(465,550,100,50)
    fill('Green')
    textSize(30)
    text("Starpucks",450,585)
    image(this.image10,50,50,80,120)
    fill('White')
    stroke('Green')
    rect(150,70, 440,100)
    fill('Black')
    noStroke()
    textSize(25)
    text("You have to guess the ingredients",165,100)
   text("What is inside the drinks? Press the",165,130)
    text("key if you think right or not.",165,160)
    stroke('Black')
    line(90,180,90,240)
    line(90,240,150,240)
    line(150,240,140,220)
    line(150,240,140,260)
    textSize(40)
    noStroke()
    text("cappuccino",180, 250)
    image(this.image22,70,290,200,200)
    text("espresso",80,530)
    push()
    stroke('Black')
    strokeWeight(3)
    fill('White')
    square(400,300,80)
    square(400,390,80)
    square(310,390,80)
    square(490,390,80)
    textSize(50)
    text("⭕",405,360)
    text("❌",405,450)
    textSize(30)
    text("Press the key",355,510)
    pop()
}
draw_5_2(){
    image(this.image8,0,0,width,height)
    fill('LightGreen')
    noStroke()
    rect(465,550,100,50)
    fill('Green')
    textSize(30)
    text("Starpucks",450,585)
    image(this.image10,50,50,80,120)
    fill('White')
    stroke('Green')
    rect(150,70, 440,100)
    fill('Black')
    noStroke()
    textSize(25)
    text("You have to guess the ingredients",165,100)
   text("What is inside the drinks? Press the",165,130)
    text("key if you think right or not.",165,160)
    stroke('Black')
    line(90,180,90,240)
    line(90,240,150,240)
    line(150,240,140,220)
    line(150,240,140,260)
    textSize(40)
    noStroke()
    text("cappuccino",180, 250)
    image(this.image21,70,290,200,200)
    text("steamed milk",80,530)
    push()
    stroke('Black')
    strokeWeight(3)
    fill('White')
    square(400,300,80)
    square(400,390,80)
    square(310,390,80)
    square(490,390,80)
    textSize(50)
    text("⭕",405,360)
    text("❌",405,450)
    textSize(30)
    text("Press the key",355,510)
    pop()
}
draw_5_3(){
    image(this.image8,0,0,width,height)
    fill('LightGreen')
    noStroke()
    rect(465,550,100,50)
    fill('Green')
    textSize(30)
    text("Starpucks",450,585)
    image(this.image10,50,50,80,120)
    fill('White')
    stroke('Green')
    rect(150,70, 440,100)
    fill('Black')
    noStroke()
    textSize(25)
    text("You have to guess the ingredients",165,100)
   text("What is inside the drinks? Press the",165,130)
    text("key if you think right or not.",165,160)
    stroke('Black')
    line(90,180,90,240)
    line(90,240,150,240)
    line(150,240,140,220)
    line(150,240,140,260)
    textSize(40)
    noStroke()
    text("cappuccino",180, 250)
    image(this.image17,70,290,200,200)
    text("salt",80,530)
    push()
    stroke('Black')
    strokeWeight(3)
    fill('White')
    square(400,300,80)
    square(400,390,80)
    square(310,390,80)
    square(490,390,80)
    textSize(50)
    text("⭕",405,360)
    text("❌",405,450)
    textSize(30)
    text("Press the key",355,510)
    pop()
}
draw_5_4(){
    image(this.image8,0,0,width,height)
    fill('LightGreen')
    noStroke()
    rect(465,550,100,50)
    fill('Green')
    textSize(30)
    text("Starpucks",450,585)
    image(this.image10,50,50,80,120)
    fill('White')
    stroke('Green')
    rect(150,70, 440,100)
    fill('Black')
    noStroke()
    textSize(25)
    text("You have to guess the ingredients",165,100)
   text("What is inside the drinks? Press the",165,130)
    text("key if you think right or not.",165,160)
    stroke('Black')
    line(90,180,90,240)
    line(90,240,150,240)
    line(150,240,140,220)
    line(150,240,140,260)
    textSize(40)
    noStroke()
    text("cappuccino",180, 250)
    image(this.image16,70,290,200,200)
    text("sugar",80,530)
    push()
    stroke('Black')
    strokeWeight(3)
    fill('White')
    square(400,300,80)
    square(400,390,80)
    square(310,390,80)
    square(490,390,80)
    textSize(50)
    text("⭕",405,360)
    text("❌",405,450)
    textSize(30)
    text("Press the key",355,510)
    pop()
}
draw_5_5(){
    image(this.image8,0,0,width,height)
    fill('LightGreen')
    noStroke()
    rect(465,550,100,50)
    fill('Green')
    textSize(30)
    text("Starpucks",450,585)
    image(this.image10,50,50,80,120)
    fill('White')
    stroke('Green')
    rect(150,70, 440,100)
    fill('Black')
    noStroke()
    textSize(25)
    text("You have to guess the ingredients",165,100)
   text("What is inside the drinks? Press the",165,130)
    text("key if you think right or not.",165,160)
    stroke('Black')
    line(90,180,90,240)
    line(90,240,150,240)
    line(150,240,140,220)
    line(150,240,140,260)
    textSize(40)
    noStroke()
    text("cappuccino",180, 250)
    image(this.image19,70,290,200,200)
    text("ice",80,530)
    push()
    stroke('Black')
    strokeWeight(3)
    fill('White')
    square(400,300,80)
    square(400,390,80)
    square(310,390,80)
    square(490,390,80)
    textSize(50)
    text("⭕",405,360)
    text("❌",405,450)
    textSize(30)
    text("Press the key",355,510)
    pop()
}
update_1(){
    let mouse_x_range_1 = mouseX >= 430 && mouseX <= 450;
    let mouse_y_range_1 = mouseY >= 200 && mouseY <= 220;
    if (mouse_x_range_1 && mouse_y_range_1) {
      current_screen = floor_2_1;
      this.mouse_click.play()
    }
}
update_2(){
     if(mouseX > 330 && mouseX<330+220&&mouseY>50 &&mouseY<50+220){
        current_screen = floor_2_1_1;
        this.mouse_click.play()
      }
      if(mouseX > 50 && mouseX<50+220&&mouseY>330 &&mouseY<330+220){
        current_screen = floor_2_1_2;
        this.mouse_click.play()
      }
      if(mouseX > 330 && mouseX<330+220&&mouseY>330 &&mouseY<330+220){
        current_screen = floor_2_1_3;
        this.mouse_click.play()
      }
}
update_3_1(){
if(keyCode ==38 ){
    current_screen = floor_2_1_1_1
    this.correct.play()
}
}
update_3_2(){
    if(keyCode == 38){
            current_screen = floor_2_1_1_2
            this.correct.play()
}
if(keyCode==40){
    current_screen = floor_2_1_1
    this.wrong.play()
}
}
update_3_3(){
    if(keyCode == 38){
        current_screen = floor_2_1_1
        this.wrong.play()
}
if(keyCode==40){
current_screen = floor_2_1_1_3
this.correct.play()
}
}
update_3_4(){
    if(keyCode == 38){
        current_screen = floor_2_1_1_4
        this.correct.play()
}
if(keyCode==40){
current_screen = floor_2_1_1
this.wrong.play()
}
}
update_3_5(){
    if(keyCode == 38){
        current_screen = floor_2_1_1
        this.wrong.play()
}
if(keyCode==40){
current_screen = floor_2_1_1_5
this.correct.play()
}
}
update_3_6(){
    if(keyCode == 38){
        current_screen = floor_2_1_1
        this.wrong.play()
}
if(keyCode==40){
current_screen = hint_4
this.correct.play()
}
}
update_4_1(){
    if(keyCode ==38 ){
        current_screen = floor_2_1_2_1
        this.correct.play()
    }
    }
    update_4_2(){
        if(keyCode == 38){
                current_screen = floor_2_1_2_2
                this.correct.play()
    }
    if(keyCode==40){
        current_screen = floor_2_1_2
        this.wrong.play()
    }
    }
    update_4_3(){
        if(keyCode == 38){
            current_screen = floor_2_1_2_3
            this.correct.play()
    }
    if(keyCode==40){
    current_screen = floor_2_1_2
    this.wrong.play()
    }
    }
    update_4_4(){
        if(keyCode == 38){
            current_screen = floor_2_1_2_4
            this.correct.play()
    }
    if(keyCode==40){
    current_screen = floor_2_1_2
    this.wrong.play()
    }
    }
    update_4_5(){
        if(keyCode == 38){
            current_screen = floor_2_1_2
            this.wrong.play()
    }
    if(keyCode==40){
    current_screen = floor_2_1_2_5
    this.correct.play()
    }
    }
    update_4_6(){
        if(keyCode == 38){
            current_screen = hint_5
            this.correct.play()
    }
    if(keyCode==40){
    current_screen = floor_2_1_2
    this.wrong.play()
    }
    }
    update_5_1(){
        if(keyCode ==38 ){
            current_screen = floor_2_1_3_1
            this.correct.play()
        }
        }
        update_5_2(){
            if(keyCode == 38){
                    current_screen = floor_2_1_3_2
                    this.correct.play()
        }
        if(keyCode==40){
            current_screen = floor_2_1_3
            this.wrong.play()
        }
        }
        update_5_3(){
            if(keyCode == 38){
                current_screen = floor_2_1_3_3
                this.correct.play()
        }
        if(keyCode==40){
        current_screen = floor_2_1_3
        this.wrong.play()
        }
        }
        update_5_4(){
            if(keyCode == 38){
                current_screen = floor_2_1_3
                this.wrong.play()
        }
        if(keyCode==40){
        current_screen = floor_2_1_3_4
        this.correct.play()
        }
        }
        update_5_5(){
            if(keyCode == 38){
                current_screen = floor_2_1_3
                this.wrong.play()
        }
        if(keyCode==40){
        current_screen = floor_2_1_3_5
        this.correct.play()
        }
        }
        update_5_6(){
            if(keyCode == 38){
                current_screen = floor_2_1_3
                this.wrong.play()
        }
        if(keyCode==40){
        current_screen = hint_6
        this.correct.play()
        }
        }
}
