// Name       : Kang Nayun
// Assignment : Make a game
// Course     : CS099
// Spring 2021

let compare_number = [70,82,65,78,67,69]
let user_number = new Array(0)
let size_plus = 0

class floor_100_scene {
    constructor(x,y){
    this.x = x
    this.y = y 
    this.image2;
    this.image42;
    this.image43;
    this.image44;
    this.image45;
    this.image46;
    this.image47;
    this.image48;
    this.image49;
    this.mouse_click;
    this.wrong;
    this.key;
    this.correct

    } 
    setup(){
        this.image2 = loadImage("image/speech bubble.jpg");
        this.image42 = loadImage('image/floor_100.jpg');
        this.image43 = loadImage('image/box.png');
        this.image44 = loadImage('image/open the box.png')
        this.image45 = loadImage('image/floor_100_box.PNG');
        this.image46 = loadImage('image/guess the word.png');
        this.image47 = loadImage('image/word.png');
        this.image48 = loadImage('image/final_key.png');
        this.image49 = loadImage('image/ending.jpg');
        this.mouse_click = loadSound('song/mouse click.wav')
        this.wrong = loadSound('song/wrong.mp3')
        this.key= loadSound('song/key.wav')
        this.correct = loadSound('song/correct.wav')
    }
    draw(){
      image(this.image42,0,0,600,600)
      image(this.image2, 50, 50, 530, 250);
      push()
      triangle(430, 245, 430, 265, 450, 255);
      text("Finally, you came to the 100th", 100, 115);
      text("floor. Use the hints you've", 100, 150);
      text("collected so far to unlock the ", 100, 185);
      text("box and get the key and escape ", 100, 220);
      text("from the building. ", 100, 255);
      pop()
    }

    draw_1(){
        image(this.image42,0,0,600,600)
        image(this.image43,100,250,400,300)
        image(this.image44,100,100,400,100)
    }

    draw_2(){
      image(this.image45,0,0,600,600)
      image(this.image46,100,50,400,150)
      image(this.image47,50,300,500,200)
    }
    draw_key(){
      background('BLACK')
      image(this.image48,0,50,600,500)
      noFill()
      stroke('Gold')
      textSize(40)
      text('CLICK',450,250)
    }
    draw_final(){
      image(this.image49,0,0,600,600)
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
    draw_final_mouse(){
      if(mouseX > 295 && mouseX<295+70 && mouseY>428 && mouseY<428+70){
        current_screen = main_menu
        this.mouse_click.play()
         }
    }
    update_mouse(){
        let mouse_x_range_1 = mouseX >= 430 && mouseX <= 450;
        let mouse_y_range_1 = mouseY >= 245 && mouseY <= 265;
        if (mouse_x_range_1 && mouse_y_range_1) {
          current_screen = floor_100_1
          this.mouse_click.play()
        }
    }
    update_mouse_2(){
      if(mouseX>0 && mouseX<600&&mouseY>0 && mouseY<600){
        current_screen = floor_100_key
        this.mouse_click.play()
      }
    }
    update_final(){
      if(mouseX>0 && mouseX<600&&mouseY>0 && mouseY<600){
        current_screen = floor_100_3
        this.mouse_click.play()
      }
    }
    update_key(){
      size_plus++
  console.log(user_number)
  if(keyCode == 81){
    user_number.push(keyCode)
  }
  if(keyCode == 87){
    user_number.push(keyCode)
  }
  if(keyCode == 69){
    user_number.push(keyCode)
    this.key.play()
  }
  if(keyCode == 82){
    user_number.push(keyCode)
    this.key.play()
  }
  if(keyCode == 84){
    user_number.push(keyCode)
  }
  if(keyCode == 89){
    user_number.push(keyCode)
  }
  if(keyCode == 85){
    user_number.push(keyCode)
  }
  if(keyCode == 55){
    user_number.push(keyCode)
  }
  if(keyCode == 73){
    user_number.push(keyCode)
  }
  if(keyCode == 79){
    user_number.push(keyCode)
  }
  if(keyCode == 80){
    user_number.push(keyCode)
  }
  if(keyCode == 65){
    user_number.push(keyCode)
    this.key.play()
  }
  if(keyCode == 83){
    user_number.push(keyCode)
  }
  if(keyCode == 68){
    user_number.push(keyCode)
  }
  if(keyCode == 70){
    user_number.push(keyCode)
    this.key.play()
  }
  if(keyCode == 71){
    user_number.push(keyCode)
  }
  if(keyCode == 72){
    user_number.push(keyCode)
  }
  if(keyCode == 74){
    user_number.push(keyCode)
  }
  if(keyCode == 75){
    user_number.push(keyCode)
  }
  if(keyCode == 76){
    user_number.push(keyCode)
  }
  if(keyCode == 90){
    user_number.push(keyCode)
  }
  if(keyCode == 88){
    user_number.push(keyCode)
  }
  if(keyCode == 67){
    user_number.push(keyCode)
    this.key.play()
  }
  if(keyCode == 86){
    user_number.push(keyCode)
  }
  if(keyCode == 66){
    user_number.push(keyCode)
  }
  if(keyCode == 78){
    user_number.push(keyCode)
    this.key.play()
  }
  if(keyCode == 77){
    user_number.push(keyCode)
  }
  let k = 0
  for(let i=0; i< size_plus; i++){
    if(compare_number[i] == user_number[i]){
      k++
    }else{
      size_plus = 0
      k = 0
      user_number = new Array(0)
      this.wrong.play()
      break;
    }
    }
    if (size_plus == 6){
        current_screen = floor_100_2
        this.correct.play()
      }
    }
}
