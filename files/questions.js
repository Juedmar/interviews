
// =========================
// PRESENT SIMPLE QUESTIONS
// =========================

function presentSimple() {
// DELETE PREVIOUS STUFF!
deleteSingle()
deleteDouble()

// PRINT "READY TO GO"!
document.getElementById("resultone").style.color = "black"
document.getElementById("resultpairs").style.color = "black"

// OPENING QUESTION WINDOW!
document.getElementById("resultone").innerHTML = "Adding Present Simple questions!"
setTimeout(function() { document.getElementById("questions").style.display = "block" }, 1000)

// ADDING INDIVIDUAL QUESTIONS!
setTimeout(function() { document.getElementById("single01").value = "What app do you use the most? Why? Explain." }, 2100)
setTimeout(function() { document.getElementById("single02").value = "What do you usually do to relax after class?" }, 2200)
setTimeout(function() { document.getElementById("single03").value = "What time do you usually wake up? Why? Explain." }, 2300)
setTimeout(function() { document.getElementById("single04").value = "What do you do when you are bored and have free time?" }, 2400)
setTimeout(function() { document.getElementById("single05").value = "How often do you go shopping? What do you usually buy?" }, 2500)
setTimeout(function() { document.getElementById("single06").value = "What do you eat or drink when it is really hot outside?" }, 2600)
setTimeout(function() { document.getElementById("single07").value = "What do you usually eat for lunch? Do you eat any dessert?" }, 2700)
setTimeout(function() { document.getElementById("single08").value = "What TV shows/social media channels do you watch regularly?" }, 2800)
setTimeout(function() { document.getElementById("single09").value = "What do you usually do during long weekeneds or on vacation?" }, 2900)
setTimeout(function() { document.getElementById("single10").value = "What are some hobbies or activities you enjoy doing? Explain." }, 3000)
setTimeout(function() { document.getElementById("single11").value = "What is your favorite day of the week? What do you usually do that day?" }, 3100)
setTimeout(function() { document.getElementById("single12").value = "Talk about your daily routine, including all the things you do & the frequency." }, 3200)
setTimeout(function() { document.getElementById("single13").value = "Talk about your hobbies/activities you do more often, including the times & frequency, etc." }, 3300)
setTimeout(function() { document.getElementById("single14").value = "Talk about the chores / housework you do during the day, including the times & frequency, etc." }, 3400)
setTimeout(function() { document.getElementById("single15").value = "Talk about your hobbies and the activities you like doing, the frequency, why you like them, etc." }, 3500)

// RESETTING QUESTION WINDOW!
setTimeout(function() { document.getElementById("questions").style.display = "none" }, 4000)
setTimeout(function() { document.getElementById("resultone").innerHTML = "Present Simple questions ready (individial)!" }, 4500)
setTimeout(function() { document.getElementById("resultpairs").innerHTML = "Pairwork is still empty!" }, 5000)
setTimeout(function() { document.getElementById("alertInstructions").style.display = "block" }, 5500)

// BUTTON TITLE CHANGE!
setTimeout(function() { document.getElementById("selectone").innerHTML = "↓ 👤 Individual topic ↓" }, 5800)
setTimeout(function() { document.getElementById("selectpairs").innerHTML = "↓ 👥 Pairwork topic ↓" }, 6000)
}


// =========================
// PAST SIMPLE QUESTIONS
// =========================

