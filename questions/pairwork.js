
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionPairs() {
  idArray = new Array()

// Unit 1

  idArray [1] = "Discuss the <u>house chores necessary to keep you home nice & clean</u>, including the activities, the appropriate frequency & who has to do them. (Take turns)."

// Unit 2

  idArray [2] = "Talk to each other about the <u>groceries you need to buy to prepare a delicious lunch together</u>. Talk about what you will make, the ingredients, amounts, containers, and where they are inside the supermarket."
  idArray [3] = "Talk to each other about <u>the meals you eat during the day</u>. Ask each other questions about the different meals, the times or frequency, the ingredients, desserts, drinks, condiments, etc."

// Unit 3

  idArray [4] = "Talk to each other about <u>the outdoor activities you frequently did when you were a child</u>. Ask each other questions about the different sports or games, the times or frequency, the places and the people included, etc."
  idArray [5] = "Talk to each other about <u>all the things you did last year (2021/2022)</u>. Ask each other questions about the different activities you did, the places you visited, the people you met, the things you bought, what you ate, the movies or series you saw, etc."
  idArray [6] = "Talk to each other about <u>the last time you went to the beach or a swimming pool</u>. Ask each other questions about the location you visited, the different activities you did, the people with whom you went there, what you ate there, etc."
  idArray [7] = "- Plan your ideal vacation. Where do you want to go? How much money do you need? How much time are you staying there? What are you going to pack?"

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectpairs").onclick = myFunctionPairs;
  randomParagraph = Math.floor(Math.random()*7);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultpairs").innerHTML = idArray[randomParagraph + 1];

// THIS LINE HIDES THE TEXT OF INDIVIDUAL TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#FFFF44';
  document.getElementById('resultpairs').style.color = '#000000';
}
