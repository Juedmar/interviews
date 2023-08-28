
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionOne() {
  idArray = new Array()

// UNIT 2

  idArray [1] = "<u>Talk about all your favorite food</u>. Mention why you like it, when and where you eat it, how often you eat it, etc. What are the main ingredients? How do you prepare it?"
  idArray [2] = "<u>Talk about all the delicious snacks you like</u>. Mention what they are, why you like them, how often you eat them, the amounts, etc. In what sizes, formats or containers do they come?"
  idArray [3] = "<u>Describe the meals or dishes you eat when you are very hungry</u>, including the names, the types of meal, why you like them, how often you eat them, the main ingredients, etc."
  idArray [4] = "<u>Talk about your pastimes & hobbies</u>. Mention what activities you like doing, when you do them, how frequent, why you like them, etc. Do you do them by yourself, or with your friends?"
  idArray [5] = "- Which was your favorite food when you were a kid? Talk about your favorite snacks when you were a kid / in school."

// UNIT 3

  idArray [6] = "Talk about <u>the sport activity & exercise you did when you were in high school</u>, including those your liked & didn't like so much, for how long you exercised, where you went to do them, etc."
  idArray [7] = "Talk about <u>the last time you went camping, went on a road trip or stayed at a friend's house</u>, including how long it was, where you stayed, what you did, what you ate, the clothes you were wearing, etc."
  idArray [8] = "Talk about <u>your last trip on summer vacation, including the activities you did</u>, including the people you were with & the people you met, the food you ate or prepared, the restaurants you visited, etc."
  idArray [9] = "Talk about <u>the last time you were outside in nature, such as the countryside, a mountain, a forest, river or lake</u>. You can mention what you saw there, the activities you did, the people you met, how long you were there, etc."
  idArray [10] = "- What was the last movie you saw? Talk about what the main story was, who were the main characters, what happened to them."

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectone").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*10);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultone").innerHTML = idArray[randomParagraph + 1];

// THIS LINE TOGGLES BETWEEN INDIVIDUAL & PAIR WORK TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#000000';
  document.getElementById('resultpairs').style.color = '#FFFF44';

}
