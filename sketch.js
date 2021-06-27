// Name       : Kang Nayun
// Assignment : Make a game
// Course     : CS099
// Spring 2021

let current_screen = main_menu;

function setup()
{
    createCanvas( 600, 600 );
    main_menu_scene = new main_menu_scene(0,0)
    main_menu_scene.setup()
    game_screen_scene = new game_screen_scene(0,0)
    game_screen_scene.setup()
    floor_1_scene = new floor_1_scene(0,0)
    floor_1_scene.setup()
    floor_2_scene = new floor_2_scene(0,0)
    floor_2_scene.setup()
    hint_scene = new hint_scene()
    hint_scene.setup()
    floor_3_scene = new floor_3_scene(0,0)
    floor_3_scene.setup()
    floor_4_scene = new floor_4_scene(0,0)
    floor_4_scene.setup()
    floor_100_scene = new floor_100_scene(0,0)
    floor_100_scene.setup()
}

function draw()
{
    background( "LightGreen" );
    switch(current_screen) {
       case main_menu : { 
           main_menu_scene.draw()
       }
       break;
       case how_to_play:
      {
        main_menu_scene.how_to_play()
      }
      break;
       case about_game:
      {
        main_menu_scene.about_game()
      }
      break;
       case game_screen : {
        game_screen_scene.draw_1()
       }
       break;
       case game_screen_1:
      {
        game_screen_scene.draw_2()
      }
      break;
    case game_screen_2:
      {
        game_screen_scene.draw_3()
      }
      break;
    case game_screen_3:
      {
        game_screen_scene.draw_4()
      }
      break;
      case floor_1:
      {
        floor_1_scene.draw_1()
      }
      break;
    case floor_1_1:
      {
        floor_1_scene.draw_2()
      }
      break;

    case floor_1_1_1:
      {
        floor_1_scene.draw_3()
      }
      break;

    case floor_1_1_2:
      {
        floor_1_scene.draw_4()
      }
      break;

    case floor_1_1_3:
      {
        floor_1_scene.draw_5()
      }
      break;
      case floor_2:
      {
        floor_2_scene.draw_1()
      }
      break;
      case floor_2_1 : {
        floor_2_scene.draw_2()
      }
      break;
      case floor_2_1_1 : {
        floor_2_scene.draw_3()
      }
      break;
      case floor_2_1_2 : {
        floor_2_scene.draw_4()
      }
      break;
      case floor_2_1_3: {
        floor_2_scene.draw_5()
      }
      break;
      case hint_1 : {
        hint_scene.draw_1()
      }
      break;
      case hint_2 : {
        hint_scene.draw_2()
      }
      break;
      case hint_3 : {
        hint_scene.draw_3()
      }
      break;
      case floor_2_1_1_1 : {
        floor_2_scene.draw_3_1()
      }
      break;
      case floor_2_1_1_2 : {
        floor_2_scene.draw_3_2()
      }
      break;
      case floor_2_1_1_3 : {
        floor_2_scene.draw_3_3()
      }
      break;
      case floor_2_1_1_4 : {
        floor_2_scene.draw_3_4()
      }
      break;
      case floor_2_1_1_5 : {
        floor_2_scene.draw_3_5()
      }
      break;
      case hint_4 : {
        hint_scene.draw_4()
      }
      break;
      case floor_2_1_2_1 : {
        floor_2_scene.draw_4_1 ()
      }
      break;
      case floor_2_1_2_2 : {
        floor_2_scene.draw_4_2 ()
      }
      break;
      case floor_2_1_2_3 : {
        floor_2_scene.draw_4_3 ()
      }
      break;
      case floor_2_1_2_4 : {
        floor_2_scene.draw_4_4 ()
      }
      break;
      case floor_2_1_2_5 : {
        floor_2_scene.draw_4_5 ()
      }
      break;
      case hint_5 : {
        hint_scene.draw_5()
      }
      break;
      case hint_6 : {
        hint_scene.draw_6()
      }
      break;
      case floor_2_1_3_1 : {
        floor_2_scene.draw_5_1 ()
      }
      break;
      case floor_2_1_3_2 : {
        floor_2_scene.draw_5_2 ()
      }
      break;
      case floor_2_1_3_3 : {
        floor_2_scene.draw_5_3 ()
      }
      break;
      case floor_2_1_3_4 : {
        floor_2_scene.draw_5_4 ()
      }
      break;
      case floor_2_1_3_5 : {
        floor_2_scene.draw_5_5 ()
      }
      break;
      case floor_3 : {
        floor_3_scene.floor_3_main()
      }
      break;
      case floor_3_1 : {
        floor_3_scene.floor_3_1()
      }
      break;
      case floor_3_level1 : {
        floor_3_scene.floor_3_level1()
      }
      break;
      case floor_3_level2 : {
        floor_3_scene.floor_3_level2()
      }
      break;
      case floor_3_level3 : {
        floor_3_scene.floor_3_level3()
      }
      break;
      case hint_7 : {
        hint_scene.draw_7()
      }
      break;
      case hint_8 : {
        hint_scene.draw_8()
      }
      break;
      case hint_9 :{ 
        hint_scene.draw_9()
      }
      break;
      case floor_4 : {
        floor_4_scene.floor_4_main()
      }
      break;
      case floor_4_1 : {
        floor_4_scene.floor_4_1()
      }
      break;
      case floor_4_level1 : {
        floor_4_scene.floor_4_level1()
      }
      break;
      case floor_4_level2 : {
        floor_4_scene.floor_4_level2()
      }
      break;
      case floor_4_level3 : {
        floor_4_scene.floor_4_level3()
      }
      break;
      case floor_100 : {
         floor_100_scene.draw()
      }
      break;
      case floor_100_1 : {
        floor_100_scene.draw_1()
      }
      break;
      case floor_100_key : {
        floor_100_scene.draw_2()
      }
      break;
      case floor_100_2 : {
        floor_100_scene.draw_key()
      }
      break;
      case floor_100_3 : {
        floor_100_scene.draw_final()
      }
      break;
      case hint_10 : {
        hint_scene.draw_10()
      }
      break;
      case hint_11 : {
        hint_scene.draw_11()
      }
      break;
      case hint_12 :{ 
        hint_scene.draw_12()
      }
      break;
    }
}

