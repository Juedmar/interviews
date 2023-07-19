
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionOne() {
  idArray = new Array()
  idArray [1] = "<u>NOTICE:</u> There are no tests being carried out today!"
  idArray [2] = "<u>SAMPLE:</u> How often do you go shopping? What do you usually buy?"
  idArray [3] = "<u>SAMPLE:</u> What is your favorite day of the week? Why?"

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectone").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*3);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultone").innerHTML = idArray[randomParagraph + 1];

// THIS LINE TOGGLES BETWEEN INDIVIDUAL & PAIR WORK TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#000000';
  document.getElementById('resultpairs').style.color = '#FFFF44';
}
