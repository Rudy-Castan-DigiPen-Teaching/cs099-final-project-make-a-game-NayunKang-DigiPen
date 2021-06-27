// Name       : Kang Nayun
// Assignment : Make a game
// Course     : CS099
// Spring 2021

# Shape
 
 `What`: arc, circle, line, rect, triangle

 `Why`: I will use it on button, game design and etc..

 `How`: 

 1. arc (x-coordinate, y-coordinate, width, height, angle to start, angle to stop the arc) 

 2. circle (x-coordinate, y-coordinate, diameter)

 3. line (the x-coordinate of the first point, the y-coordinate of the first point, the x-coordinate of the second point, the 

 y-coordinate of the second point)

 4. rect (x-coordinate, y-coordinate, width, [height])

 5. triangle (the x-coordinate of the first point, the y-coordinate of the first point, the x-coordinate of the second point, the 
 
 y-coordinate of the second point, x-coordinate of the third point, y-coordinate of the third point)

 `Code` : 

 1. arc (x, y, w, h, start, stop) - main_menu.js 121

 2. circle (x, y, d) - main_menu.js 100

 3. line (x1, y1, x2, y2) - main_menu.js 122

 4. rect (x, y, w, [h]) - main_menu.js 124

 5. triangle (x1, y1, x2, y2, x3, y3) - game_screen.js 84

 ## Colors

  `What` : Black, White, Gold, SkylightBlue

  `Why` : I will use it as an background color and the button color. Also, I will change the degree of clearness (transparency) so that 
  
  the button would be more fancy. 
  
  `How` : fill(v1, v2, v3, [alpha]), fill('---')
  
  `Code` : fill('Black) - main_menu.js 88

### Variables 
 
 `What` : let, const 
 
 `Why` : If I use let, I could reduce typing. I don't have to write all of the value changing. If I use const, I don't have to use 
 
 another variables when I use them.
 
 `How` : I will use let (this.let if I use it on 'class') on image, sound and some variables that I have to change the value. Also, I 
 
 will use 'const' in the screen_const.
 
 `Code` : let image1; , let size = 0, const floor_1 = 1 - screen_const.js 1 ~ 66, floor_1.js 179

 #### Conditional statements
 
 `What` : if + else if , switch + case + break
 
 `Why` : If I use if and else if, I could make more than one condition in easy way. Also, if I use the switch case and break, I could 

 make a scene which is individual. In addition, it is easy to change the scene. To sum, use this to have an outcome, depending on the 
 
 condition.
 
 `How` : 
  1. I will use this in piano array. If I play piano correct, it will show me the next screen. Else if I play piano wrong, I would have to

  listen 'beep' sound.

  2. I will use switch + case + break in a big code. I have lots of scenes so that I have to connect them. Thus, I would use them in 
  
  connecting themes.
     
 `Code` : 
  1. if(suppose the condition){1.play} else {2.play} - floor_1.js 368 ~ 377

  2. switch(current_screen){              - sketch.js 
 
     case 'case name' : {first case}

     break; }

#### LOOPS

 `What` : for
 
 `Why` : I could make code simply by using for. 'FOR' loop contains lots of codes just in a few codes.
 
 `How` : I will use 'for' in two way.

  1. piano code : FOR loop would check all the time I press the key. If I press the correct key, the for loop would kept playing. 
  
  However, if I press the wrong key, the for loop would stop and make a new array.

  2. key code : For loop would check all the time I press the key. If I press the correct key, writing a **FRANCE** , the for 
  
  loop would kept playing. However, if I press the wrong key, the for loop would stop and try to make a new array.
 
 `Code` : for(let i = 0, i < ~, i++ ){    - floor_1.js 368 ~ 377

         }

 ### FUNCTIONS

 `What` : function mouseReleased(), function keyReleased()
 
 `Why` : I could make code simply by using function, which I could do the soft coding.
 
 `How` : I will use 'function' in two way.

  1. when mouse released : I could set some range of mouseX and mouse Y and if I touch the range, something would be happen.

  2. when key released : I will use special keyCode which stands for each key. So, if I released the key that I set, something

  would be happen.
 
 `Code` : function mouseReleased() {} - sketch.js 286 ~ 453

          function keyReleased() {} - sketch.js 455 ~ 556

 ## CLASSES
 
 `What` : class(){constructor(),draw(),update()}
 
 `Why` : I could keep use the class that I need. I could do soft coding. Also, I could divided the long code to a separate code.
 
 `How` : I made class on every floor, because classes are repeated on each floor.   

  1. class main_menu_scene = This includes main_menu, about_game, how_to_play

  2. class game_screen_scene = Ths includes elevator button, the introduction of how to play game

  3. class floor_(1,2,3,4,100)_scene = This includes the introduction of floor(1,2,3,4,100), three games of floor(1,2,3,4,100)

  4. class hint_scene = This includes 12 hints which is needed to have a key to escape from the building.
 
 `Code` : 

  1. class main_menu_scene = main_menu.js -> sketch.js

  2. class game_screen_scene = game_screen.js -> sketch.js

  3. class floor_(1,2,3,4,100)_scene = floor_(1,2,3,4,100).js -> sketch.js

  4. class hint_scene = hint.js -> sketch.js

 # ARRAYS 
 
 `What` : array, new Array
 
 `Why` : I could set the compare input nodes and if I set variables about user input nodes, the computer would 
 
 compare besides two so that the game would be clear. 
 
 `How` : I would use array for three ways. 

  1. piano array - If the user play the piano perfect, the array would work and the game would be clear. However,
  
     the use play the piano wrong, the array would kept reset.

  2. quiz array - If the user write the number perfect, the array would work and the game would be clear. However,
  
     the use write the number wrong, the array would kept reset.

  3. key array = If the user write the alphabet perfect, the array would work and the game would be clear. However,
  
     the use write the alphabet wrong, the array would kept reset.
 
 `Code` : 

  1. piano array - floor_1.js 

  2. quiz array - floor_4.js

  3. key array = floor_100.js
