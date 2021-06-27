// Name       : Kang Nayun
// Assignment : Make a game
// Course     : CS099
// Spring 2021

class hint_scene {
    constructor(x,y){
        this.x = x
        this.y = y
        this.image42
        this.mouse_click
    }
    setup(){
      this.image42 = loadImage('image/floor_100.jpg');
      this.mouse_click = loadSound('song/mouse click.wav')
    }
    draw_1() {
        background('LightBlue');
        image(this.image42,0,0,600,600)
        push()
  stroke('White')
  strokeWeight(5)
  noFill()
  line(30,50,215,50)
  line(385,50,570,50)
  line(30,50,30,200)
  line(570,50,570,200)
  line(30,200,570,200)
  rect(30,230,80,80)
  rect(30,360,80,80)
  rect(30,490,80,80)
  push()
  textSize(40)
  fill('White')
  noStroke()
  textStyle(BOLD)
  text("Hint #1",230,60)
  textSize(30)
  textStyle(BOLD)
  text("'This' is kind of a country.",130,130)
  text("GO BACK TO FLOOR 1", 140,280)
  text("GO TO SECOND STAGE",140,410)
  text("GO BACK TO ELEVATOR",140,540)
  pop()
  stroke('White')
  strokeWeight(3)
  textSize(50)
  text('🏠',40,285)
  text('🏠',40,415)
  text('🏠',40,545)
  pop()
    }
    draw_2(){
        background('LightBlue');
        image(this.image42,0,0,600,600)
        push()
  stroke('White')
  strokeWeight(5)
  noFill()
  line(30,50,215,50)
  line(385,50,570,50)
  line(30,50,30,200)
  line(570,50,570,200)
  line(30,200,570,200)
  rect(30,230,80,80)
  rect(30,360,80,80)
  rect(30,490,80,80)
  push()
  textSize(40)
  fill('White')
  noStroke()
  textStyle(BOLD)
  text("Hint #2",230,60)
  textSize(30)
  textStyle(BOLD)
  text("'This' is located near the",120,110)
  text(" Atlantic Ocean!",170,160)
  text("GO BACK TO FLOOR 1", 140,280)
  text("GO TO THIRD STAGE",140,410)
  text("GO BACK TO ELEVATOR",140,540)
  pop()
  stroke('White')
  strokeWeight(3)
  textSize(50)
  text('🏠',40,285)
  text('🏠',40,415)
  text('🏠',40,545)
  pop()
    }
    draw_3(){
        background('LightBlue');
        image(this.image42,0,0,600,600)
        push()
  stroke('White')
  strokeWeight(5)
  noFill()
  line(30,50,215,50)
  line(385,50,570,50)
  line(30,50,30,200)
  line(570,50,570,200)
  line(30,200,570,200)
  rect(30,230,80,80)
  rect(30,360,80,80)
  push()
  textSize(40)
  fill('White')
  noStroke()
  textStyle(BOLD)
  text("Hint #1",230,60)
  textSize(30)
  textStyle(BOLD)
  text("There is a blue color on its flag.",80,130)
  text("GO BACK TO FLOOR 1", 140,280)
  text("GO BACK TO ELEVATOR",140,410)
  pop()
  stroke('White')
  strokeWeight(3)
  textSize(50)
  text('🏠',40,285)
  text('🏠',40,415)
  pop()
    }
    draw_4(){
        background('LightBlue');
        image(this.image42,0,0,600,600)
        push()
  stroke('White')
  strokeWeight(5)
  noFill()
  line(30,50,215,50)
  line(385,50,570,50)
  line(30,50,30,200)
  line(570,50,570,200)
  line(30,200,570,200)
  rect(30,230,80,80)
  rect(30,360,80,80)
  rect(30,490,80,80)
  push()
  textSize(40)
  fill('White')
  noStroke()
  textStyle(BOLD)
  text("Hint #4",230,60)
  textSize(30)
  textStyle(BOLD)
  text("There is an famous museum.",100,130)
  //text("      according to the tea!",100,160)
  text("GO BACK TO FLOOR 2", 140,280)
  text("GO TO SECOND STAGE",140,410)
  text("GO BACK TO ELEVATOR",140,540)
  pop()
  stroke('White')
  strokeWeight(3)
  textSize(50)
  text('🏠',40,285)
  text('🏠',40,415)
  text('🏠',40,545)
  pop()
    }
    draw_5(){
        background('LightBlue');
        image(this.image42,0,0,600,600)
        push()
  stroke('White')
  strokeWeight(5)
  noFill()
  line(30,50,215,50)
  line(385,50,570,50)
  line(30,50,30,200)
  line(570,50,570,200)
  line(30,200,570,200)
  rect(30,230,80,80)
  rect(30,360,80,80)
  rect(30,490,80,80)
  push()
  textSize(40)
  fill('White')
  noStroke()
  textStyle(BOLD)
  text("Hint #5",230,60)
  textSize(30)
  textStyle(BOLD)
  text("'Escargot' is very famous.",100,130)
  //text(" Grey tea are used a lot.",100,160)
  text("GO BACK TO FLOOR 2", 140,280)
  text("GO TO THIRD STAGE",140,410)
  text("GO BACK TO ELEVATOR",140,540)
  pop()
  stroke('White')
  strokeWeight(3)
  textSize(50)
  text('🏠',40,285)
  text('🏠',40,415)
  text('🏠',40,545)
  pop()
    }
    draw_6(){
        background('LightBlue');
        image(this.image42,0,0,600,600)
        push()
  stroke('White')
  strokeWeight(5)
  noFill()
  line(30,50,215,50)
  line(385,50,570,50)
  line(30,50,30,200)
  line(570,50,570,200)
  line(30,200,570,200)
  rect(30,230,80,80)
  rect(30,360,80,80)
  push()
  textSize(40)
  fill('White')
  noStroke()
  textStyle(BOLD)
  text("Hint #6",230,60)
  textSize(30)
  textStyle(BOLD)
  text("They use EURO.",160,130)
  text("GO BACK TO FLOOR 2", 140,280)
  text("GO BACK TO ELEVATOR",140,410)
  pop()
  stroke('White')
  strokeWeight(3)
  textSize(50)
  text('🏠',40,285)
  text('🏠',40,415)
  pop()
    }
    draw_7(){
      background('LightBlue');
      image(this.image42,0,0,600,600)
        push()
  stroke('White')
  strokeWeight(5)
  noFill()
  line(30,50,215,50)
  line(385,50,570,50)
  line(30,50,30,200)
  line(570,50,570,200)
  line(30,200,570,200)
  rect(30,230,80,80)
  rect(30,360,80,80)
  rect(30,490,80,80)
  push()
  textSize(40)
  fill('White')
  noStroke()
  textStyle(BOLD)
  text("Hint #5",230,60)
  textSize(30)
  textStyle(BOLD)
  text("The rainfall is high throughout",80,110)
  text(" the year hear.",180,160)
  text("GO BACK TO FLOOR 3", 140,280)
  text("GO TO SECOND STAGE",140,410)
  text("GO BACK TO ELEVATOR",140,540)
  pop()
  stroke('White')
  strokeWeight(3)
  textSize(50)
  text('🏠',40,285)
  text('🏠',40,415)
  text('🏠',40,545)
  pop()
    }
    draw_8(){
      background('LightBlue');
      image(this.image42,0,0,600,600)
        push()
  stroke('White')
  strokeWeight(5)
  noFill()
  line(30,50,215,50)
  line(385,50,570,50)
  line(30,50,30,200)
  line(570,50,570,200)
  line(30,200,570,200)
  rect(30,230,80,80)
  rect(30,360,80,80)
  rect(30,490,80,80)
  push()
  textSize(40)
  fill('White')
  noStroke()
  textStyle(BOLD)
  text("Hint #5",230,60)
  textSize(30)
  textStyle(BOLD)
  text("Most of them are Catholic.",130,130)
  text("GO BACK TO FLOOR 3", 140,280)
  text("GO TO THIRD STAGE",140,410)
  text("GO BACK TO ELEVATOR",140,540)
  pop()
  stroke('White')
  strokeWeight(3)
  textSize(50)
  text('🏠',40,285)
  text('🏠',40,415)
  text('🏠',40,545)
  pop()
    }
    draw_9(){
      background('LightBlue');
      image(this.image42,0,0,600,600)
        push()
  stroke('White')
  strokeWeight(5)
  noFill()
  line(30,50,215,50)
  line(385,50,570,50)
  line(30,50,30,200)
  line(570,50,570,200)
  line(30,200,570,200)
  rect(30,230,80,80)
  rect(30,360,80,80)
  push()
  textSize(40)
  fill('White')
  noStroke()
  textStyle(BOLD)
  text("Hint #9",230,60)
  textSize(30)
  textStyle(BOLD)
  text("In February, there is 'La Chandelleur'",40,110)
  text("day for eating crepes.",140,160)
  //text("In February, there is 'La Chandelleur' day for eating crepes.",140,130)
  text("GO BACK TO FLOOR 3", 140,280)
  text("GO BACK TO ELEVATOR",140,410)
  pop()
  stroke('White')
  strokeWeight(3)
  textSize(50)
  text('🏠',40,285)
  text('🏠',40,415)
  pop()
    }
    draw_10(){
      background('LightBlue');
      image(this.image42,0,0,600,600)
        push()
  stroke('White')
  strokeWeight(5)
  noFill()
  line(30,50,215,50)
  line(385,50,570,50)
  line(30,50,30,200)
  line(570,50,570,200)
  line(30,200,570,200)
  rect(30,230,80,80)
  rect(30,360,80,80)
  rect(30,490,80,80)
  push()
  textSize(40)
  fill('White')
  noStroke()
  textStyle(BOLD)
  text("Hint #9",230,60)
  textSize(30)
  textStyle(BOLD)
  text("Men's traditional clothes : BLUES",40,110)
  text("Women's traditional clothes : Quilted",30,160)
  text("GO BACK TO FLOOR 4", 140,280)
  text("GO TO SECOND STAGE",140,410)
  text("GO BACK TO ELEVATOR",140,540)
  pop()
  stroke('White')
  strokeWeight(3)
  textSize(50)
  text('🏠',40,285)
  text('🏠',40,415)
  text('🏠',40,545)
  pop()
    }
    draw_11(){
      background('LightBlue');
      image(this.image42,0,0,600,600)
        push()
  stroke('White')
  strokeWeight(5)
  noFill()
  line(30,50,215,50)
  line(385,50,570,50)
  line(30,50,30,200)
  line(570,50,570,200)
  line(30,200,570,200)
  rect(30,230,80,80)
  rect(30,360,80,80)
  rect(30,490,80,80)
  push()
  textSize(40)
  fill('White')
  noStroke()
  textStyle(BOLD)
  text("Hint #9",230,60)
  textSize(30)
  textStyle(BOLD)
  text('There is a traditional game',100,110)
  text('called Ferranck.',170,160)
  text("GO BACK TO FLOOR 4", 140,280)
  text("GO TO THIRD STAGE",140,410)
  text("GO BACK TO ELEVATOR",140,540)
  pop()
  stroke('White')
  strokeWeight(3)
  textSize(50)
  text('🏠',40,285)
  text('🏠',40,415)
  text('🏠',40,545)
  pop()
    }
    draw_12(){
      background('LightBlue');
      image(this.image42,0,0,600,600)
        push()
  stroke('White')
  strokeWeight(5)
  noFill()
  line(30,50,215,50)
  line(385,50,570,50)
  line(30,50,30,200)
  line(570,50,570,200)
  line(30,200,570,200)
  rect(30,230,80,80)
  rect(30,360,80,80)
  push()
  textSize(40)
  fill('White')
  noStroke()
  textStyle(BOLD)
  text("Hint #9",230,60)
  textSize(30)
  textStyle(BOLD)
  text("A famous figure is Napoleon.",80,130)
  text("GO BACK TO FLOOR 4", 140,280)
  text("GO BACK TO ELEVATOR",140,410)
  pop()
  stroke('White')
  strokeWeight(3)
  textSize(50)
  text('🏠',40,285)
  text('🏠',40,415)
  pop()
    }
    update_1(){
        if(mouseX > 30 && mouseX<110 && mouseY>230 && mouseY<230+80){
             current_screen = floor_1
             this.mouse_click.play()
        }
        if(mouseX > 30 && mouseX<110 && mouseY>360 && mouseY<360+80){
            current_screen = floor_1_1_2
            this.mouse_click.play()
         }
       if(mouseX > 30 && mouseX<110 && mouseY>490 && mouseY<490+80){
        current_screen = game_screen_3
        this.mouse_click.play()
         }
    }
    update_2(){
        if(mouseX > 30 && mouseX<110 && mouseY>230 && mouseY<230+80){
            current_screen = floor_1
            this.mouse_click.play()
       }
       if(mouseX > 30 && mouseX<110 && mouseY>360 && mouseY<360+80){
        current_screen = floor_1_1_3
        this.mouse_click.play()
   }
      if(mouseX > 30 && mouseX<110 && mouseY>490 && mouseY<490+80){
       current_screen = game_screen_3
       this.mouse_click.play()
  }
    }
    update_3(){
        if(mouseX > 30 && mouseX<110 && mouseY>230 && mouseY<230+80){
            current_screen = floor_1
            this.mouse_click.play()
       }
       if(mouseX > 30 && mouseX<110 && mouseY>360 && mouseY<360+80){
           current_screen = game_screen_3
           this.mouse_click.play()
      }
    }
    update_4(){
        if(mouseX > 30 && mouseX<110 && mouseY>230 && mouseY<230+80){
            current_screen = floor_2
            this.mouse_click.play()
       }
       if(mouseX > 30 && mouseX<110 && mouseY>360 && mouseY<360+80){
        current_screen = floor_2_1_2
        this.mouse_click.play()
   }
      if(mouseX > 30 && mouseX<110 && mouseY>490 && mouseY<490+80){
       current_screen = game_screen_3
       this.mouse_click.play()
  }
    }
    update_5(){
        if(mouseX > 30 && mouseX<110 && mouseY>230 && mouseY<230+80){
            current_screen = floor_2
            this.mouse_click.play()
       }
       if(mouseX > 30 && mouseX<110 && mouseY>360 && mouseY<360+80){
        current_screen = floor_2_1_3
        this.mouse_click.play()
   }
      if(mouseX > 30 && mouseX<110 && mouseY>490 && mouseY<490+80){
       current_screen = game_screen_3
       this.mouse_click.play()
  }
    }
    update_6(){
        if(mouseX > 30 && mouseX<110 && mouseY>230 && mouseY<230+80){
            current_screen = floor_2
            this.mouse_click.play()
       }
       if(mouseX > 30 && mouseX<110 && mouseY>360 && mouseY<360+80){
           current_screen = game_screen_3
           this.mouse_click.play()
      }
    }
    update_7(){
      if(mouseX > 30 && mouseX<110 && mouseY>230 && mouseY<230+80){
           current_screen = floor_3
           this.mouse_click.play()
      }
      if(mouseX > 30 && mouseX<110 && mouseY>360 && mouseY<360+80){
          current_screen = floor_3_level2
          this.mouse_click.play()
       }
     if(mouseX > 30 && mouseX<110 && mouseY>490 && mouseY<490+80){
      current_screen = game_screen_3
      this.mouse_click.play()
       }
  }
  update_8(){
    if(mouseX > 30 && mouseX<110 && mouseY>230 && mouseY<230+80){
      current_screen = floor_3
      this.mouse_click.play()
 }
 if(mouseX > 30 && mouseX<110 && mouseY>360 && mouseY<360+80){
     current_screen = floor_3_level3
     this.mouse_click.play()
  }
if(mouseX > 30 && mouseX<110 && mouseY>490 && mouseY<490+80){
 current_screen = game_screen_3
 this.mouse_click.play()
  }
  }
  update_9(){
    if(mouseX > 30 && mouseX<110 && mouseY>230 && mouseY<230+80){
      current_screen = floor_3
      this.mouse_click.play()
 }
 if(mouseX > 30 && mouseX<110 && mouseY>360 && mouseY<360+80){
     current_screen = game_screen_3
     this.mouse_click.play()
}
  }
  update_10(){
    if(mouseX > 30 && mouseX<110 && mouseY>230 && mouseY<230+80){
      current_screen = floor_4
      this.mouse_click.play()
 }
 if(mouseX > 30 && mouseX<110 && mouseY>360 && mouseY<360+80){
     current_screen = floor_4_level2
     this.mouse_click.play()
  }
if(mouseX > 30 && mouseX<110 && mouseY>490 && mouseY<490+80){
 current_screen = game_screen_3
 this.mouse_click.play()
  }
  }
  update_11(){
    if(mouseX > 30 && mouseX<110 && mouseY>230 && mouseY<230+80){
      current_screen = floor_4
      this.mouse_click.play()
 }
 if(mouseX > 30 && mouseX<110 && mouseY>360 && mouseY<360+80){
     current_screen = floor_4_level3
     this.mouse_click.play()
  }
if(mouseX > 30 && mouseX<110 && mouseY>490 && mouseY<490+80){
 current_screen = game_screen_3
 this.mouse_click.play()
  }
  }
  update_12(){
    if(mouseX > 30 && mouseX<110 && mouseY>230 && mouseY<230+80){
      current_screen = floor_4
      this.mouse_click.play()
 }
 if(mouseX > 30 && mouseX<110 && mouseY>360 && mouseY<360+80){
     current_screen = game_screen_3
     this.mouse_click.play()
}
  }
}
