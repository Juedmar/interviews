function myFunctionOne() {
  idArray = new Array()
  idArray [1] = "What is your favorite day of the week? What do you usually do that day? (Unit 1A)."
  idArray [2] = "What is your favorite month of the year? Why? Explain. (Unit 1A)"
  idArray [3] = "Talk about your favorite things. What are they? Why do you like them? (Unit 1C)."

  idArray [4] = "Talk about the things or items you have in your room. Where are they? (Unit 2A)"
  idArray [5] = "Talk about your favorite actor / actress. What movies are they in? (Unit 2A)"
  idArray [6] = "What do your parents/family members always tell you to do? Why? (Unit 2C)"
  idArray [7] = "What advice or tips are important to be a good student? Why? (Unit 2C)"

  idArray [8] = "How often do you go shopping? What do you usually buy? (Unit 3A)"
  idArray [9] = "What do you usually do during long weekeneds or on vacation? (Unit 3A)"
  idArray [10] = "Talk about your daily routine, including all the things you do & the frequency. (Unit 3A)"
  idArray [11] = "Talk about your hobbies and the activities you like doing, the frequency, why you like them, etc. (Unit 3)"

  idArray [12] = "What do you think is the best job ever. Why? What activities do you have to do in that job? (Unit 3B)"

  idArray [13] = "What do you do to relax after class? (Unit 3)"
  idArray [14] = "What do you eat or drink when it is really hot outside? (Unit 3)"
  idArray [15] = "What TV shows/social media channels do you watch regularly? (Unit 3)"
  idArray [16] = "What do you usually eat for lunch? Do you eat any dessert? (Unit 3)"
  idArray [17] = "What do you do when you are bored and have free time? (Unit 3)"

  idArray [18] = "What app do you use the most? Why? Explain. (Unit 3)"
  idArray [19] = "What time do you usually wake up? Why? Explain. (Unit 3)"
  idArray [20] = "What are some hobbies or activities you enjoy doing? Explain. (Unit 3)"

  document.getElementById("selectone").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*20);
  document.getElementById("resultone").innerHTML = idArray[randomParagraph + 1];
  document.getElementById('resultone').style.color = '#000000';
  document.getElementById('resultpairs').style.color = '#FFFF44';
}