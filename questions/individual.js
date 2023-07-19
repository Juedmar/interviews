
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionOne() {
  idArray = new Array()
  idArray [1] = "What will you do <u>if it rains every day this weekend</u>?"
  idArray [2] = "What will you do <u>if you meet the person of your dreams</u>?"
  idArray [3] = "What will you do <u>if the electricity goes out in your home tonight</u>?"
  idArray [4] = "What will you do <u>if you lost your phone</u>?"
  idArray [5] = "What will you do <u>if you forget an important birthday</u>, like your best friend or a family member?"
  idArray [6] = "If you start university again, <u>what area or program will you choose</u>?"

  idArray [7] = "If you go to the <u>supermarket, what items will you buy</u>?"
  idArray [8] = "<u>If you go out for dinner this evening</u>, what will you eat?"
  idArray [9] = "<u>If somebody invites you to go to the mall</u>, to what places will you go? What will you do?"
  idArray [10] = "If you have some free time to <u>go shopping, what stores will you visit</u>? What will you buy?"
  idArray [11] = "If you want to <u>become healtier, what food should you eat more often</u>?"

  idArray [12] = "<u>If you had only one week to live</u>, what would you do?"
  idArray [13] = "If you could have any animal as a pet, <u>what animal would you want</u>? Why?"
  idArray [14] = "If you could create a superhero, <u>what would their power and name be</u>?"
  idArray [15] = "If you could master a new ability very well, <u>what would you like to learn</u>?"
  idArray [16] = "What would you tell yourself <u>if you could go back in time and talk to your younger self</u>?"

  idArray [17] = "Talk about your <u>favorite clothes</u>. Describe the types of clothes, materials and colors."
  idArray [18] = "Think about <u>2 or 3 professions</u>. Describe <u>who</u> does those jobs and what activities they do."

  idArray [19] = "Think about your favorite <u>lunch or dinner. Describe the process</u> of how the food is prepared."
  idArray [20] = "Think about your favorite <u>snack or dessert. Describe the process</u> of how the food is prepared."

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectone").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*20);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultone").innerHTML = idArray[randomParagraph + 1];

// THIS LINE TOGGLES BETWEEN INDIVIDUAL & PAIR WORK TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#000000';
  document.getElementById('resultpairs').style.color = '#FFFF44';

}