function pastSimple() {
// DELETE PREVIOUS STUFF!
deleteSingle()
deleteDouble()

// PRINT "READY TO GO"!
document.getElementById("resultone").style.color = "black"
document.getElementById("resultpairs").style.color = "black"

// OPENING QUESTION WINDOW!
document.getElementById("resultone").innerHTML = "Adding Past Simple questions!"
setTimeout(function() { document.getElementById("questions").style.display = "block" }, 1000)

// ADDING INDIVIDUAL QUESTIONS!
setTimeout(function() { document.getElementById("single01").value = "What did you do yesterday?" }, 2100)
setTimeout(function() { document.getElementById("single02").value = "What did you do last weekend?" }, 2200)
setTimeout(function() { document.getElementById("single03").value = "What did you do this morning?" }, 2300)
setTimeout(function() { document.getElementById("single04").value = "What was the last book you read?" }, 2400)
setTimeout(function() { document.getElementById("single05").value = "What was the last game you played?" }, 2500)
setTimeout(function() { document.getElementById("single06").value = "Were you a well behaved child? Explain." }, 2600)
setTimeout(function() { document.getElementById("single07").value = "Where did you grow up? What was it like?" }, 2700)
setTimeout(function() { document.getElementById("single08").value = "When was the last time you rode a bicycle?" }, 2800)
setTimeout(function() { document.getElementById("single09").value = "What was a funny movie you watched recently?" }, 2900)
setTimeout(function() { document.getElementById("single10").value = "What was the last movie you saw? How was it?" }, 3000)
setTimeout(function() { document.getElementById("single11").value = "Who did you hang out with last? What did you do together?" }, 3100)
setTimeout(function() { document.getElementById("single12").value = "Talk about <u>the last time you went on holiday</u>, including when / where this was, & who you were with." }, 3200)
setTimeout(function() { document.getElementById("single13").value = "Talk about <u>what you did last summer / last winter vacation</u>, including the activities, places, people, etc." }, 3300)
setTimeout(function() { document.getElementById("single14").value = "Talk about the <u>last time you went on holiday</u>, including where you went, what you did and if you enjoyed it." }, 3400)
setTimeout(function() { document.getElementById("single15").value = "Talk about the <u>last time you went out</u> with a friend or family member, including where you went, what you did and why." }, 3500)

// ADDING PAIRWORK QUESTIONS!
setTimeout(function() { document.getElementById("double01").value = "What was <u>the last restaurant you went to?</u> How was it? What did you eat?" }, 3600)
setTimeout(function() { document.getElementById("double02").value = "What was <u>the last movie you saw? How was it?</u> What happened to the characters?" }, 3700)
setTimeout(function() { document.getElementById("double03").value = "What was <u>a funny movie you watched recently?</u> What happened to the characters?" }, 3800)
setTimeout(function() { document.getElementById("double04").value = "Were you <u>a well behaved child?</u> What did you usually do to get into trouble? Explain." }, 3900)
setTimeout(function() { document.getElementById("double05").value = "Talk about the <u>last time you went out</u> with a friend or family member. You can say <u>where you went, what you did</u> and why." }, 4000)
setTimeout(function() { document.getElementById("double06").value = "What was <u>the last movie you saw in the cinema</u>? Talk about what the main story was, who were the main characters, what happened to them." }, 4100)
setTimeout(function() { document.getElementById("double07").value = "Talk about <u>your last trip on summer vacation, including the activities you did</u>, including the people you were with, the food you ate, etc." }, 4200)
setTimeout(function() { document.getElementById("double08").value = "Talk about the <u>last time you stayed at a friend's house</u>. You can say <u>who you stayed with, where you went, what you did</u> and if you enjoyed it." }, 4300)
setTimeout(function() { document.getElementById("double09").value = "Talk about <u>the last time you went camping, went on a road trip or stayed at a hotel</u>, including how long it was, where you stayed, what you did or ate, etc." }, 4400)
setTimeout(function() { document.getElementById("double10").value = "Talk about <u>the last time you were outside in nature</u> (like the countryside, a forest, river or lake). You can mention was there, the activities you did, the people you met, etc." }, 4500)

// RESETTING QUESTION WINDOW!
setTimeout(function() { document.getElementById("questions").style.display = "none" }, 5000)
setTimeout(function() { document.getElementById("resultone").innerHTML = "Individual questions ready (Past Simple)!" }, 5500)
setTimeout(function() { document.getElementById("resultpairs").innerHTML = "Pairwork questions ready (Past Simple)!" }, 6000)
setTimeout(function() { document.getElementById("alertInstructions").style.display = "block" }, 6500)

// BUTTON TITLE CHANGE!
setTimeout(function() { document.getElementById("selectone").innerHTML = "↓ 👤 Individual topic ↓" }, 6800)
setTimeout(function() { document.getElementById("selectpairs").innerHTML = "↓ 👥 Pairwork topic ↓" }, 7000)
}


