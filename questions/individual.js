
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionOne() {
  idArray = new Array()
  idArray [1] = "Think about someone you know well and <u>describe this person, including their physical appearance, their personality</u> and a little bit of their daily routine."
  idArray [2] = "<u>Describe your favorite sports / pastime activities you like doing</u>. Talk about the activities, the frequency, the gear, the locations and people with whom you do them."
  idArray [3] = "<u>Describe your favorite holiday celebration</u>. Talk about the event and the why you celebrate it, the things you do, if you visit a special locations, the food & drinks, the music, etc."
  idArray [4] = "Think about two people in your family. <u>Describe and compare all their different characteristics</u>, including physical features, personalities and routines, etc… including how they are different from each other."
// Peter's Questions:
  idArray [5] = "Talk about some activities you have been doing recently in your free time."
  idArray [6] = "Talk about a memorable holiday you have had."
  idArray [7] = "What advice can you give to someone with a cold?"
  idArray [8] = "Compare a beach holiday with a skiing holiday."

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectone").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*8);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultone").innerHTML = idArray[randomParagraph + 1];

// THIS LINE TOGGLES BETWEEN INDIVIDUAL & PAIR WORK TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#000000';
  document.getElementById('resultpairs').style.color = '#FFFF44';
}
