
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionOne() {
  idArray = new Array()
  idArray [1] = "Practice: What is your full name?"
  idArray [2] = "Practice: How are you doing today?"
  idArray [3] = "Practice: What is your favorite color?"
  idArray [4] = "Practice: What is your e-mail address?"
  idArray [5] = "Practice: What is your favorite season?"
  idArray [6] = "Practice: How often do you go shopping?"
  idArray [7] = "Practice: How do you spell your last name?"
  idArray [8] = "Practice: What is your favorite food or drink?"
  idArray [9] = "Practice: What is your favorite day of the week?"
  idArray [10] = "Practice: What is your favorite month of the year?"
  idArray [11] = "Practice: What time do you get up in the morning?"
  idArray [12] = "Practice: What is your favorite sport? Do you practice often?"
  idArray [13] = "Practice: What do you usually do during long weekeneds or holidays?"
  idArray [14] = "Practice: Do you have any hobbies? When did you start doing them?"
  idArray [15] = "Notice: These are practice questions only. There are no interviews today!"

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectone").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*15);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultone").innerHTML = idArray[randomParagraph + 1];

// THIS LINE TOGGLES BETWEEN INDIVIDUAL & PAIR WORK TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#000000';
  document.getElementById('resultpairs').style.color = '#FFFF44';
}