function mouseReleased(){
    switch(current_screen){
        case main_menu : {
            main_menu_scene.update()
        }
        break;
        case how_to_play : {
           main_menu_scene.how_to_play_mouse()
        }
        break;
        case about_game : {
          main_menu_scene.about_game_mouse()
       }
       break;
        case game_screen:
      {
        game_screen_scene.update_1()
      }
      break;
    case game_screen_1:
      {
        game_screen_scene.update_2()
      }
      break;
    case game_screen_2:
      {
        game_screen_scene.update_3()
      }
      break;
    case game_screen_3:
      {
        game_screen_scene.update_4()
      }
      break;
      case floor_1:
      {
        floor_1_scene.update_1()
      }
      break;

    case floor_1_1:
      {
        floor_1_scene.update_2()
      }
      break;

    case floor_1_1_1:
      {
        floor_1_scene.update_3()
      }

      break;
    case floor_1_1_2:
      {
        floor_1_scene.update_4()
      }
      break;
    case floor_1_1_3:
      {
        floor_1_scene.update_5()
      }
      break;
      case floor_2:
      {
        floor_2_scene.update_1()
      }
      break;
      case floor_2_1 : {
        floor_2_scene.update_2()
      }
      break;
      case hint_1 : {
        hint_scene.update_1()
      }
      break;
      case hint_2 : {
        hint_scene.update_2()
      }
      break;
      case hint_3 : {
        hint_scene.update_3()
      }
      break;
      case hint_4 : {
        hint_scene.update_4()
      }
      break;
      case hint_5 : {
        hint_scene.update_5()
      }
      break;
      case hint_6 : {
        hint_scene.update_6()
      }
      break;
      case floor_3 : {
        floor_3_scene.floor_3_main_update()
      }
      break;
      case floor_3_1 : {
        floor_3_scene.floor_3_1_update()
      }
      break;
      case hint_7 : {
        hint_scene.update_7()
      }
      break;
      case hint_8 : {
        hint_scene.update_8()
      }
      break;
      case hint_9 : {
        hint_scene.update_9()
      }
      break;
      case floor_3_level1 : {
        floor_3_scene.floor_3_level1_update()
      }
      break;
      case floor_3_level2 : {
        floor_3_scene.floor_3_level2_update()
      }
      break;
      case floor_3_level3: {
        floor_3_scene.floor_3_level3_update()
      }
      break;
      case floor_4 : {
        floor_4_scene.floor_4_main_update ()
      }
      break;
      case floor_4_1 : {
        floor_4_scene.floor_4_1_update()
      }
      break;
      case floor_4_level3 : {
        floor_4_scene.floor_4_level3_mouse()
      }
      break;
      case floor_100 : {
        floor_100_scene.update_mouse()
      }
      break;
      case floor_100_1 : {
        floor_100_scene.update_mouse_2()
      }
      break;
      case floor_100_2 : {
        floor_100_scene.update_final()
      }
      break;
      case hint_10 : {
        hint_scene.update_10()
      }
      break;
      case hint_11 : {
        hint_scene.update_11()
      }
      break;
      case hint_12 : {
        hint_scene.update_12()
      }
      break;
      case floor_100_3 : {
        floor_100_scene.draw_final_mouse()
      }
    }   
}

