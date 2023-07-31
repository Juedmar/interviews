
// WRITE THE QUESTIONS BELOW.
// MAKE SURE TO START AND FINISH WITH QUOTATION SIGNS.
function myFunctionPairs() {
  idArray = new Array()
  idArray [1] = "<u>Talk to each other about your homes</u>. Ask each other questions about the type and size of your home. Discuss the different rooms, furniture, appliances & anything you have in your house (take turns)."
  idArray [2] = "Talk to each other about <u>all the necessary house chores families need to do</u> to keep their homes clean & in good shape. Ask each other questions about the activities and the appropriate frequency for a happy home."
  idArray [3] = "Talk to each other about <u>the groceries you need to buy to prepare a delicious lunch together</u>. Talk about what you will make, the ingredients, amounts, containers, and where they are inside the supermarket."
  idArray [4] = "Talk to each other about <u>the meals you will order at a restaurant together (for lunch or dinner)</u>. Mention the appetizers, main dishes, the drinks, the desserts, ingredients, prices, quantities, etc."
  idArray [5] = "<u>Talk to each other about the meals you eat during the day</u>. Ask each other questions about the different meals, the times or frequency, any ingredients, desserts, drinks, seasonings or condiments, etc."
  idArray [6] = "One of you works at a fancy restaurant and the other is a customer. <u>Have a polite conversation</u> so that the customer can order a nice lunch and the waiter/waitress can receive a generous tip. Be polite."
  idArray [7] = "Talk to each other about <u>your childhood hobbies and pastimes</u>. Mention all the things you used to do, the frequency, games, toys, TV shows, favorite meals, etc."
  idArray [8] = "Discuss the things <u>you would have done differently if you hadn’t started studying at university</u>: How would your lives have changed, where would you have gone & what would you have been doing instead?"
  idArray [9] = "One of you is <u>learning how to cook and the other has taken some cooking classes</u>. Talk to each other about some easy recipes to help you partner learn some tricks, so you can get an invitation for a nice lunch."

// PETER'S QUESTIONS:
  idArray [10] = "- Imagine a family. The <u>husband moved out</u> of the family house. Talk to each other about <u>possible reasons</u> (Include the Past Perfect in your answer)."
  idArray [11] = "- Imagine a family. The <u>daughter stopped keeping in touch</u> with the mother. Talk to each other about <u>possible reasons</u> (Include the past perfect in your answer)."
  idArray [12] = "- Imagine a family. The <u>grandmother refused to babysit</u> for the grandchildren. Talk to each other about <u>possible reasons</u> (Include the past perfect in your answer)."
  idArray [13] = "- Imagine a family. The <u>son's girlfriend didn't answer his calls</u> anymore. Talk to each other about <u>possible reasons</u> (Include the past perfect in your answer)."
  idArray [14] = "- Discuss <u>common reasons for family disputes</u>."
  idArray [15] = "- How would you <u>feel before travelling to a destination you've always dreamt of visiting</u>? Ask each other questions and continue the conversation. Include: modifiers with adjectives, and extreme adjectives."
  idArray [16] = "- What were <u>you both doing last Saturday at 9pm</u>? Find similarities and differences. (Include the Past Continuous in your answer)."
  idArray [17] = "- How do <u>you both feel during a bus journey</u>? Include: modifiers with adjectives, and extreme adjectives."

// SET THE NUMBER OF QUESTIONS ON THE SECOND LINE BELOW!
  document.getElementById("selectpairs").onclick = myFunctionPairs;
  randomParagraph = Math.floor(Math.random()*17);

// THIS LINE DISPLAYS THE RANDOM QUESTIONS [DO NOT CHANGE]!
  document.getElementById("resultpairs").innerHTML = idArray[randomParagraph + 1];

// THIS LINE HIDES THE TEXT OF INDIVIDUAL TOPICS [DO NOT CHANGE]!
  document.getElementById('resultone').style.color = '#FFFF44';
  document.getElementById('resultpairs').style.color = '#000000';
}