// =========================
// PRESENT PERFECT QUESTIONS
// =========================

function presentPerfect() {
// DELETE PREVIOUS STUFF!
deleteSingle()
deleteDouble()

// PRINT "READY TO GO"!
document.getElementById("resultone").style.color = "black"
document.getElementById("resultpairs").style.color = "black"

// OPENING QUESTION WINDOW!
document.getElementById("resultone").innerHTML = "Adding Present Simple questions!"
setTimeout(function() { document.getElementById("questions").style.display = "block" }, 1000)

// ADDING INDIVIDUAL QUESTIONS!
setTimeout(function() { document.getElementById("single01").value = "What are some <u>strange types of food you’ve eaten?</u>" }, 2100)
setTimeout(function() { document.getElementById("single02").value = "<u>Have you ever been camping? Where have you camped?</u>" }, 2200)
setTimeout(function() { document.getElementById("single03").value = "Where are some <u>interesting places you’ve been in your country?</u>" }, 2300)
setTimeout(function() { document.getElementById("single04").value = "<u>Have you ever broken any bones?</u> Which ones have you broken? What happened?" }, 2400)
setTimeout(function() { document.getElementById("single05").value = "How many times <u>have you been to a theme park / fun fair?</u> Which ones have you been to?" }, 2500)
setTimeout(function() { document.getElementById("single06").value = "<u>Have you tried Japanese or Mexican food?</u> How was it? What other international cuisine have you tried?" }, 2600)
setTimeout(function() { document.getElementById("single07").value = "Talk about some <u>interesting hobbies have you tried</u>. Why did you like doing them?" }, 2700)
setTimeout(function() { document.getElementById("single08").value = "Talk about <u>some of the places where you've been on vacation</u>. What did you do there?" }, 2800)
setTimeout(function() { document.getElementById("single09").value = "Talk about <u>some interesting places you've been to in this country</u>. What did you do there?" }, 2900)
setTimeout(function() { document.getElementById("single10").value = "Talk about <u>how many times have you been to a concert or a theme park</u>? What did you do there?" }, 3000)
setTimeout(function() { document.getElementById("single11").value = "Talk about <u>something you have done in your free time for entertainment</u>. Mention where, when and who you have done this with." }, 3200)
setTimeout(function() { document.getElementById("single12").value = "Talk about a <u>medical problem you have experienced</u>, including symptoms, treatment, recovery time, advice & prevention, etc." }, 3400)

// RESETTING QUESTION WINDOW!
setTimeout(function() { document.getElementById("questions").style.display = "none" }, 3800)
setTimeout(function() { document.getElementById("resultone").innerHTML = "Present Perfect questions ready (individial)!" }, 4400)
setTimeout(function() { document.getElementById("resultpairs").innerHTML = "Pairwork is still empty!" }, 5000)
setTimeout(function() { document.getElementById("alertInstructions").style.display = "block" }, 5500)

// BUTTON TITLE CHANGE!
setTimeout(function() { document.getElementById("selectone").innerHTML = "↓ 👤 Individual topic ↓" }, 5800)
setTimeout(function() { document.getElementById("selectpairs").innerHTML = "↓ 👥 Pairwork topic ↓" }, 6000)
}


// =========================
// FUTURE TENSE QUESTIONS
// =========================

