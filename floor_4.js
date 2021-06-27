// Name       : Kang Nayun
// Assignment : Make a game
// Course     : CS099
// Spring 2021

let comparenumber = [49,51,57]
let usernumber = new Array(0)
let size = 0


class floor_4_scene {
    constructor(x,y){
        this.x = x
        this.y = y
        this.image2;
        this.image37;
        this.image38;
        this.image39;
        this.image40;
        this.image41;
        this.rect_x = 250
        this.rect_y = 225
        this.mouse_click;
        this.wrong;
        this.key;
        this.correct;
    }
    setup(){
        this.image2 = loadImage("image/speech bubble.jpg");
        this.image37 = loadImage('image/library.jpg');
        this.image38 = loadImage('image/floor_4_stage.jpg')
        this.image39 = loadImage('image/floor_4_level1.jpg')
        this.image40 = loadImage('image/floor_4_level2.jpg')
        this.image41 = loadImage('image/floor_4_level3.jpg')
        this.mouse_click = loadSound('song/mouse click.wav')
        this.wrong = loadSound('song/wrong.mp3')
        this.key = loadSound('song/key.wav')
        this.correct = loadSound('song/correct.wav')
    }
    floor_4_main (){
       image(this.image37,0,0,600,600)
       image(this.image2, 50, 50, 530, 200);
       fill('Black');
       triangle(430, 200, 430, 220, 450, 210);
       textSize(25);
       textStyle(BOLD);
        text("Be quiet 🚫 This is an library.", 80, 105);
        text("You should solve the questions.", 80, 140);
        text("Write the answer or click the", 80, 175);
        text("answer you think. ", 80, 210);
    }
    floor_4_1(){
        image(this.image38,0,0,600,600)
        push()
        fill('White')
        stroke('Black')
        strokeWeight(8)
        textSize(40)
        text('CLICK THE TAG 💡',80,110)
        pop()
    }
    floor_4_level1(){
        image(this.image39,0,0,600,600)
    }
    floor_4_level2(){
      push()
        image(this.image40,0,0,600,600)
        fill('red')
        noStroke()
        rect(this.rect_x,this.rect_y,80,5,10)
        textSize(15)
        text('Press ENTER in the right place.',245,440)
        pop()
    }
    floor_4_level3(){
        image(this.image41,0,0,600,600)
    }
    floor_4_main_update (){
        let mouse_x_range_1 = mouseX >= 430 && mouseX <= 450;
        let mouse_y_range_1 = mouseY >= 200 && mouseY <= 220;
        if (mouse_x_range_1 && mouse_y_range_1) {
          current_screen = floor_4_1;
          this.mouse_click.play()
        }
    }
    floor_4_1_update(){
        if(mouseX>435&& mouseX<540 && mouseY > 190 && mouseY < 305){
            current_screen = floor_4_level1
            this.mouse_click.play()
          }
          if(mouseX>455&& mouseX<560 && mouseY > 295 && mouseY < 395){
            current_screen = floor_4_level2
            this.mouse_click.play()
          }
          if(mouseX>475&& mouseX<575 && mouseY > 415 && mouseY < 510){
            current_screen = floor_4_level3
            this.mouse_click.play()
          }
    }

    floor_4_level1_key(){
        size++
  console.log(usernumber)
  if(keyCode == 48){
    usernumber.push(keyCode)
    this.key.play()
  }
  if(keyCode == 49){
    usernumber.push(keyCode)
    this.key.play()
  }
  if(keyCode == 50){
    usernumber.push(keyCode)
  }
  if(keyCode == 51){
    usernumber.push(keyCode)
    this.key.play()
  }
  if(keyCode == 52){
    usernumber.push(keyCode)
  }
  if(keyCode == 53){
    usernumber.push(keyCode)
  }
  if(keyCode == 54){
    usernumber.push(keyCode)
  }
  if(keyCode == 55){
    usernumber.push(keyCode)
  }
  if(keyCode == 56){
    usernumber.push(keyCode)
  }
  if(keyCode == 57){
    usernumber.push(keyCode)
    this.key.play()
  }
  let j = 0
  for(let i=0; i< size; i++){
    if(comparenumber[i] == usernumber[i]){
      j++
    }else{
      size = 0
      j = 0
      usernumber = new Array(0)
      this.wrong.play()
      break;
    }
    }
    if (size == 3){
        current_screen = hint_10
        this.correct.play()
      }
}
floor_4_level2_key(){
    if(keyIsDown(RIGHT_ARROW))
        {
            this.rect_x += 10
            this.key.play()
        }
        else if(keyIsDown(LEFT_ARROW))
        {
            this.rect_x -= 10
            this.key.play()
        }
        else if(keyIsDown(UP_ARROW))
        {
            this.rect_y -= 10
            this.key.play()
        }

        else if(keyIsDown(DOWN_ARROW)) 
        {
            this.rect_y += 10
            this.key.play()
        }
  if(keyCode == 13){
    if(this.rect_x>180 &&this.rect_x <290 && this.rect_y > 370  && this.rect_y <390){
      current_screen = hint_11
      this.correct.play()
    }
  }
}
floor_4_level3_mouse(){
  if(mouseX> 262 && mouseX < 277 && mouseY > 295 && mouseY < 313 ){
    current_screen = hint_12
    this.correct.play()
  }
}
}
