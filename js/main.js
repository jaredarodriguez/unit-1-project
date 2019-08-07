//PseudoCode

// pedalBoard is the parent object XXX

// there are 12 (connectionVariable) inside the pedalBoard XXX

// connectionVariables exist on the the left and right side of the pedal image OOO

//connectionVariable has a click state that returns true of false XXX

//the game will be initiated by a start button (hover button that when motioned tursn on music)
    //when the game is initiated two things happen 
    //the first thing that happens is a timer starts
    //the second thing that happens is a randomization initialization on our set of connectionVariable
    //this randomization changes one of the connections variables states from true to false 

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
 
/*----- cached elements -----*/

window.onload = function() {
    document.getElementById("my_audio").play();
}
//it's unclear if this is working// 
function  pauseMusic(){ 
    ween.pause();
}
let gameSet = setTimeout(pauseMusic, 2000)
/*----- event listeners -----*/

var flangerPedalInput = document.getElementById('flangerPedalInput');
var flangerPedalOutput = document.getElementById('flangerPedalOutput');
var fuzzPedalInput = document.getElementById('fuzzPedalInput');
var fuzzPedalOutput = document.getElementById('fuzzPedalOutput');
var heavyMetalPedalInput = document.getElementById('heavyMetalPedalInput');
var heavyMetalPedalOutput = document.getElementById('heavyMetalPedalOutput');
var octavePedalInput = document.getElementById('octavePedalInput');
var octavePedalOutput = document.getElementById('octavePedalOutput');
var reverbPedalInput = document.getElementById('reverbPedalInput');
var reverbPedalOutput = document.getElementById('reverbPedalInput');
var tremoloPedalInput = document.getElementById('tremoloPedalInput');
var tremoloPedalOutput = document.getElementById('tremoloPedalOutput'); 

/*----- functions -----*/

flangerPedalInput.addEventListener('click', function(fix){
    console.log(fix.target);
    console.log(fix);
})


// init ();

// function init() {
    
    // setInterval(function run() {
    //     console.log(i);
    //     i++
    //   }, 100);


var pedalBoard  = [
    {flangerPedalInput: true},
    {flangerPedalOutput: true}, 
    {fuzzPedalInput: true},
    {fuzzPedalOutput: true},
    {heavyMetalPedalInput: true}, 
    {heavyMetalPedalOutput: true},
    {octavePedalInput: true},
    {octavePedalOutput: true},
    {reverbPedalInput: true},
    {reverbPedalOutput: true}, 
    {tremoloPedalInput: true},
    {tremoloPedalOutput: true}
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}; 

function corrupt(){
    let randomIndex = getRandomInt(0, 12)
    let key = Object.keys(pedalBoard[randomIndex]);
    pedalBoard[randomIndex][key[0]] = false;
    console.log(pedalBoard[randomIndex])
};

//this is a function to randomly change one of the key:value pairs in the pedalBoard from true to false 