function futureTense() {
// DELETE PREVIOUS STUFF!
deleteSingle()
deleteDouble()

// PRINT "READY TO GO"!
document.getElementById("resultone").style.color = "black"
document.getElementById("resultpairs").style.color = "black"

// OPENING QUESTION WINDOW!
document.getElementById("resultone").innerHTML = "Adding Future Tense questions!"
setTimeout(function() { document.getElementById("questions").style.display = "block" }, 1000)

// ADDING INDIVIDUAL QUESTIONS!
setTimeout(function() { document.getElementById("single01").value = "<u>What will you do when you retire?</u>" }, 2100)
setTimeout(function() { document.getElementById("single02").value = "<u>What will your life be like in 5 years?</u>" }, 2200)
setTimeout(function() { document.getElementById("single03").value = "<u>What will video games be like in 10 years?</u>" }, 2300)
setTimeout(function() { document.getElementById("single04").value = "<u>How will communication change in the future?</u>" }, 2400)
setTimeout(function() { document.getElementById("single05").value = "<u>How will entertainment change in the future?</u>" }, 2500)
setTimeout(function() { document.getElementById("single06").value = "<u>What do you think the world will look like in 50 years?</u>" }, 2600)
setTimeout(function() { document.getElementById("single07").value = "<u>What will have the biggest impact on you in the near future?</u>" }, 2700)
setTimeout(function() { document.getElementById("single08").value = "<u>Will robots become part of daily life in the future? Why or why not?</u>" }, 2800)
setTimeout(function() { document.getElementById("single09").value = "<u>Will the future be better or worse than the present? Why or why not?</u>" }, 2900)
setTimeout(function() { document.getElementById("single10").value = "<u>What company will change society the most? Will it be a good change or bad change?</u>" }, 3000)
setTimeout(function() { document.getElementById("single11").value = "What do you think will happen next in the story of humanity? Why?" }, 3200)
setTimeout(function() { document.getElementById("single12").value = "What do you think you will do if there is a zombie apocalypse in your city?" }, 3400)

// RESETTING QUESTION WINDOW!
setTimeout(function() { document.getElementById("questions").style.display = "none" }, 4000)
setTimeout(function() { document.getElementById("resultone").innerHTML = "Future Tense questions ready (individial)!" }, 4500)
setTimeout(function() { document.getElementById("resultpairs").innerHTML = "Pairwork is still empty!" }, 5000)
setTimeout(function() { document.getElementById("alertInstructions").style.display = "block" }, 5500)

// BUTTON TITLE CHANGE!
setTimeout(function() { document.getElementById("selectone").innerHTML = "↓ 👤 Individual topic ↓" }, 5800)
setTimeout(function() { document.getElementById("selectpairs").innerHTML = "↓ 👥 Pairwork topic ↓" }, 6000)
}


// =========================
// CONDITIONAL QUESTIONS
// =========================

