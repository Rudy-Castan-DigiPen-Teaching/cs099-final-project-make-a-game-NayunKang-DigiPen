// Name       : Kang Nayun
// Assignment : Make a game
// Course     : CS099
// Spring 2021

let compareTargetNodes = [70,68,83,68,70,70,70];
let compareTargetNodes_2 = [83,83,72,72,74,74,72];
let compareTargetNodes_3 = [72,72,74,74,72,72,70,72,72,70,70,68]
let userInputNodes = new Array(0)
let compareSize = 0 


class floor_1_scene {
    constructor(x,y){
        this.x = x
        this.y = y
        this.image2;
        this.image4;
        this.image5;
        this.image6;
        this.game_song_1;
        this.game_song_2;
        this.game_song_3;
        this.piano_do;
        this.piano_rae;
        this.piano_mi;
        this.piano_fa;
        this.piano_sol;
        this.piano_la;
        this.piano_si;
        this.piano_high_do;
        this.mouse_click
        this.wrong;
    } 

    setup(){
        this.image2 = loadImage("image/speech bubble.jpg");
        this.image4 = loadImage("image/musicroom.jpg");
        this.image5 = loadImage("image/piano1.jpg");
        this.image6 = loadImage("image/speech bubble_2.jpg");
        this.game_song_1 = loadSound("song/floor1_1.mp3");
      this.game_song_2 = loadSound("song/floor_1_2.mp3");
      this.game_song_3 = loadSound("song/floor_1_3.mp3");
      this.piano_do = loadSound("song/do.mp3");
      this.piano_rae = loadSound("song/rae.mp3");
      this.piano_mi = loadSound("song/mi.mp3");
      this.piano_fa = loadSound("song/fa.mp3");
      this.piano_sol = loadSound("song/sol.mp3");
      this.piano_la = loadSound("song/la.mp3");
      this.piano_si = loadSound("song/si.mp3");
      this.piano_high_do = loadSound("song/high do.mp3");
      this.mouse_click = loadSound('song/mouse click.wav')
      this.wrong = loadSound('song/wrong.mp3')
        
    }
    draw_1(){
        image(this.image4, 0, 0, width, height);
        image(this.image2, 50, 50, 530, 200);
        fill("Black");
        triangle(430, 200, 430, 220, 450, 210);
        textSize(25);
        textStyle(BOLD);
        text("From now on, you will play", 100, 105);
        text("the piano. You can listen the", 100, 140);
        text("song for just once. Then, you", 100, 175);
        text("have to play as you heard.", 100, 210);
    }
    draw_2(){
        image(this.image4, 0, 0, width, height);
        image(this.image5, 15, 285, width - 30, 300);
        textSize(50);
        text("Click the stage !", 100, 250);
        push();
        noFill();
        stroke("Black");
        strokeWeight(10);
        square(50, 70, 120);
        square(430, 70, 120);
        square(240, 70, 120);
        //1
        line(120 - 5, 90, 115, 170);
        arc(95, 90, 40, 40, 0, PI / 2);
        //2
        arc(280, 130, 80, 70, PI / 2 + PI, PI / 2);
        line(280, 165, 330, 165);
        //3
        arc(480, 110, 60, 40, PI / 2 + PI, PI / 2);
        arc(480, 150, 60, 40, PI / 2 + PI, PI / 2);
        pop();
    }
    draw_3(){
        image(this.image4, 0, 0, width, height);
        image(this.image5, 15, 285, width - 30, 300);
        image(this.image6, -110, 130, 700, 260);
        noFill();
        stroke("Black");
        strokeWeight(5);
        rect(50, 30, 100, 100);
        fill("Black");
        triangle(70, 50, 70, 110, 130, 80);
        textSize(35);
        textStyle(BOLD);
        noStroke();
        text("⬅ CLICK HERE", 180, 70);
        text("TO PLAY THE SONG", 230, 115);
        textSize(25);
        text("You will listen the song for once.", 120, 185);
        text("Then, you have to play it as you", 120, 220);
        text("listened.", 120, 255);
        textSize(50);
        text("s", 35, 570);
        text("d", 100, 570);
        text("f", 175, 570);
        text("g", 245, 570);
        text("h", 315, 570);
        text("j", 400, 570);
        text("k", 465, 570);
        text("l", 545, 570);
    }
    draw_4(){
        image(this.image4, 0, 0, width, height);
        image(this.image5, 15, 285, width - 30, 300);
        image(this.image6, -110, 130, 700, 260);
        noFill();
        stroke("Black");
        strokeWeight(5);
        rect(50, 30, 100, 100);
        fill("Black");
        triangle(70, 50, 70, 110, 130, 80);
        textSize(35);
        textStyle(BOLD);
        noStroke();
        text("⬅ CLICK HERE", 180, 70);
        text("TO PLAY THE SONG", 230, 115);
        textSize(25);
        text("You will listen the song for once.", 120, 185);
        text("Then, you have to play it as you", 120, 220);
        text("listened.", 120, 255);
        textSize(50);
        text("s", 35, 570);
        text("d", 100, 570);
        text("f", 175, 570);
        text("g", 245, 570);
        text("h", 315, 570);
        text("j", 400, 570);
        text("k", 465, 570);
        text("l", 545, 570);
    }
    draw_5() {
        image(this.image4, 0, 0, width, height);
        image(this.image5, 15, 285, width - 30, 300);
        image(this.image6, -110, 130, 700, 260);
        noFill();
        stroke("Black");
        strokeWeight(5);
        rect(50, 30, 100, 100);
        fill("Black");
        triangle(70, 50, 70, 110, 130, 80);
        textSize(35);
        textStyle(BOLD);
        noStroke();
        text("⬅ CLICK HERE", 180, 70);
        text("TO PLAY THE SONG", 230, 115);
        textSize(25);
        text("You will listen the song for once.", 120, 185);
        text("Then, you have to play it as you", 120, 220);
        text("listened.", 120, 255);
        textSize(50);
        text("s", 35, 570);
        text("d", 100, 570);
        text("f", 175, 570);
        text("g", 245, 570);
        text("h", 315, 570);
        text("j", 400, 570);
        text("k", 465, 570);
        text("l", 545, 570);
    }
    update_1(){
        let mouse_x_range_1 = mouseX >= 430 && mouseX <= 450;
        let mouse_y_range_1 = mouseY >= 200 && mouseY <= 220;
        if (mouse_x_range_1 && mouse_y_range_1) {
          current_screen = floor_1_1;
          this.mouse_click.play()
        }
    }
    update_2(){
        let mouse_x_range_1 = mouseX >= 50 && mouseX <= 170;
        let mouse_y_range_1 = mouseY >= 70 && mouseY <= 190;
        if (mouse_x_range_1 && mouse_y_range_1) {
          current_screen = floor_1_1_1;
          this.mouse_click.play()
        }
        let mouse_x_range_2 = mouseX >= 240 && mouseX <= 360;
        let mouse_y_range_2 = mouseY >= 70 && mouseY <= 190;
        if (mouse_x_range_2 && mouse_y_range_2) {
          current_screen = floor_1_1_2;
          this.mouse_click.play()
        }
        let mouse_x_range_3 = mouseX >= 430 && mouseX <= 550;
        let mouse_y_range_3 = mouseY >= 70 && mouseY <= 190;
        if (mouse_x_range_3 && mouse_y_range_3) {
          current_screen = floor_1_1_3;
          this.mouse_click.play()
        }
    }
        update_3(){
            let mouse_x_range = mouseX >= 50 && mouseX <= 150;
        let mouse_y_range = mouseY >= 30 && mouseY <= 130;
        if (mouse_x_range && mouse_y_range) {
          this.game_song_1.play();
        }
        //do
        if (mouseX > 15 && mouseX < 80 && mouseY > 285 && mouseY < 585) {
       this.piano_do.play();
        }
        //rae
        if (mouseX > 80 && mouseX < 150 && mouseY > 285 && mouseY < 585) {
          this.piano_rae.play();
        }
        //mi
        if (mouseX > 150 && mouseX < 225 && mouseY > 285 && mouseY < 585) {
         this.piano_mi.play();
        }
        //fa
        if (mouseX > 225 && mouseX < 300 && mouseY > 285 && mouseY < 585) {
        this.piano_fa.play();
        }
        //sol
        if (mouseX > 300 && mouseX < 365 && mouseY > 285 && mouseY < 585) {
         this.piano_sol.play();
        }
        //la
        if (mouseX > 365 && mouseX < 440 && mouseY > 285 && mouseY < 585) {
         this.piano_la.play();
        }
        //si
        if (mouseX > 440 && mouseX < 515 && mouseY > 285 && mouseY < 585) {
        this.piano_si.play();
        }
        //high do
        if (mouseX > 515 && mouseX < 585 && mouseY > 285 && mouseY < 585) {
        this.piano_high_do.play();
        }
    }
    update_4(){
      let mouse_x_range = mouseX >= 50 && mouseX <= 150;
  let mouse_y_range = mouseY >= 30 && mouseY <= 130;
  if (mouse_x_range && mouse_y_range) {
    this.game_song_2.play();
  }
  //do
  if (mouseX > 15 && mouseX < 80 && mouseY > 285 && mouseY < 585) {
 this.piano_do.play();
  }
  //rae
  if (mouseX > 80 && mouseX < 150 && mouseY > 285 && mouseY < 585) {
    this.piano_rae.play();
  }
  //mi
  if (mouseX > 150 && mouseX < 225 && mouseY > 285 && mouseY < 585) {
   this.piano_mi.play();
  }
  //fa
  if (mouseX > 225 && mouseX < 300 && mouseY > 285 && mouseY < 585) {
  this.piano_fa.play();
  }
  //sol
  if (mouseX > 300 && mouseX < 365 && mouseY > 285 && mouseY < 585) {
   this.piano_sol.play();
  }
  //la
  if (mouseX > 365 && mouseX < 440 && mouseY > 285 && mouseY < 585) {
   this.piano_la.play();
  }
  //si
  if (mouseX > 440 && mouseX < 515 && mouseY > 285 && mouseY < 585) {
  this.piano_si.play();
  }
  //high do
  if (mouseX > 515 && mouseX < 585 && mouseY > 285 && mouseY < 585) {
  this.piano_high_do.play();
  }
}
update_5(){
  let mouse_x_range = mouseX >= 50 && mouseX <= 150;
let mouse_y_range = mouseY >= 30 && mouseY <= 130;
if (mouse_x_range && mouse_y_range) {
this.game_song_3.play();
}
//do
if (mouseX > 15 && mouseX < 80 && mouseY > 285 && mouseY < 585) {
this.piano_do.play();
}
//rae
if (mouseX > 80 && mouseX < 150 && mouseY > 285 && mouseY < 585) {
this.piano_rae.play();
}
//mi
if (mouseX > 150 && mouseX < 225 && mouseY > 285 && mouseY < 585) {
this.piano_mi.play();
}
//fa
if (mouseX > 225 && mouseX < 300 && mouseY > 285 && mouseY < 585) {
this.piano_fa.play();
}
//sol
if (mouseX > 300 && mouseX < 365 && mouseY > 285 && mouseY < 585) {
this.piano_sol.play();
}
//la
if (mouseX > 365 && mouseX < 440 && mouseY > 285 && mouseY < 585) {
this.piano_la.play();
}
//si
if (mouseX > 440 && mouseX < 515 && mouseY > 285 && mouseY < 585) {
this.piano_si.play();
}
//high do
if (mouseX > 515 && mouseX < 585 && mouseY > 285 && mouseY < 585) {
this.piano_high_do.play();
}
}
    key_1(){
        compareSize ++
       // console.log(userInputNodes)
        //do
        if (keyCode == 83) {
         this.piano_do.play();
          userInputNodes.push(keyCode);
        }
        //rae
        if (keyCode == 68) {
       this.piano_rae.play();
          userInputNodes.push(keyCode);
        }
        //mi
        if (keyCode == 70) {
           this.piano_mi.play();
          userInputNodes.push(keyCode);
        }
        //fa
        if (keyCode == 71) {
          this.piano_fa.play()
         userInputNodes.push(keyCode);
        }
        //sol
        if (keyCode == 72) {
          this.piano_sol.play();
          userInputNodes.push(keyCode);
        }
        //la
        if (keyCode == 74) {
         this.piano_la.play();
          userInputNodes.push(keyCode);
        }
        //si
        if (keyCode == 75) {
           this.piano_si.play();
          userInputNodes.push(keyCode);
        }
        //high do
        if (keyCode == 76) {
        this.piano_high_do.play();
          userInputNodes.push(keyCode);
        }   

        let j = 0;
        for(let i =0; i < compareSize; i++){
          if(compareTargetNodes[i] == userInputNodes[i]){
           j++
          }else{
            compareSize = 0
            j = 0;
            userInputNodes = new Array(0)
            this.wrong.play()
            break;
          }
        }
        if(compareSize == 7){
         current_screen = hint_1
        }
    //    return userInputNodes
    }
    key_2(){
        compareSize ++
       // console.log(userInputNodes)
        //do
        if (keyCode == 83) {
            this.piano_do.play();
          userInputNodes.push(keyCode);
        }
        //rae
        if (keyCode == 68) {
            this.piano_rae.play();
          userInputNodes.push(keyCode);
        }
        //mi
        if (keyCode == 70) {
            this.piano_mi.play();
          userInputNodes.push(keyCode);
        }
        //fa
        if (keyCode == 71) {
            this.piano_fa.play();
          userInputNodes.push(keyCode);
        }
        //sol
        if (keyCode == 72) {
            this.piano_sol.play();
          userInputNodes.push(keyCode);
        }
        //la
        if (keyCode == 74) {
            this.piano_la.play();
          userInputNodes.push(keyCode);
        }
        //si
        if (keyCode == 75) {
            this.piano_si.play();
          userInputNodes.push(keyCode);
        }
        //high do
        if (keyCode == 76) {
            this.piano_high_do.play();
          userInputNodes.push(keyCode);
        }   

        let j = 0;
        for(let i =0; i < compareSize; i++){
          if(compareTargetNodes_2[i] == userInputNodes[i]){
           j++
          }else{
            compareSize = 0
            j = 0;
            userInputNodes = new Array(0)
            this.wrong.play()
            break;
          }
        }
        if(compareSize == 7){
         current_screen = hint_2
        }
       // return userInputNodes
    }
    key_3(){
        compareSize ++
        console.log(userInputNodes)
        //do
        if (keyCode == 83) {
            this.piano_do.play();
          userInputNodes.push(keyCode);
        }
        //rae
        if (keyCode == 68) {
            this.piano_rae.play();
          userInputNodes.push(keyCode);
        }
        //mi
        if (keyCode == 70) {
            this.piano_mi.play();
          userInputNodes.push(keyCode);
        }
        //fa
        if (keyCode == 71) {
            this.piano_fa.play();
          userInputNodes.push(keyCode);
        }
        //sol
        if (keyCode == 72) {
            this.piano_sol.play();
          userInputNodes.push(keyCode);
        }
        //la
        if (keyCode == 74) {
            this.piano_la.play();
          userInputNodes.push(keyCode);
        }
        //si
        if (keyCode == 75) {
            this.piano_si.play();
          userInputNodes.push(keyCode);
        }
        //high do
        if (keyCode == 76) {
            this.piano_high_do.play();
          userInputNodes.push(keyCode);
        }   

        let j = 0;
        for(let i =0; i < compareSize; i++){
          if(compareTargetNodes_3[i] == userInputNodes[i]){
           j++
          }else{
            compareSize = 0
            j = 0;
            userInputNodes = new Array(0)
            this.wrong.play()
            break;
          }
        }
        if(compareSize == 12){
         current_screen = hint_3
        }
    }
}
