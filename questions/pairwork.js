
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionPairs() {
  idArray = new Array()
  idArray [1] = "<u>NOTICE:</u> There are no tests being carried out today!"
  idArray [2] = "<u>SAMPLE:</u> Talk to each other about your daily routine."
  idArray [3] = "<u>SAMPLE:</u> Talk to each other about the people in your family."

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectpairs").onclick = myFunctionPairs;
  randomParagraph = Math.floor(Math.random()*3);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultpairs").innerHTML = idArray[randomParagraph + 1];

// THIS LINE HIDES THE TEXT OF INDIVIDUAL TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#FFFF44';
  document.getElementById('resultpairs').style.color = '#000000';
}