function conditionalQuestions() {
// DELETE PREVIOUS STUFF!
deleteSingle()
deleteDouble()

// PRINT "READY TO GO"!
document.getElementById("resultone").style.color = "black"
document.getElementById("resultpairs").style.color = "black"

// OPENING QUESTION WINDOW!
document.getElementById("resultone").innerHTML = "Adding 1° Conditional questions!"
document.getElementById("resultpairs").innerHTML = "Adding 2° Conditional questions!"
setTimeout(function() { document.getElementById("questions").style.display = "block" }, 1000)

// ADDING INDIVIDUAL QUESTIONS!
setTimeout(function() { document.getElementById("single01").value = "Talk about <u>the things you will do if you are bored</u>." }, 2100)
setTimeout(function() { document.getElementById("single02").value = "What will you do <u>if it rains every day this weekend</u>?" }, 2200)
setTimeout(function() { document.getElementById("single03").value = "What will you do <u>if you meet a celebrity you admire</u>?" }, 2300)
setTimeout(function() { document.getElementById("single04").value = "Who will you eat with <u>if you go out to dinner this week</u>?" }, 2400)
setTimeout(function() { document.getElementById("single05").value = "<u>If you go out for dinner this evening</u>, what will you eat?" }, 2500)
setTimeout(function() { document.getElementById("single06").value = "Talk about <u>some of the things you will do when you graduate</u>." }, 2600)
setTimeout(function() { document.getElementById("single07").value = "What will you do <u>if the power goes out in your home tonight</u>?" }, 2700)
setTimeout(function() { document.getElementById("single08").value = "Talk about <u>what type of food you will order if you go out to eat</u>." }, 2800)
setTimeout(function() { document.getElementById("single09").value = "Talk about <u>where you will go if you want to relax or have some fun</u>." }, 2900)
setTimeout(function() { document.getElementById("single10").value = "What will you do <u>if you crack the screen on your phone</u> or <u>drop it in the toilet</u>?" }, 3000)
setTimeout(function() { document.getElementById("single11").value = "What will you do <u>if you forget an important birthday</u>, like your best friend or a family member?" }, 3100)
setTimeout(function() { document.getElementById("single12").value = "If you get a chance to start studying at university again, <u>what area or program will you choose</u>?" }, 3200)
setTimeout(function() { document.getElementById("single13").value = "Talk about <u>what you will do when you go to the cinema</u>, including movie types, friends, times, popcorn, drinks, etc." }, 3300)
setTimeout(function() { document.getElementById("single14").value = "Talk about <u>how your life will be affected if there is a very serious financial crisis.</u> What parts of your life will be changed or be forced to stop?" }, 3400)
setTimeout(function() { document.getElementById("single15").value = "Talk about <u>how your life will be affected if you become absolutely rich & wealthy.</u> What parts of your life will be changed or improved by your new wealth?" }, 3500)

// ADDING PAIRWORK QUESTIONS!
setTimeout(function() { document.getElementById("double01").value = "If you were an animal,<u> what animal would you be</u>?" }, 3600)
setTimeout(function() { document.getElementById("double02").value = "<u>If you had only one week to live</u>, what would you do?" }, 3700)
setTimeout(function() { document.getElementById("double03").value = "What spell would you want to know <u>if you were a wizard</u>?" }, 3800)
setTimeout(function() { document.getElementById("double04").value = "If you could have any animal as a pet, <u>what animal would you want</u>?" }, 3900)
setTimeout(function() { document.getElementById("double05").value = "If you could create a superhero, <u>what would their power and name be</u>?" }, 4000)
setTimeout(function() { document.getElementById("double06").value = "What would you tell yourself <u>if you could go back in time and talk to your younger self</u>?" }, 4100)
setTimeout(function() { document.getElementById("double07").value = "What <u>food & supplies</u> would you buy <u>if there was a zombie apocalypse</u>? Where would you go & eat to survive the initial weeks?" }, 4200)
setTimeout(function() { document.getElementById("double08").value = "Talk about the activities you would do if you were a millionaire. What would you do every day? What will you never do again after you become rich?" }, 4300)
setTimeout(function() { document.getElementById("double09").value = "Choose <u>one housekeeping activity you will have to do every day & another you won't ever have to do again</u> for the rest of your life. Explain your choices." }, 4400)
setTimeout(function() { document.getElementById("double10").value = "If you could buy the house of your dreams, <u>what would you like to have in your ideal house?</u> Swimming pool, basketball court, barbecue area, a private cinema? Why?" }, 4500)

// RESETTING QUESTION WINDOW!
setTimeout(function() { document.getElementById("questions").style.display = "none" }, 5000)
setTimeout(function() { document.getElementById("resultone").innerHTML = "1st Conditional questions ready!" }, 5500)
setTimeout(function() { document.getElementById("resultpairs").innerHTML = "2nd Conditional questions ready!" }, 6000)
setTimeout(function() { document.getElementById("alertInstructions").style.display = "block" }, 6500)

// BUTTON TITLE CHANGE!
setTimeout(function() { document.getElementById("selectone").innerHTML = "↓ First Conditional ↓" }, 6800)
setTimeout(function() { document.getElementById("selectpairs").innerHTML = "↓ Second Conditional ↓" }, 7000)
}



// =========================
// COMPARATIVES & SUPERLATIVES
// =========================

