//PseudoCode

//pedalBoard is the parent object 
//there are 12 (connectionVariable) inside the pedalBoard 
//all connectionVariables exist on the the left and right side of the pedal image
//connectionVariable has a click state 
//the game will be initiated by a start button  
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


/*----- app's states (variables) -----*/
let pedalBoard, results


/*----- cached elements -----*/

/*----- event listeners -----*/

/*----- functions -----*/