function keyReleased(){
    switch(current_screen){
        case main_menu:{
            main_menu_scene.key()
        }
        break;
        case floor_1_1_1:
            { 
              floor_1_scene.key_1()
            } 
            break;
          case floor_1_1_2:
            {
                floor_1_scene.key_2()
            }
            break;
          case floor_1_1_3:
            {
                floor_1_scene.key_3()
            }
            break;
          case floor_2_1_1 : {
            floor_2_scene.update_3_1()
          }
          break;
          case floor_2_1_1_1 : {
            floor_2_scene.update_3_2()
          }
          break;
          case floor_2_1_1_2 : {
            floor_2_scene.update_3_3()
          }
          break;
          case floor_2_1_1_3 : {
            floor_2_scene.update_3_4()
          }
          break;
          case floor_2_1_1_4 : {
            floor_2_scene.update_3_5()
          }
          break;
          case floor_2_1_1_5 : {
            floor_2_scene.update_3_6()
          }
          break;
          case floor_2_1_2 : {
            floor_2_scene.update_4_1()
          }
          break;
          case floor_2_1_2_1 : {
            floor_2_scene.update_4_2()
          }
          break;
          case floor_2_1_2_2 : {
            floor_2_scene.update_4_3()
          }
          break;
          case floor_2_1_2_3 : {
            floor_2_scene.update_4_4()
          }
          break;
          case floor_2_1_2_4 : {
            floor_2_scene.update_4_5()
          }
          break;
          case floor_2_1_2_5 : {
            floor_2_scene.update_4_6()
          }
          break;
          case floor_2_1_3 : {
            floor_2_scene.update_5_1()
          }
          break;
          case floor_2_1_3_1 : {
            floor_2_scene.update_5_2()
          }
          break;
          case floor_2_1_3_2 : {
            floor_2_scene.update_5_3()
          }
          break;
          case floor_2_1_3_3 : {
            floor_2_scene.update_5_4()
          }
          break;
          case floor_2_1_3_4 : {
            floor_2_scene.update_5_5()
          }
          break;
          case floor_2_1_3_5 : {
            floor_2_scene.update_5_6()
          }
          break;
          case floor_4_level1 : {
            floor_4_scene.floor_4_level1_key()
          }
          break;
          case floor_100_key : {
            floor_100_scene.update_key()
          }
    }
}

function keyPressed(){
  switch(current_screen){
    case floor_4_level2 : {
      floor_4_scene.floor_4_level2_key()
    }
    break;
  }
}