function comparativeQuestions() {
// DELETE PREVIOUS STUFF!
deleteSingle()
deleteDouble()

// PRINT "READY TO GO"!
document.getElementById("resultone").style.color = "black"
document.getElementById("resultpairs").style.color = "black"

// OPENING QUESTION WINDOW!
document.getElementById("resultone").innerHTML = "Adding Comparative questions!"
document.getElementById("resultpairs").innerHTML = "Adding Superlative questions!"
setTimeout(function() { document.getElementById("questions").style.display = "block" }, 1000)

// ADDING INDIVIDUAL QUESTIONS!
setTimeout(function() { document.getElementById("single01").value = "Which is more important, <u>friends or family? Why?</u>" }, 2100)
setTimeout(function() { document.getElementById("single02").value = "Which is more important, <u>money or happiness?</u> Why?" }, 2200)
setTimeout(function() { document.getElementById("single03").value = "Is it <u>better to live in the country or in a city?</u> Why?" }, 2300)
setTimeout(function() { document.getElementById("single04").value = "Is it <u>better to have more free time or more money?</u> Why?" }, 2400)
setTimeout(function() { document.getElementById("single05").value = "Which is <u>more relaxing, reading a book or watching TV?</u> Why?" }, 2500)
setTimeout(function() { document.getElementById("single06").value = "Is it <u>better to have many friends or just a few close friends?</u>" }, 2600)
setTimeout(function() { document.getElementById("single07").value = "Which is <u>more exciting, playing a video game or playing a sport?</u> Why?" }, 2700)
setTimeout(function() { document.getElementById("single08").value = "Which is a <u>better place to have a vacation, mountains or a beach?</u> Why?" }, 2800)
setTimeout(function() { document.getElementById("single09").value = "Which is <u>more enjoyable, going to a theme park or going to a museum?</u> Why?" }, 2900)
setTimeout(function() { document.getElementById("single10").value = "Compare <u>two recent movies</u>. Which one is more entertaining?" }, 3000)
setTimeout(function() { document.getElementById("single11").value = "Compare <u>two countries</u>. Which one is a better vacation spot? Which has better food?" }, 3100)
setTimeout(function() { document.getElementById("single12").value = "Compare <u>two types of foreign food</u>. Which is more delicious? Which is cheaper?" }, 3200)

// ADDING PAIRWORK QUESTIONS!
setTimeout(function() { document.getElementById("double01").value = "Who is <u>the happiest person you know?</u>" }, 3300)
setTimeout(function() { document.getElementById("double02").value = "What’s <u>the greatest TV series you’ve watched?</u>" }, 3400)
setTimeout(function() { document.getElementById("double03").value = "What’s <u>the weirdest movie you have ever seen?</u>" }, 3500)
setTimeout(function() { document.getElementById("double04").value = "When was <u>the most exciting period of your life?</u>" }, 3600)
setTimeout(function() { document.getElementById("double05").value = "What’s <u>the most amazing hotel you’ve stayed at?</u>" }, 3700)
setTimeout(function() { document.getElementById("double06").value = "What’s <u>the most exciting thing you’ve ever done?</u>" }, 3800)
setTimeout(function() { document.getElementById("double07").value = "What’s <u>the most delicious meal you’ve ever eaten?</u>" }, 3900)
setTimeout(function() { document.getElementById("double08").value = "What’s <u>the most addictive game you’ve ever played?</u>" }, 4000)
setTimeout(function() { document.getElementById("double09").value = "What’s <u>the strangest restaurant or bar you’ve been to?</u>" }, 4100)
setTimeout(function() { document.getElementById("double10").value = "Who is <u>your best friend? Why are they your best friend?</u>" }, 4200)
setTimeout(function() { document.getElementById("double11").value = "What’s <u>the most popular tourist attraction in your country?</u>" }, 4300)
setTimeout(function() { document.getElementById("double12").value = "Where is <u>the worst place in your country to live?</u> How about the best place to live?" }, 4400)

// RESETTING QUESTION WINDOW!
setTimeout(function() { document.getElementById("questions").style.display = "none" }, 5000)
setTimeout(function() { document.getElementById("resultone").innerHTML = "Comparative questions ready!" }, 5500)
setTimeout(function() { document.getElementById("resultpairs").innerHTML = "Superlative questions ready!" }, 6000)
setTimeout(function() { document.getElementById("alertInstructions").style.display = "block" }, 6500)

// BUTTON TITLE CHANGE!
setTimeout(function() { document.getElementById("selectone").innerHTML = "↓ 👤 Comparatives ↓" }, 6800)
setTimeout(function() { document.getElementById("selectpairs").innerHTML = "↓ 👥 Superlatives ↓" }, 7000)
}



