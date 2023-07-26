
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionPairs() {
  idArray = new Array()
  idArray [1] = "Talk to each other <u>about the daily routine as a university student</u>, including the activities, times, frequency, meals, hobbies, family, transportation, etc. Take turns to ask / answer questions."
  idArray [2] = "Talk to each other <u>about the daily routine you had when you were in high school</u>. Describe the times, frequency, activities, meals, hobbies, etc. Take turns to ask / answer questions."
  idArray [3] = "You want to start exercising at the gym. Ask each other about <u>your activities and routines during the week to find a time to meet<u> at the gym."
  idArray [4] = "Talk to each other <u>about your family. Ask and answer questions</u> about personal information, appearance, daily activities & routines, hobbies, etc."
  idArray [5] = "Talk to each other <u>about your social networking activities and routines</u>, including platforms, frequency, activities, friends & connections, etc."
  idArray [6] = "Talk to each other <u>about sport and hobbies people like to practice regularly</u>, including the activities, the frequency, competitions, teams, etc. Exchange personal experiences."
  idArray [7] = "Discuss <u>the hobbies and sports younger people like to practice</u>, including the activities, the frequency, the gear and locations, etc. Ask each other about your personal experiences."
  idArray [8] = "Talk to each other about your<u> knowledge and experiences of your favourite[🇬🇧] music groups or singers</u>, including the ones you have heard of and how you have consumed their music (on YouTube, at a concert etc)."
  idArray [9] = "Talk to each other about <u>the last time you played sport or did some physical exercise</u>, including when, where, and who you were with. Take turns to ask / answer questions, including follow-up questions."
  idArray [10] = "Talk about <u>some good news you received </u>(you passed an exam, you won a prize, or a family member had a baby etc), including when this was, what you were doing when you received the news and how you felt."
  idArray [11] = "Talk about <u>the last time you celebrated something (someone’s birthday, a wedding etc)</u>, including when, where, and who was there. Take turns to ask / answer questions, including follow-up questions."
  idArray [12] = "Talk to each other about <u>different types of technology you have been using recently</u>, including how and why you have been using them. Take turns to ask / answer questions, including follow-up questions."

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectpairs").onclick = myFunctionPairs;
  randomParagraph = Math.floor(Math.random()*11);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultpairs").innerHTML = idArray[randomParagraph + 1];

// THIS LINE HIDES THE TEXT OF INDIVIDUAL TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#FFFF44';
  document.getElementById('resultpairs').style.color = '#000000';
}
