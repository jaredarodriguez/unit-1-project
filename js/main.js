//PseudoCode

//audio bug troubleshooting
//the game will be initiated by a start button (hover button that when motioned tursn on music)
//when the game is initiated two things happen
//the first thing that happens is a timer starts
//the second thing that happens is a randomization initialization on our set of connectionVariable
//this randomization changes one of the connections variables states from true to false

//front end user portion
//connectionVariable has a click state that returns true of false XXX

//CSS portion
// connectionVariables exist on the the left and right side of the pedal image OOO

//if the pedalBoard does not have all connection variables in a state of true it does not work
//while the pedalBoard is in an incomplete state of true the timer continues
//the timer manipulates a meter we call: fanMeter
//fanMeter is a visual representation of how much time the user has left until time reaches 0
//the closer the timer gets to zero the closer the bar goes from full to empty
//while pedalBoard is in an incomplete state of truthy the user is prompted to click around pedal board to find what connectionVariable is falsy

//if the user locates the  falsy connectionVariable the user wins
//if the user wins a win sequence occurs
//if the user does not locate the falsy connectionVariable the user loses
//if the user loses a lose sequence occurs

/*----- app's states (variables) -----*/
let randomIndex;

var pedalBoard = [
  { flangerPedalInput: true },
  { flangerPedalOutput: true },
  { fuzzPedalInput: true },
  { fuzzPedalOutput: true },
  { heavyMetalPedalInput: true },
  { heavyMetalPedalOutput: true },
  { octavePedalInput: true },
  { octavePedalOutput: true },
  { reverbPedalInput: true },
  { reverbPedalOutput: true },
  { tremoloPedalInput: true },
  { tremoloPedalOutput: true }
];

/*----- cached elements -----*/
//it's unclear if any of this is working right now

window.onload = function() {
  document.getElementById("my_audio").play();
};

// function  pauseMusic(){
//     ween.pause();
// }
// let gameSet = setTimeout(pauseMusic, 2000)
/*----- event listeners -----*/

let flangerPedalInput = document.getElementById("flangerPedalInput");
let flangerPedalOutput = document.getElementById("flangerPedalOutput");
let fuzzPedalInput = document.getElementById("fuzzPedalInput");
let fuzzPedalOutput = document.getElementById("fuzzPedalOutput");
let heavyMetalPedalInput = document.getElementById("heavyMetalPedalInput");
let heavyMetalPedalOutput = document.getElementById("heavyMetalPedalOutput");
let octavePedalInput = document.getElementById("octavePedalInput");
let octavePedalOutput = document.getElementById("octavePedalOutput");
let reverbPedalInput = document.getElementById("reverbPedalInput");
let reverbPedalOutput = document.getElementById("reverbPedalInput");
let tremoloPedalInput = document.getElementById("tremoloPedalInput");
let tremoloPedalOutput = document.getElementById("tremoloPedalOutput");

/*----- functions -----*/
// init ()

//for each loop to go through the array of objects

// //locating the random index
// //if random index === event target name then it becomes true

// TODO in the flipCondition function figuer out how to check if the pedal is broken

// run me through the entire flipCondition line by line
/********************************THIS IS THE CLICK EVENT ****************************/
function flipCondition(event) {
  //creates a function that points to an event
  let clickedButtonId = event.target.id;
  //the thing that was clicked now becomes my clickedButtonID
  //   let itemToCheck = pedalBoard[clickedButtonId]
  //   console.log(clickedButtonId);
  //   let itemToCheck = pedalBoard.filter(item => item[clickedButtonId])[0];
  let itemToCheck = pedalBoard[randomIndex];

  //item[clickedButtonId])[0]; //-> {tremoloPedalOutput : true} my new variable itemToCheck now is asking to go through the pedalBoard array check out each item
  //   console.log(itemToCheck); // clickedButtonId = 'string'
  //   let itemKey = Object.keys(itemToCheck)[0]

  //my new variable takes itemToCheck and gets its key values
  //   console.table({
  //     ...itemToCheck,
  //     clickedButtonId,
  //     value: itemToCheck[clickedButtonId]
  //   });

  checkIfBroken(itemToCheck, clickedButtonId);
  // ************************************************

  // we can use item to check to check the condition but we need to get its value

  //   console.log("clicked");
  //   if (itemToCheck === clickedButtonId) {
  //     return true;
  //   }
  //   return false;
}

flangerPedalInput.addEventListener("click", flipCondition);
flangerPedalOutput.addEventListener("click", flipCondition);
fuzzPedalInput.addEventListener("click", flipCondition);
fuzzPedalOutput.addEventListener("click", flipCondition);
heavyMetalPedalInput.addEventListener("click", flipCondition);
heavyMetalPedalOutput.addEventListener("click", flipCondition);
octavePedalInput.addEventListener("click", flipCondition);
octavePedalOutput.addEventListener("click", flipCondition);
reverbPedalInput.addEventListener("click", flipCondition);
reverbPedalOutput.addEventListener("click", flipCondition);
tremoloPedalInput.addEventListener("click", flipCondition);
tremoloPedalOutput.addEventListener("click", flipCondition);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function corrupt() {
  randomIndex = getRandomInt(0, 12); //of type number
  //   console.table({ randomIndex, pedalBoard }); // prints a table of a given objects key value pairs
  let key = Object.keys(pedalBoard[randomIndex]);
  //maybe an extra step
  pedalBoard[randomIndex][key[0]] = false;
  //   console.log(pedalBoard[randomIndex]);
}

function checkIfBroken(obj, id) {
  //   console.log("hit");
  //   console.log(obj, id);
  if (obj[id] === false) {
    pedalBoard[randomIndex][id] = true;
  }
}

//this is a function to randomly change one of the key:value pairs in the pedalBoard from true to false