// =========================
// MODAL VERB QUESTIONS
// =========================

function modalVerbQuestions() {
// DELETE PREVIOUS STUFF!
deleteSingle()
deleteDouble()

// PRINT "READY TO GO"!
document.getElementById("resultone").style.color = "black"
document.getElementById("resultpairs").style.color = "black"

// OPENING QUESTION WINDOW!
document.getElementById("resultone").innerHTML = "Adding Modal Verb questions!"
setTimeout(function() { document.getElementById("questions").style.display = "block" }, 1000)

// ADDING INDIVIDUAL QUESTIONS!
setTimeout(function() { document.getElementById("single01").value = "Talk about <u>what a person has do to be happy.</u> Why?" }, 2100)
setTimeout(function() { document.getElementById("single02").value = "Talk about what <u>activities you recommend to stay healthy.</u> Explain." }, 2200)
setTimeout(function() { document.getElementById("single03").value = "Talk about <u>what students have to do if they want to improve their English.</u>" }, 2300)
setTimeout(function() { document.getElementById("single04").value = "Talk about <u>some of the things a person has to do to become successful.</u> Why?" }, 2400)
setTimeout(function() { document.getElementById("single05").value = "Talk about <u>some necessary foods people have to eat at least once a week.</u> Why?" }, 2500)
setTimeout(function() { document.getElementById("single06").value = "Talk about <u>some things you must or must not do at your job or university.</u> Explain." }, 2600)
setTimeout(function() { document.getElementById("single07").value = "Talk about <u>some things you must do or must not do when you go to the airport.</u> Explain." }, 2700)
setTimeout(function() { document.getElementById("single08").value = "Talk about <u>some interesting customs & traditions people have to follow in this country.</u> Explain." }, 2800)
setTimeout(function() { document.getElementById("single09").value = "What <u>health advice and recommendation has a friend</u>, or someone in your family, <u>ever told you that helps you stay fit and healthy</u>?" }, 2900)
setTimeout(function() { document.getElementById("single10").value = "What <u>can you do on Friday nights?</u> Talk about what you usually do at the end of the week, including what you can / can't do, frequency, times, locations, etc." }, 3000)
setTimeout(function() { document.getElementById("single11").value = "What <u>can you usually do in the summer?</u> Talk about what you usually do in the hot/sunny months, including what you can / can't do, frequency, times, locations, etc." }, 3100)
setTimeout(function() { document.getElementById("single12").value = "What <u>can you usually do in the winter?</u> Talk about what you usually do in the cold/rainy months, including what you can / can't do, frequency, times, locations, etc." }, 3200)
setTimeout(function() { document.getElementById("single13").value = "What <u>can you usually do when you are young?</u> Talk about what you usually do after turning 40/50, including what you can / can't do, frequency, times, locations, etc." }, 3300)
setTimeout(function() { document.getElementById("single14").value = "What <u>can you usually do when you are sick?</u> Talk about what you usually do when you have a the flue/acold, including what you can / can't do, frequency, times, locations, etc." }, 3400)

// RESETTING QUESTION WINDOW!
setTimeout(function() { document.getElementById("questions").style.display = "none" }, 4000)
setTimeout(function() { document.getElementById("resultone").innerHTML = "Modal Verb questions ready (individial)!" }, 4500)
setTimeout(function() { document.getElementById("resultpairs").innerHTML = "Pairwork is still empty!" }, 5000)
setTimeout(function() { document.getElementById("alertInstructions").style.display = "block" }, 5500)

// BUTTON TITLE CHANGE!
setTimeout(function() { document.getElementById("selectone").innerHTML = "↓ 👤 Individual topic ↓" }, 5800)
setTimeout(function() { document.getElementById("selectpairs").innerHTML = "↓ 👥 Pairwork topic ↓" }, 6000)
}



// =========================
// FOOD & COOKING QUESTIONS
// =========================

