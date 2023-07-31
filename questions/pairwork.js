
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionPairs() {
  idArray = new Array()
  idArray [1] = "Practice: Talk to each other about your favorite foods and drinks."
  idArray [2] = "Practice: Talk to each other about your daily routine and pastimes."
  idArray [3] = "Practice: Talk to each other about about your ideal vacation."
  idArray [4] = "Notice: These are practice questions only. There are no interviews today!"

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectpairs").onclick = myFunctionPairs;
  randomParagraph = Math.floor(Math.random()*4);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultpairs").innerHTML = idArray[randomParagraph + 1];       

// THIS LINE HIDES THE TEXT OF INDIVIDUAL TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#FFFF44';
  document.getElementById('resultpairs').style.color = '#000000';
}
