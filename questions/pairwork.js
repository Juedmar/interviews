
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionPairs() {
  idArray = new Array()
  idArray [1] = "Talk to each other about <u>what you did last summer / last winter vacation</u>, including the activities you did, places you visited, people you met, movies you saw, books you read, videogames you played, etc."
  idArray [2] = "<u>Talk to each other about your family</u>. Ask and answer questions about personal information, appearance, daily activities & routines, jobs or occupations, likes & dislikes, etc."
  idArray [3] = "Talk to each other about <u>your social networking activities and routines</u>, including platforms, frequency, activities, friends & connections, etc."
  idArray [4] = "Discuss <u>some things you have never done, but would like to do in the future</u> & why. Mention some places you haven’t visited, sports you haven’t tried, things you haven’t learned, food you haven’t tasted, etc."
  idArray [5] = "Talk to each other about <u>the celebrations you enjoy with your family</u>, including different event and the things you do, the places included, the food & drinks, the music, etc."
  idArray [6] = "You were planning to have a small house party together, but none of your friends come. Discuss <u>what must/may have happened</u> as the possible reasons (problems, accidents, weather, other events, etc)."
// Peter's Tasks:
  idArray [7] = "Talk to each other about the last time you went on holiday, including when / where this was, & who you were with. Take turns to ask / answer questions & follow-up questions."
  idArray [8] = "Talk about some bad weather you experienced recently, including when this was, what you were doing when it started and how you felt. Take turns to ask / answer questions & follow-up questions."
  idArray [9] = "Imagine you both don’t feel very well today. Tell each other exactly how you feel, and give each other some advice to get better."
  idArray [10] = "Discuss what type of holiday you prefer, a cultural holiday or a beach holiday. Compare them."

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectpairs").onclick = myFunctionPairs;
  randomParagraph = Math.floor(Math.random()*10);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultpairs").innerHTML = idArray[randomParagraph + 1];

// THIS LINE HIDES THE TEXT OF INDIVIDUAL TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#FFFF44';
  document.getElementById('resultpairs').style.color = '#000000';
}
