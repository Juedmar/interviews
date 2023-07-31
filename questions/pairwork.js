
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionPairs() {
  idArray = new Array()
  idArray [1] = "<u>Talk to each other about your homes</u>, including the type & size of your house, the different rooms, any furniture & electric appliances in your house, etc. (Take turns)."
  idArray [2] = "Discuss the <u>house chores necessary to keep you home nice & clean</u>, including the activities, the appropriate frequency & who has to do them. (Take turns)."
  idArray [3] = "<u>You are going to prepare a delicious lunch together.</u> Discuss what you will make, the ingredients you need to buy, the units & containers (amounts), and where to go in the supermarket."
  idArray [4] = "Talk to each other about <u>the meals you eat during the day</u>. Ask and answer questions about the meals, the times & frequency, the ingredients, desserts, drinks, condiments, etc."
  idArray [5] = "<u>Discuss the meals you will order together at a restaurant</u> (for lunch or dinner). Mention the starters & main dishes, drinks, desserts, extra ingredients, prices, etc. (Take turns)."
  idArray [6] = "Role-play <u>a polite conversation between a waiter/waitress and the customer</u> at a nice restaurant. Make sure the customer is happy with the food and gives you a generous tip."

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectpairs").onclick = myFunctionPairs;
  randomParagraph = Math.floor(Math.random()*6);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultpairs").innerHTML = idArray[randomParagraph + 1];

// THIS LINE HIDES THE TEXT OF INDIVIDUAL TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#FFFF44';
  document.getElementById('resultpairs').style.color = '#000000';
}
