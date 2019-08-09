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

function reload() {
  location.reload();
}

function playMusic() {
  var introTrack = document.getElementById("first_audio");
  introTrack.play();
  setTimeout(corrupt, 1000);
}

function startTime() {
  checkTime();
}

/*----- event listeners -----*/
let timeHandle = document.getElementById("timer");
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

function flipCondition(event) {
  let clickedButtonId = event.target.id;
  let itemToCheck = pedalBoard[randomIndex];
  if (attemptToFix(itemToCheck, clickedButtonId)) {
    console.log("you won");
    //document.getElementById(audio.play)//
  } else {
    console.log("try again");
  }
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

var seconds_remaining = 15;

function checkTime() {
  document.getElementById("timer").innerHTML =
    "You have " + seconds_remaining + " seconds left before you ruin the gig!";
  if (seconds_remaining <= 0) {
    alert("You blew it!");
  } else {
    seconds_remaining = seconds_remaining - 1;
    setTimeout(checkTime, 1000);
  }
}

function corrupt() {
  randomIndex = Math.floor(Math.random() * pedalBoard.length);
  let key = Object.keys(pedalBoard[randomIndex]);
  pedalBoard[randomIndex][key[0]] = false;
}

function attemptToFix(obj, key) {
  if (obj[key] === false) {
    pedalBoard[randomIndex][key] = true;
    return true;
  }
  return false;
}
