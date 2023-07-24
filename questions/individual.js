
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionOne() {
  idArray = new Array()
  idArray [1] = "<u>What's a typical Saturday for you?</u> Describe what you generally do and what you don't do on this day."
  idArray [2] = "Talk about all <u>the things that you are doing this year</u>. Mention things about your family or personal life, your education, sports, music or hobbies, etc."
  idArray [3] = "<u>What do you usually do on Friday nights?</u> Talk about what you usually do at the end of the week, including the activities, frequency, times, locations, etc."
  idArray [4] = "Think about someone you know well and <u>describe this person, including their physical appearance, their personality</u> and a little bit of their daily routine."
  idArray [5] = "<u>Describe your ideal romantic partner</u>. Talk about his/her appearance, personality, why you would like them and the things he or she normally does."
  idArray [6] = "How many people are there in your family? <u>Describe at least 2 of them, including their physical appearance, their personality</u> and a little bit of their daily routine."
  idArray [7] = "Who is your closest or favorite family member? Why? <u>Describe him/her in about 1 minute</u>, including some of the things they normally do."
  idArray [8] = "Talk about any <u>hobbies, sports or healthy activities you have practiced</u>. Try to fully describe your experiences, including every detail."
  idArray [9] = "Talk about <u>how you first met</u> one of your friends or classmates. You should say <u>when you met</u>, where you met, what you and your friend <u>were doing</u> at that time."
  idArray [10] = "Talk about one activity using technology you <u>have been doing recently</u> (surfing the internet, watching TV, using social media etc). You should explain <u>why you have been using it</u>."
  idArray [11] = "Talk about the <u>last time you went out</u> with a friend or family member. You should say <u>where you went, what you did</u> and why."
  idArray [12] = "Talk about the <u>last time you went on holiday</u>. You should say <u>who you went with, where you went, what you did</u> and if you enjoyed it."

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectone").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*12);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultone").innerHTML = idArray[randomParagraph + 1];

// THIS LINE TOGGLES BETWEEN INDIVIDUAL & PAIR WORK TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#000000';
  document.getElementById('resultpairs').style.color = '#FFFF44';
}
