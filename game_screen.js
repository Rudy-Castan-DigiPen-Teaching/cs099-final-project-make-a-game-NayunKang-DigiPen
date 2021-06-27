// Name       : Kang Nayun
// Assignment : Make a game
// Course     : CS099
// Spring 2021

class game_screen_scene {
    constructor(x,y){
        this.x = x
        this.y = y
        this.image1 ;
        this.image2 ;
        this.image3 ;
        this.elevator_button;
        this.mouse_click;

    }
    setup(){
        this.image1 = loadImage("image/interior of elevator.png");
        this.image2 = loadImage("image/speech bubble.jpg");
        this.image3 = loadImage("image/good luck.jpg");
        this.elevator_button = loadSound("song/elevator button.wav");
        this.mouse_click = loadSound("song/mouse click.wav");
    }
    update_1(){
        let mouse_x_range_1 = mouseX >= 430 && mouseX <= 450;
        let mouse_y_range_1 = mouseY >= 200 && mouseY <= 220;
        if (mouse_x_range_1 && mouse_y_range_1) {
          current_screen = game_screen_1;
          this.mouse_click.play()
        }
    }
    update_2(){
        let mouse_x_range_1 = mouseX >= 430 && mouseX <= 450;
        let mouse_y_range_1 = mouseY >= 200 && mouseY <= 220;
        if (mouse_x_range_1 && mouse_y_range_1) {
          current_screen = game_screen_2;
          this.mouse_click.play()
        }
    }
    update_3(){
        let mouse_x_range_1 = mouseX >= 430 && mouseX <= 450;
        let mouse_y_range_1 = mouseY >= 200 && mouseY <= 220;
        if (mouse_x_range_1 && mouse_y_range_1) {
          current_screen = game_screen_3;
        }
        this.mouse_click.play()
    }
    update_4(){
        let mouse_x_range_2 = mouseX >= 225 && mouseX <= 275;
        let mouse_y_range_2 = mouseY >= 325 && mouseY <= 375;
        if (mouse_x_range_2 && mouse_y_range_2) {
          current_screen = floor_1;
          this.mouse_click.play()
        }
        let mouse_x_range_3 = mouseX >= 325 && mouseX <= 375;
        let mouse_y_range_3 = mouseY >= 325 && mouseY <= 375;
        if (mouse_x_range_3 && mouse_y_range_3) {
          current_screen = floor_2;
          this.mouse_click.play()
        }
        let mouse_x_range_5 = mouseX >= 225 && mouseX <= 275;
        let mouse_y_range_5 = mouseY >= 255 && mouseY <= 305;
        if (mouse_x_range_5 && mouse_y_range_5) {
          current_screen = floor_3;
          this.mouse_click.play()
        }
        let mouse_x_range_4 = mouseX >= 325 && mouseX <= 375;
        let mouse_y_range_4 = mouseY >= 255 && mouseY <= 305;
        if (mouse_x_range_4 && mouse_y_range_4) {
          current_screen = floor_4;
          this.mouse_click.play()
        }
        let mouse_x_range_7 = mouseX >= 325-50 && mouseX <= 375-50;
        let mouse_y_range_7 = mouseY >= 185 && mouseY <= 235;
        if (mouse_x_range_7 && mouse_y_range_7) {
          current_screen = floor_100;
          this.mouse_click.play()
        }
    }
    draw_1(){
        background('LightGrey')
        image(this.image1, 0, 0, width, height);
        image(this.image2, 50, 50, 530, 200);
        fill("Black");
        triangle(430, 200, 430, 220, 450, 210);
        textSize(25);
        textStyle(BOLD);
        push()
        text("From now on, you will move", 100, 105);
        text("into the floor that you select.", 100, 140);
        text("You have to clear all the", 100, 175);
        text("games on each floor.", 100, 210);
        pop()
    }
    draw_2(){
      background('LightGrey')
        image(this.image1, 0, 0, width, height);
        image(this.image2, 50, 50, 530, 200);
        push()
        triangle(430, 200, 430, 220, 450, 210);
        text("You will get the alphabets ", 100, 105);
        text("on each floor. After you all", 100, 140);
        text("finsihed gathering them,", 100, 175);
        text("go to 100th floor.", 100, 210);
        pop()
    }
    draw_3(){
      background('LightGrey')
        image(this.image1, 0, 0, width, height);
        image(this.image2, 50, 50, 530, 200);
        triangle(430, 200, 430, 220, 450, 210);
        text("GOOD LUCK ", 130, 155);
        image(this.image3, 300, 90, 130, 130);
    }
    draw_4(){
      background('LightGrey')
        image(this.image1, 0, 0, width, height);
        push();
        stroke(190, 100);
        strokeWeight(10);
        fill(190);
        rect(190, 100, 220, 360);
        fill(169);
        stroke(169, 100);
        circle(300, 140, 50);
        circle(300, 210, 50);
        circle(250, 280, 50);
        circle(350, 280, 50);
        circle(250, 350, 50);
        circle(350, 350, 50);
        circle(250, 420, 50);
        circle(350, 420, 50);
        //bell
        fill("Black");
        noStroke();
        //bell
        stroke("Black");
        noFill();
        strokeWeight(3);
        line(300, 125, 300, 130);
        line(310, 130, 290, 130);
        arc(285, 130, 10, 40, 0, PI / 2);
        arc(315, 130, 10, 40, PI / 2, PI);
        line(287, 150, 295, 150);
        line(312, 150, 304, 150);
        arc(300, 150, 9, 10, 0, PI);
        //100
        line(337-50, 195, 337-50, 225);
        ellipse(347-50, 210, 10, 30);
        ellipse(361-50, 210, 10, 30);
        arc(331-50, 195, 12, 20, 0, PI / 2);
        //3
        arc(245, 272, 30, 18, PI / 2 + PI, PI / 2);
        arc(245, 290, 30, 18, PI / 2 + PI, PI / 2);
        //4
        line(350, 265, 340, 290);
        line(360, 290, 340, 290);
        line(355, 280, 355, 295);
        //2
        arc(240 + 100, 350, 35, 30, PI / 2 + PI, PI / 2);
        line(340, 365, 360, 365);
        //1
        line(255, 335, 255, 365);
        arc(242, 335, 25, 20, 0, PI / 2);
        // <|>
        line(250, 405, 250, 435);
        triangle(245, 407, 245, 432, 235, 420);
        triangle(255, 407, 255, 432, 265, 420);
        // >|<
        line(350, 405, 350, 435);
        triangle(335, 407, 335, 432, 345, 420);
        triangle(365, 407, 365, 432, 355, 420);
        pop();
    }
}
