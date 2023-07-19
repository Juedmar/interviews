
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionPairs() {
  idArray = new Array()
  idArray [1] = "You are going to have a party together. Talk to each other about <u>the food and drinks that you will buy</u>."
  idArray [2] = "Talk to each other about <u>how you think inventions & new technologies will change our lives</u> in the future."
  idArray [3] = "Talk to each other about <u>your shopping habits</u>, including the types of shops, things you buys in those shops, how often, etc."

  idArray [4] = "Talk to each other about <u>what you would do if you had superpowers</u>."
  idArray [5] = "Talk to each other about <u>what will you do when you graduate from university</u>?"
  idArray [6] = "Talk to each other about <u>what will happen if there is a very serious financial crisis</u>?"
  idArray [7] = "Talk to each other about <u>what you would do if you were elected the leader of your country</u>?"
  idArray [8] = "Talk to each other about <u>what you would do if you were the richest person in the world</u>?"

  idArray [9] = "Imagine the <u>future of your dreams. Make some future predictions together.</u>"
  idArray [10] = "Talk to each other about <u>the environment. What will happen in the future</u>?"

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectpairs").onclick = myFunctionPairs;
  randomParagraph = Math.floor(Math.random()*10);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultpairs").innerHTML = idArray[randomParagraph + 1];

// THIS LINE HIDES THE TEXT OF INDIVIDUAL TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#FFFF44';
  document.getElementById('resultpairs').style.color = '#000000';
}
