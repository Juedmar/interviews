function myFunctionOne() {
  idArray = new Array()
  idArray [1] = "What is your favorite day of the week? What do you usually do that day? (Unit 1A)."
  idArray [2] = "What is your favorite month of the year? Why? (Unit 1A)"
  idArray [3] = "Talk about your favorite things. What are they? Why do you like them? (Unit 1C)."

  idArray [4] = "Walk about the things / items you have in your room. (Unit 2A)"
  idArray [5] = "Talk about your favorite actor / actress. What do they do? (Unit 2A)"
  idArray [6] = "What do your parents/family always tell you to do? Why? (Unit 2C)"
  idArray [7] = "What advice or tips are important to be a good student? Why? (Unit 2C)"

  idArray [8] = "How often do you go shopping? What do you usually buy? (Unit 3A)"
  idArray [9] = "What do you usually do during long weekeneds or holidays? (Unit 3A)"
  idArray [10] = "Talk about your daily routine, including all the things you do & the frequency. (Unit 3A)"
  idArray [11] = "Talk about your hobbies and the activities you like doing, the frequency, why you like them, etc. (Unit 3)"

  idArray [12] = "What do you think is the best job. Why? What activities do you have to do in that job? (Unit 3B)"

  idArray [13] = "What do you do relax after class? (Unit 3)"
  idArray [14] = "What do you eat or drink when it is really hot outside? (Unit 3)"
  idArray [15] = "What TV shows do you watch regularly? (Unit 3)"
  idArray [16] = "What do you usually eat for lunch? (Unit 3)"
  idArray [17] = "What do you do if you are bored? (Unit 3)"

  idArray [18] = "What app do you use the most? Why (Unit 3)"
  idArray [19] = "When do you usually wake up? Why? (Unit 3)"
  idArray [20] = "What are some hobbies you have? (Unit 3)"

  document.getElementById("selectone").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*19);
  document.getElementById("resultone").innerHTML = idArray[randomParagraph + 1];
  document.getElementById('resultone').style.color = '#000000';
  document.getElementById('resultpairs').style.color = '#FFFF44';
}