function foodQuestions() {
// DELETE PREVIOUS STUFF!
deleteSingle()
deleteDouble()

// PRINT "READY TO GO"!
document.getElementById("resultone").style.color = "black"
document.getElementById("resultpairs").style.color = "black"

// OPENING QUESTION WINDOW!
document.getElementById("resultone").innerHTML = "Adding Food & Cooking questions!"
setTimeout(function() { document.getElementById("questions").style.display = "block" }, 1000)

// ADDING INDIVIDUAL QUESTIONS!
setTimeout(function() { document.getElementById("single01").value = "<u>Describe your kitchen in detail</u>, including all the things you can see, where they are, the colors and sizes, the number of things, etc." }, 2100)
setTimeout(function() { document.getElementById("single02").value = "<u>Talk about all your favorite food</u>. Mention why you like it, when and where you eat it, how often you eat it, etc. What are the main ingredients? How do you prepare it?" }, 2200)
setTimeout(function() { document.getElementById("single03").value = "<u>Talk about all the delicious snacks you like</u>. Mention what they are, why you like them, how often you eat them, the amounts, etc. In what sizes, formats or containers do they come?" }, 2300)
setTimeout(function() { document.getElementById("single04").value = "<u>Talk about all the vegetables you like or dislike</u>, including their names, why you like or dislike them, how often you eat them, etc. How do they taste? In what format or containers do they come?" }, 2400)
setTimeout(function() { document.getElementById("single05").value = "Talk about <u>your shopping and food preferences</u>, including how often you go shopping, the stores you like and things that you normally buy." }, 2500)
setTimeout(function() { document.getElementById("single06").value = "Talk about <u>going to the supermarket</u>, including the things you most frequently buy at the store & if you like grocery shopping. Why? Why not?" }, 2600)
setTimeout(function() { document.getElementById("single07").value = "Talk about <u>your favorite food & restaurants</u>, including the things you like eating, how often you prepare them, special recipes & dishes that you like." }, 2700)
setTimeout(function() { document.getElementById("single08").value = "Talk about <u>your eating habits and guilty pleasures</u>, either things you eat at home or at restaurants. Are restaurants better than eating at home?" }, 2800)
setTimeout(function() { document.getElementById("single09").value = "Talk about <u>the meals you eat during the day</u>, including the different meals, the times or frequency, any ingredients, desserts, drinks, seasonings or condiments, etc." }, 2900)
setTimeout(function() { document.getElementById("single10").value = "<u>Describe the meals or dishes you eat when you are very hungry</u>, including the names, the types of meal, why you like them, how often you eat them, the main ingredients, etc." }, 3000)
setTimeout(function() { document.getElementById("single11").value = "<u>Talk about all your favorite healthy food</u>. Mention why you like it, when and where you eat it, how often you eat it, etc. What are the main ingredients? How do you prepare it?" }, 3100)
setTimeout(function() { document.getElementById("single12").value = "<u>Talk about all the delicious snacks you know that are good for you</u>. Mention what they are, why you like it, how often you eat it, etc. What are the main ingredients? In what format or containers do they come?" }, 3200)
setTimeout(function() { document.getElementById("single13").value = "<u>Talk about all the vegetables you know</u>. Mention the names, why you like them, how often you eat them, etc. What are the main characteristics? In what format or containers do they come?" }, 3300)
setTimeout(function() { document.getElementById("single14").value = "Talk about the <u>prepared meals or dishes you eat when you are very hungry</u>. Mention the names, why you like them, what the main ingredients are, if you eat them for breakfast, lunch or dinner, etc." }, 3400)

// RESETTING QUESTION WINDOW!
setTimeout(function() { document.getElementById("questions").style.display = "none" }, 4000)
setTimeout(function() { document.getElementById("resultone").innerHTML = "Food questions ready (individial)!" }, 4500)
setTimeout(function() { document.getElementById("resultpairs").innerHTML = "Pairwork is still empty!" }, 5000)
setTimeout(function() { document.getElementById("alertInstructions").style.display = "block" }, 5500)

// BUTTON TITLE CHANGE!
setTimeout(function() { document.getElementById("selectone").innerHTML = "↓ 👤 Individual topic ↓" }, 5800)
setTimeout(function() { document.getElementById("selectpairs").innerHTML = "↓ 👥 Pairwork topic ↓" }, 6000)
}