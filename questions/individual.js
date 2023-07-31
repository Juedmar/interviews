
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionOne() {
  idArray = new Array()
  idArray [1] = "<u>Talk about your bedroom or living room.</u> Mention all the things you can see there, where they are, if you like them, the colors & shapes, the amount of objects, etc. Remember to use the correct prepositions."
  idArray [2] = "<u>Describe your kitchen in detail.</u> Mention all the things you can see there, where they are, if you like them, the colors & shapes, the amount of objects, etc. Remember to use the correct prepositions."
  idArray [3] = "Talk about the <u>home improvements you need to do around your home</u>. Mention the things you should repair, how frequently you should do them, how long they have been pending. Can you do them yourself?"
  idArray [4] = "What <u>cleaning job do you & your family do</u> to keep your house looking its best? Mention the chores, supplies, times & frequency, etc."
  idArray [5] = "If you could buy the house of your dreams, <u>what features would you like to have in your ideal house / apartment?</u> Swimming pool, basketball court, barbecue area, a private cinema? Why?"
  idArray [6] = "Choose <u>one housekeeping activity you will have to do every day & another you won’t ever have to do again</u> for the rest of your life. Explain your choices."
  idArray [7] = "Talk about all the <u>things you used to do when you were in high school</u>. Mention the activities, the places, the people, the food, hobbies, frequency, etc."
  idArray [8] = "<u>Talk about all your favorite food</u>. Mention why you like it, when and where you eat it, how often you eat it, etc. What are the main ingredients? How do you prepare it?"
  idArray [9] = "<u>Talk about all the delicious snacks you know</u>. Mention what they are, why you like it, how often you eat it, etc. What are the main ingredients? In what format or containers do they come?"
  idArray [10] = "<u>Talk about all the vegetables you know</u>. Mention the names, why you like them, how often you eat them, etc. What are the main ingredients? In what format or containers do they come?"
  idArray [11] = "Talk about the <u>prepared meals or dishes you eat when you are very hungry</u>. Mention the names, why you like them, what the main ingredients are, if you eat them for breakfast, lunch or dinner, etc."

  idArray [12] = "- Talk about <u>what you were doing at 4pm yesterday</u> (Include the past continuous in your answer)."
  idArray [13] = "- Talk about <u>what you were doing at 9pm yesterday</u> (Include the past continuous in your answer)."
  idArray [14] = "- Before you started your degree in multilingual tourism management, <u>had you considered studying something else</u>? (Include the Past Perfect in your answer)."
  idArray [15] = "- How do you feel <u>when you practice your favorite hobby</u> after a long and tiring day? Include: modifiers with adjectives, and extreme adjectives."
  idArray [16] = "- How do you feel <u>when you have to give a class presentation</u>? Include: modifiers with adjectives, and extreme adjectives."
  idArray [17] = "- How do you feel <u>when you receive a high grade for a difficult exam</u>? Include: modifiers with adjectives, and extreme adjectives."
  idArray [18] = "- Before you started your degree in multilingual tourism management, <u>how much English had you learned</u>? (Include the Past Perfect in your answer)."
  idArray [19] = "- Before you started your degree in multilingual tourism management, <u>had you travelled much in Chile</u>? (Include the Past Perfect in your answer)."

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectone").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*19);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultone").innerHTML = idArray[randomParagraph + 1];

// THIS LINE TOGGLES BETWEEN INDIVIDUAL & PAIR WORK TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#000000';
  document.getElementById('resultpairs').style.color = '#FFFF44';

}
