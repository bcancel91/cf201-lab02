"use strict"; // instructed to add, to ensure quality and correctness. Get into the habit.

// ======================== GOALS ===========================================
// 1. create a personalized welcome
// 2. comment code throughout to show logic
// 3. walk through Paul's bio. ask questions provide info about Paul is.
// 4. reduce the amount of input variables to expect (within our current skill level) by the toUpperCase() method
// 5. 

// ================= Variable List ==========================================

var userName; // who is visiting the page?
var answerOne; // make this a template of sorts to be able to see how it easily fits elsewhere, in other ways
var answerTwo; // each answer needs it's own var
var answerThree; // each var needs to be unique
var answerFour; // and maybe these aren't the most descriptive
var answerFive; // added in day 2 of this lab due to latest requirements
var answerSix; // but in this case they are easy to read for a short script in JavaScript
var correctAnswerCount = 0; // I have them recall how many questions they answered correctly, and evaluate it if it is correct, above, or below.
var guessCount = 0; // how many guesses has the user made?
var remainingGuesses = 0; // countdown to be created

// TODO: Why do I have to start correctAnswerCount, guessCount, and remainingGuesses at 0?

// ============== Array List ==============================================

var myLocations = ['haiti', 'england', 'mexico', 'canada', 'botswana']

// ==================== Scripts ===========================================

function getName(){
  userName = prompt ('Why hello there! Who might you be?', '')
  console.log (userName + ' is visiting the page')
  alert ('Well ' + userName + ' thank you for stopping by.')
}

getName();

function getAnswerOne(){
  answerOne = prompt ('Was I born before Star Wars premiered?', '(Hint: Star Wars first showed in theaters in 1977)')
  console.log (answerOne + ' is the raw input'); // just to see the method() working in the next step of code
  answerOne = answerOne.charAt(0).toUpperCase() + answerOne.slice(1); // takes the first letter and Capitalizes it, then concatenates the rest of the sentence back in from the second character on because slices like arrays start at 0. This code snippet was found at https://attacomsian.com/blog/string-capitalize-javascript on 2020-06-02
  console.log (answerOne + ' is now be Capitalized. This is answerOne.')
  if (answerOne == 'N' || answerOne == "No") { // checking for the relevant response
    alert ('You are correct!'); // if you got the correct answer, you're told so.
    correctAnswerCount++ // this keeps the correct track of how many questions you get correct.
    console.log('the correctAnswerCount is ' + correctAnswerCount + '.') // here so that I can check that the correct answer counter works
  } else { // wrong answer, stating as much. Also, no increment for the correctAnswerCount.
    alert ('Nope! I did see them in theater for their 20 year anniversary special editions however.')
  }
}

getAnswerOne();

function getAnswerTwo(){
  answerTwo = prompt ('Did I live in Germany before moving to Washington state?', 'When the wall fell, I was there!');
  console.log (answerTwo + ' is the raw input for answerTwo'); // just to see the method() working in the next step of code
  answerTwo = answerTwo.charAt(0).toUpperCase() + answerTwo.slice(1);
  console.log (answerTwo + ' is now be Capitalized. This is answerTwo')
  if (answerTwo == 'Y' || answerTwo == "Yes") {
    alert ('You are correct!');
    correctAnswerCount++
    console.log (correctAnswerCount + ' the count is now plus one.') //I did move around the alert/increment/console.log on purpose to see it respond differently.
  } else {
    alert ('Incorrect. I\'m no Berliner!')
  }
}

getAnswerTwo();

function getAnswerThree(){
  answerThree = prompt ('Was there any mention of pets in the bio?')
  console.log ('Here\'s answerThree\'s raw input: ' + answerThree + '. Prior to letter capitalization');
  answerThree = answerThree.charAt(0).toUpperCase() + answerThree.slice(1);
  if (answerThree == 'N' || answerThree == 'No') {
    correctAnswerCount++; // do you need a semicolon or not?
    console.log (correctAnswerCount + ', that\'s one more than before.')
    alert ('True, but we did have pets always, lots of barks, meows, and some neighs even!');
  } else {
    alert ('Ah! While we had pets, I never mentioned them.')
  }
}

