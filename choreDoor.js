let numClosedDoors = 3;
let openDoor1 = '';
let openDoor2 ='';
let openDoor3 ='';
let currentlyPlaying = true;
const setDoors= ()=> { 
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg"
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg" 
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg" 
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg" 
let startButton = document.getElementById('start');


const randomChoreDoorGenerator = () =>
{
    let choreDoor = Math.floor(Math.random()* numClosedDoors);
    
    if(choreDoor===0)
    {  openDoor1 = botDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = beachDoorPath; 
     
    
    }
    else if (choreDoor===1)
    { openDoor2 = botDoorPath;
        openDoor3 = spaceDoorPath;
        openDoor1 = beachDoorPath; 
       
    
    }
    else
    {openDoor3 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor1 = spaceDoorPath;
       
     }
      
      
    
    

}
//onlick changes the current door state , if doorImage1 is not clicked yet.




//playdoor will call the function play door which will descrease the number of times the click is pressed. and user is allowed to click only three time and then the game is over
const playDoor = (door) =>
{
   numClosedDoors--;
   if(numClosedDoors === 0)
   {
       gameOver('win');
    }
    else if (isBot(door)) {
        gameOver();
    }
}

//isclicked checks if the door has been open or not, if the door value is same as the closedDoor source path, it means the door is not opened . it should return true and allow the player to click it and change the cuurrent state of the door,
//if the door value is not equalt to closeddoorpath src value, then the clicking will not change the current sate of door, as it shows that it has been clicked alreday

const isClicked = (door) => {
    if (door === closedDoorPath) {
        return false;
    }
    else {
        return true;
    }
    }

    //a function to determine if a door‘s src contains the game-ending ChoreBot image
    const isBot = (door) =>
    {
        if (door === botDoorPath)
        { return true; }
        else { return false; }
    } 


    const gameOver = (status)=> {
    if(status === 'win')
    { startButton.innerHTML = 'you win! Play again?'; }
    else 
    { startButton.innerHTML = 'Game over! Play again?';  }
    currentlyPlaying = false;
    }

    doorImage1.onclick = () => { if(!isClicked(doorImage1.src) && currentlyPlaying) {
        doorImage1.src = openDoor1;
        
        playDoor(openDoor1); 
        
    }
        };
        
    doorImage2.onclick = ()=> { 
         if(!isClicked(doorImage2.src) && currentlyPlaying){
        doorImage2.src= openDoor2; 
        playDoor(openDoor2);}

        };
        
    doorImage3.onclick = ()=> { if(!isClicked(doorImage3.src) && currentlyPlaying) {
        doorImage3.src = openDoor3; 
        playDoor(openDoor3);
        }
        };
        //restart the game by calling startround function without requiring page refresh
        //the condition prevents the user to restart the game in the middle of the game.
startButton.onclick = () => {
    if(!currentlyPlaying) { 
    startRound();}
 }


 //reset the values of doors and everything to original values.
const startRound = () => { 
doorImage1.src = closedDoorPath;
doorImage2.src = closedDoorPath;
doorImage3.src = closedDoorPath;
numClosedDoors === 3;
startButton.innerHTML = "Good luck" ;
currentlyPlaying = true;
randomChoreDoorGenerator();
    }    

    startRound();
}
