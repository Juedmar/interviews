
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionOne() {
  idArray = new Array()

// BASIC PRACTICE

  idArray [1] = "What’s in <u>your living room</u>? Describe what’s in it (1 minute)."
  idArray [2] = "What do you like <u>to drink on special occasions</u>? Explain (1 minute)."
  idArray [3] = "<u>How many people are there in your family</u>? Describe at least 2 of them."
  idArray [4] = "Who is <u>your closest family member</u>? Why? Describe his/her (1 minute)."
  idArray [5] = "Talk about <u>you when you were in elementary school</u>. Mention how your personality was, where you were then, and also how different life was back in those days."
  idArray [6] = "Talk about <u>all the things you did on your last birthday</u>. Mention where you were, what you did to celebrate, what you ate, the people you talked to, etc."
  idArray [7] = "Think of a movie that you know really well. Now, <u>talk about the main story</u> and mention everything important that happened to the characters and what they did."
  idArray [8] = "Talk about <u>how different your life was before you started university</u>. Mention where you were, what your routine was, and anything that was different."
  idArray [9] = "Talk about <u>all the things you did on your last Christmas</u> or </u>New Year's celebration</u>. Mention where you were, what you did, what you ate, the people you talked to, etc."
  idArray [10] = "Think TV series / book that you know really well. Now, talk about <u>the main story and mention everything important that happened</u> to the characters and what they did."

// INTERMEDIATE PRACTICE

  idArray [11] = "<u>What's a typical Saturday for you?</u> Describe what you generally do and what you don't do on this day."
  idArray [12] = "Talk about all <u>the things that you are doing this year</u>. Mention things about your family or personal life, your education, sports, music or hobbies, etc."
  idArray [13] = "<u>What do you usually do on Friday nights?</u> Talk about what you usually do at the end of the week, including the activities, frequency, times, locations, etc."
  idArray [14] = "Think about someone you know well and <u>describe this person, including their physical appearance, their personality</u> and a little bit of their daily routine."
  idArray [15] = "<u>Describe your ideal romantic partner</u>. Talk about his/her appearance, personality, why you would like them and the things he or she normally does."
  idArray [16] = "How many people are there in your family? <u>Describe at least 2 of them, including their physical appearance, their personality</u> and a little bit of their daily routine."
  idArray [17] = "Who is your closest or favorite family member? Why? <u>Describe him/her in about 1 minute</u>, including some of the things they normally do."
  idArray [18] = "Talk about any <u>hobbies, sports or healthy activities you have practiced</u>. Try to fully describe your experieces, including every detail."
  idArray [19] = "Talk about <u>how you first met</u> one of your friends or classmates. You should say <u>when you met</u>, where you met, what you and your friend <u>were doing</u> at that time."
  idArray [20] = "Talk about one activity using technology you <u>have been doing recently</u> (surfing the internet, watching TV, using social media etc). You should explain <u>why you have been using it</u>."
  idArray [21] = "Talk about your <u>experiences of music you have had</u>; for example, types of music you have listened to, gigs or concert <u>you have been to or watched on TV</u>."
  idArray [22] = "Talk about the <u>last time you went out</u> with a friend or family member. You should say <u>where you went, what you did</u> and why."
  idArray [23] = "Talk about the <u>last time you went on holiday</u>. You should say <u>who you went with, where you went, what you did</u> and if you enjoyed it."

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectone").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*23);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultone").innerHTML = idArray[randomParagraph + 1];

// THIS LINE TOGGLES BETWEEN INDIVIDUAL & PAIR WORK TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#000000';
  document.getElementById('resultpairs').style.color = '#FFFF44';
}
