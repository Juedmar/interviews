
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionOne() {
  idArray = new Array()

// UNIT 2:

  idArray [1] = "Talk about <u>some activities you have been doing recently in your free time</u>, including the hobbies you've been doing, the food you've been eating, the movies/series you've been watching, the vide games you've been playing, etc."
  idArray [2] = "<u>Describe your favorite sports, pastime activities or or hobbies you like doing</u>, including the activities, the frequency, the gear, the locations and people with whom you do them."
  idArray [3] = "Talk about <u>the sport activity, exercise & hobbies you did when you were in high school</u>, including those you liked & didn't like so much, for how long you exercised, where you went to do them, etc."

// UNIT 3:
  idArray [4] = "Think about <u>someone you know well and describe this person</u>, including their physical appearance, their personality</u> and a little bit of their daily routine."
  idArray [5] = "Talk about <u>someone you know very well & compare yourself to this person</u>, including their physical appearance, personality, hobbies, likes/dislikes, etc."
  idArray [6] = "Think about two people in your family. <u>Describe and compare all their different characteristics</u>, including physical features, personalities and routines, etc… including how they are different from each other."
  idArray [7] = "<u>Describe your favorite holiday celebration</u>. Talk about the event and the why you celebrate it, the things you do, if you visit a special locations, the food & drinks, the music, etc."
  idArray [8] = "Talk about <u>the last time you had a party</u> or <u>a family celebration</u>, including what it was, when & where it was, what you did, what you ate, the clothes you were wearing, etc."
  idArray [9] = "Talk about <u>how different your life is right now compared to when you were a child</u>, including your daily routine, hobbies, likes/dislikes, responsibilities, food & drink, clothing, etc."
  idArray [10] = "Talk about <u>the differences between a summer vacation & a winter vacation</u>. Compare both seasons including the advantages or disadvantages of each one, the activities you can/can't do, the differences in the clothes you need, etc."

// Peter's Questions:
  idArray [11] = "Talk about some activities you have been doing recently in your free time."
  idArray [12] = "Talk about a memorable holiday you have had."
  idArray [13] = "What advice can you give to someone with a cold?"
  idArray [14] = "Compare a beach holiday with a skiing holiday."

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectone").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*10);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultone").innerHTML = idArray[randomParagraph + 1];

// THIS LINE TOGGLES BETWEEN INDIVIDUAL & PAIR WORK TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#000000';
  document.getElementById('resultpairs').style.color = '#FFFF44';
}
