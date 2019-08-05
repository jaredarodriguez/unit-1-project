//PseudoCode

// pedalBoard is the parent object 

// there are 12 (connectionVariable) inside the pedalBoard 

// connectionVariables exist on the the left and right side of the pedal image

//connectionVariable has a click state that returns true of false 

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

/*----- constants -----*/
let pedalBoard = {
    pedal1: "Flanger, 
    pedal2: "Fuzz", 
    pedal3: "Heavy-metal", 
    pedal4: "Octave",
    pedal5: "Reverb",
    pedal6: "Tremolo"
}; 




/*----- app's states (variables) -----*/



/*----- cached elements -----*/
const results  = {
    fuzz: document.getElementById: true, 
    flangerPedalOutput: [], 
    fuzzPedalInput: [], 
    fuzzPedalOutput: [], 
    heavyMetalPedalInput: [], 
    heavyMetalPedalOutput: [], 
    octavePedalInput: [], 
    octavePedalOutput: [], 
    reverbPedalInput: [], 
    reverbPedalOutput: [], 
    tremoloPedalInput: [],
    tremoloPedalOutput: [], 
}; 
/*----- event listeners -----*/
document.getElementById()
    .addEventListener('click', troubleShoot);
//unsure if i need to getElementById on each pedal and how to implement// 


/*----- functions -----*/
function init () {
    pedalBoard = {
        pedal1: "true",
        flangerPedalOutput: "true", 
        fuzzPedalInput: "true", 
        fuzzPedalOutput: "true",
        heavyMetalPedalInput: "true", 
        heavyMetalPedalOutput: "true", 
        octavePedalInput: "true", 
        octavePedalOutput: "true", 
        reverbPedalInput: "true", 
        reverbPedalOutput: "true", 
        tremoloPedalInput: "true", 
        tremoloPedalOutput: "true"
    }
//above is what a completed pedalBoard circuit looks like// 
 
 //above is the open pedalBoard for results to be filled// 

 function render() {
//render if board has complete circuit// 


 }; 

 function troubleShoot(){
    console.log('clicked'); 
 }
}