getAnswerThree();

function getAnswerFour(){
  answerFour = prompt ('Did I meet my wife Idaho?')
  answerFour = answerFour.charAt(0).toUpperCase() + answerFour.slice(1);
  console.log ('After uppercase-ing answerFour, it looks like ' + answerFour)
  if (answerFour == 'Y' || answerFour == 'Yes') {
    correctAnswerCount++
    alert('I did! But not before frightening her terribly.')
    console.log (correctAnswerCount + ' is now at it\'s highest number it can be this runthrough.')
  } else {
    alert('Naw, Idaho was the place.')
  }
}

getAnswerFour();

function getAnswerFive(){
  answerFive = prompt ("Did my career take me to far away places?")
  answerFive = answerFive.charAt(0).toUpperCase() + answerFive.slice(1)
  if (answerFive == 'Y' || answerFive == 'Yes') {
    correctAnswerCount++
    console.log ('correctAnswerCount is ' + correctAnswerCount + '.');
    alert('Correct!')
  } else {
    alert("No, I did see other parts of the world, for which I am very thankful.")
  }
}

getAnswerFive();

correctAnswerCount = 4 //stand in for correct lab procedure

function userCorrect(){
  while (guessCount <= correctAnswerCount) {
    answerSix = prompt ('Okay ' + userName + ' how many answers did you get correct?', 'Answer with a number 1-8')
    if (answerSix == correctAnswerCount) { // I'm checking if their answer is the correctAnswerCount that incremented each correct answer
      alert ('You kept track too! Good job!'); // congratulations for keeping track of a random number
      correctAnswerCount++;
      guessCount+2;
      console.log(guessCount);
      break;
    } else if (answerSix > correctAnswerCount) { // I'm checking for the upper, above the correctAnswerCount
      alert ('Ah, too high!');
      guessCount++;
      console.log(guessCount);
    } else if (answerSix < correctAnswerCount) { // this is the catch for the lower end (the only numerical value that still remains)
      alert ('You underestimated your skill ' + userName + '!');
      guessCount++;
      console.log(guessCount);
    }
  }
}

userCorrect();

alert("Alright, moving on!");

remainingGuesses = 4 - 0; // TODO: what happens if I don't run this here? TODO: CHANGED correctAnswerCount to 
correctAnswerCount = 6 // TODO: comment this out!

function guessCountry(){
  while (guessCount < 6) {
    console.log('Remaining guesses: ' + remainingGuesses)
    answerSix = prompt('Which countries did I go to for my work?', 'You have ' + 6 + ' guesses!').toLowerCase(); //TODO: add back remainingGuesses
    if (answerSix == myLocations[0] || answerSix == myLocations[1] || answerSix == myLocations[4]){
      alert('Yes! I love a little puddle jumping!');
      correctAnswerCount++;
      break;
    } else if (answerSix == myLocations[2] || answerSix == myLocations[3]){
      alert('Correct! I\'ve been to both of our land-connected neighbors!');
      correctAnswerCount++;
      break;
    } else {
      guessCount++;
      remainingGuesses = correctAnswerCount - guessCount; // TODO: And why is this code important here?
      // alert('Keep guessing, you\'ll get there!  You have ' + remainingGuesses + ' guesses remaining.')
    }
  }
}

guessCountry();

// alert('Okay, here are all I\'ve been to:')

// for (var i = 0; i < myLocations.length; i++){
//   alert('I have been to ' + myLocations[i].charAt(0).toUpperCase() + myLocations[i].slice(1) + '.')
// }

// alert('And that\'s the game! We\'ve been great! You got ' + correctAnswerCount + ' questions correct out of 7 questions!')
