
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionPairs() {
  idArray = new Array()

// BASIC PRACTICE

  idArray [1] = "Your work together for the first time. <u>Have a conversation to get to know each other</u>."
  idArray [2] = "Talk to each other <u>about your family</u>. Ask about information, appearance, daily activities, etc."
  idArray [3] = "You & your partner want to start exercising. Ask each other about <u>your activities in the week to find a time to go to the gym together</u>."
  idArray [4] = "You would like <u>to know each other’s best friend</u>. Have a conversation about them."
  idArray [5] = "Talk to each other <u>about your favorite drinks and food</u>."
  idArray [6] = "Have a conversation <u>about your diet</u>. Are you healthy?"
  idArray [7] = "Have a conversation <u>about each other's kitchens</u>."
  idArray [8] = "Talk about the <u>advantages and disadvantages of drinking water</u>."
  idArray [9] = "Have a conversation answering the next question: <u>What are the most popular kinds of restaurants in Chile</u>?"
  idArray [10] = "You are going to have <u>a party for the class. Decide what food/drinks you need</u>."
  idArray [11] = "Talk about <u>your future and make predictions about what will/might happen</u> in your personal life."
  idArray [12] = "Talk about <u>your future and make predictions about what will/might happen</u> in your family life."
  idArray [13] = "Describe <u>a job you would love doing</u>. Say why and explain what you must/have to do and the things you can/can’t do."
  idArray [14] = "Describe <u>a job you would hate doing</u>. Say why and explain what you must/have to do and the things you can/can’t do."
  idArray [15] = "Discuss <u>all the things you would need to take if you go on a trip to the desert</u> for a week with a friend."
  idArray [16] = "Discuss <u>all the things you would need to prepare if you go on a trip to the desert</u> for a week with a friend."

// INTERMEDIATE PRACTICE

  idArray [17] = "Discuss how <u>our grandparents' lives were, including how much easier / harder some things were</u> about 50 - 80 years ago."
  idArray [18] = "Have a conversation with your partner about <u>the things you do well and things you aren’t good at</u>, give examples and ask each other questions."
  idArray [19] = "Talk to your partner about all the things <u>you didn’t do this year</u>. Mention any reasons, including what you still can’t / couldn’t do and why. Remember to ask questions."
  idArray [20] = "Talk to your partner about <u>any interesting activities they did / have done lately</u>. Think about last weekend, last month or their last vacation. Ask and answer questions."
  idArray [21] = "Discuss what is <u>the best / worst job you know</u>. Talk about all the good and bad things, advantages, what you can/can’t do, etc. Mention if you would do it (or not), and why."

  idArray [22] = "Talk to each other <u>about the daily routine as a university student</u>, including the activities, times, frequency, meals, hobbies, family, transportation, etc. Take turns to ask / answer questions."
  idArray [23] = "Talk to each other <u>about the daily routine you had when you were in high school</u>. Describe the times, frequency, activities, meals, hobbies, etc. Take turns to ask / answer questions."
  idArray [24] = "You want to go to start exercising. Ask each other about <u>your activities and routines during the week to find a time to meet<u> at the gym."
  idArray [25] = "Talk to each other <u>about your family. Ask and answer questions</u> about personal information, appearance, daily activities & routines, hobbies, etc."
  idArray [26] = "Talk to each other <u>about your social networking activities and routines</u>, including platforms, frequency, activities, friends & connections, etc."
  idArray [27] = "Talk to each other <u>about sport and hobbies people like to practice regularly</u>, including the activities, the frequency, competitions, teams, etc. Exchange personal experiences."
  idArray [28] = "Discuss <u>the hobbies and sports younger people like to practice</u>, including the activities, the frequency, the gear and locations, etc. Askeach other about your personal experiences."
  idArray [29] = "Talk to each other about <u>different types of technology you have been using recently</u>, including how and why you have been using them. Take turns to ask / answer questions, including follow-up questions."
  idArray [30] = "Talk to each other about your<u> knowledge and experiences of your favourite[🇬🇧] music groups or singers</u>, including the ones you have heard of and how you have consumed their music (on YouTube, at a concert etc)."
  idArray [31] = "Talk to each other about <u>the last time you played sport or did some physical exercise</u>, including when, where, and who you were with. Take turns to ask / answer questions, including follow-up questions."
  idArray [32] = "Talk about <u>some good news you received </u>(you passed an exam, you won a prize, or a family member had a baby etc), including when this was, what you were doing when you received the news and how you felt."
  idArray [33] = "Talk about <u>the last time you celebrated something (someone’s birthday, a wedding etc)</u>, including when, where, and who was there. Take turns to ask / answer questions, including follow-up questions."

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectpairs").onclick = myFunctionPairs;
  randomParagraph = Math.floor(Math.random()*33);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultpairs").innerHTML = idArray[randomParagraph + 1];

// THIS LINE HIDES THE TEXT OF INDIVIDUAL TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#FFFF44';
  document.getElementById('resultpairs').style.color = '#000000';
}
