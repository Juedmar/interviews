function myFunctionPairs() {
  idArray = new Array()
  idArray [1] = "Give each other advice / tips to have a happy and healthy life (Unit 2C)."
  idArray [2] = "Talk to each other about your daily routine and pastimes. (Unit 3A)"
  idArray [3] = "Talk to each other about the chores / housework you do during the day. Ask and answer questions about the times & frequency, etc. (Unit 3A)"
  idArray [4] = "Talk to each other about the most difficult jobs you know. Explain and ask questions about why. (Unit 3B)"
  idArray [5] = "Talk to each other about your hobbies/activities you do more often. Ask and answer questions about the times & frequency, etc. (Unit 4B/4C)"

  document.getElementById("selectpairs").onclick = myFunctionPairs;
  randomParagraph = Math.floor(Math.random()*5);
  document.getElementById("resultpairs").innerHTML = idArray[randomParagraph + 1];
  document.getElementById('resultone').style.color = '#FFFF44';
  document.getElementById('resultpairs').style.color = '#000000';
}