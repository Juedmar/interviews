
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionOne() {
  idArray = new Array()
  idArray [1] = "Talk about <u>all the things that are happening right now</u> in your life, including your family or personal life, education, sports, music or hobbies, etc. Also, say why you like (or dislike) doing them."
  idArray [2] = "Imagine you are in the middle of the city, in a busy downtown area. <u>Describe all the things happening in your imaginary city</u> at the current moment. You can use your imagination."
  idArray [3] = "<u>Describe your bedroom in detail</u>, including all the things you can see there, where they are, the colors and sizes, the number of things, etc. Remember to use correct prepositions."
  idArray [4] = "<u>Describe your living room in detail</u>, including all the things you can see there, where they are, the colors and sizes, the number of things, etc. Remember to use correct prepositions."
  idArray [5] = "<u>Describe your kitchen in detail</u>, including all the things you can see, where they are, the colors and sizes, the number of things, etc. Remember to use correct prepositions."
  idArray [6] = "<u>Talk about your home and family chores & obligations</u>, including all the things you have to do, the frequency, why you like (or dislike) doing them. What happens if you don't do them?"
  idArray [7] = "<u>Talk about any house </u>chores people with pets need to do</u> to keep their house clean. Mention all the things they have to do, how frequently they must do them. Why is it necessary to do them?"
  idArray [8] = "<u>Talk about all your favorite food</u>. Mention why you like it, when and where you eat it, how often you eat it, etc. What are the main ingredients? How do you prepare it?"
  idArray [9] = "<u>Talk about all the delicious snacks you like</u>. Mention what they are, why you like them, how often you eat them, the amounts, etc. In what sizes, formats or containers do they come?"
  idArray [10] = "<u>Talk about all the vegetables you like or dislike</u>, including their names, why you like or dislike them, how often you eat them, etc. How do they taste? In what format or containers do they come?"
  idArray [11] = "<u>Describe the meals or dishes you eat when you are very hungry</u>, including the names, the types of meal, why you like them, how often you eat them, the main ingredients, etc."
  idArray [12] = "<u>Talk about your pastimes & hobbies</u>. Mention what activities you like doing, when you do them, how frequent, why you like them, etc. Do you do them by yourself, or with your friends?"

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectone").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*12);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultone").innerHTML = idArray[randomParagraph + 1];

// THIS LINE TOGGLES BETWEEN INDIVIDUAL & PAIR WORK TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#000000';
  document.getElementById('resultpairs').style.color = '#FFFF44';
}
