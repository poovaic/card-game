let currentCard,nextCard;

function buildDeck(){
    const suits = ["Diamond", "Spade", "Heart", "Clover"];
    const ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let deck =[];
    let b=0;
    //console.log("Declaration completed");
  
    for (j=0;j<ranks.length;j++){
        for (i=0;i<suits.length;i++) {
       b= b+1;
       let deckObject={suit: suits[i], rank:ranks[j], value: b}
       deck.push(deckObject);  

      }   
    }
  return deck;
 }

console.log(buildDeck());

// STEP TWO - Shuffling your deck
// 1. use a function declaration to create a function called shuffle that takes deck as an argument.

function shuffle(deck) {
let shuffledDeck = deck;
let currentIndex = deck.length-1;
let temporaryValue = null;
let randomIndex = null;

while(currentIndex!==0){
    randomIndex = Math.floor(Math.random() * currentIndex);
    temporaryValue = shuffledDeck[currentIndex];
    shuffledDeck[currentIndex] = shuffledDeck[randomIndex]
    shuffledDeck[randomIndex] = temporaryValue;
    currentIndex -=1;
    //math.methods will get a random number of 0 to 52
    //example lets take 0
    //temporary value will be the array element of the current index value deck[52]
    // shuffleddeck [52]=shurffledDeck[0]
    //shuffled deck[0] = deck[0]
  //reduce current index by 1, now it will become 51 and again the loop will run
}
console.log(shuffledDeck);
return shuffledDeck;

}
console.log(shuffle(buildDeck()))


// 2. Inside this function create a variable called "shuffledDeck" that takes deck as its value.
// 3. Using "let" declare three new variables: currentIndex, whos value should equal the length of the deck array, and two more: temporaryValue and randomIndex, each of which should currently have no value assigned.
// 4. Create a while loop whos condition is that "currentIndex" does not equal 0, so that we stop looping once we've gone through all 52 cards.
// 5. Inside the while loop, use the javascript Math.methods to generate a random integer between 0 and "currentIndex"
// 6. Inside the while loop, decrement current index by 1. (should be after step 9)
// 7. Inside the while loop, assign "temporaryValue" with "shuffledDeck" (which is an array) to the [currentIndex].
// 8. Still inside, assign "shuffledDeck[currentIndex]"          a value of shuffledDeck to the [randomIndex]
// 9. Still inside, assign "shuffledDeck[randomIndex]" a value of "temporaryValue".  (currentIndex //i--;)
// 10. Review the code from steps 7,8, and 9, and leave a comment explaining what you believe those lines of code are doing as they swap assignments of values between them.
// 11. Finally, close the while loop and return "shuffledDeck". You should now be able to run shuffle(buildDeck()) in node and see your shuffled deck of cards.




// STEP THREE - Greeting the player
// 1. Declare a function called greet()
// 2. Inside that function, declare a variable called "name" and use "getInput()" to welcome the user to the game, ask for their name, and assign their answer.
// 3. Console.log name
// 4. return name
// 5. Done.

    function greet(){
        const input = require('readline-sync');
        let name = input.question("Welcome! Enter Your Name:");
        console.log(`${name}`);
        return name;
}



// STEP FOUR - comparing cards
// 1. declare a function called compare that takes two cards as arguments
// 2. return the value property of the first card minus the value property of the second card.

    function compare(currentCard,nextCard){

    return currentCard.value - nextCard.value;
}

// STEP FIVE - Respond to User Guess
// 1. declare a function called guess that takes two cards as arguments
// 2. console.log the rank and suit of the current card
// 3. declare a variable called "input" that uses getInput() to ask the user if they think the next card will be higher (h) or lower (l) than their current card and stores the user's response.
// 4. use a conditional statement to see if "input" equals "h" or "l".
// 5. If input equals h, return an expression that checks if the outcome of the compare function (using the same arguments as you used for guess) is a negative number.
// 6. If input equals l, check and see if it's a positive number.
// 7. If input doesn't equal h or l, tell the user that they need to guess either h or l and that they get no points for this round, then return false.

function guess(currentCard,nextCard){
currentCard = shuffle(buildDeck[Math.floor(Math.random()*buildDeck().length)])
console.log(currentCard.suit,currentCard.rank)

const input = require('readline-sync');
let response = input.question("Do you think the next card will be higher(h) or lower (l) than the current card?");

if(response === 'h' || 'l'){
if(response='h'){
 if(compare(currentCard,nextCard)<0){
    return true;
 }
        
} else if(response='l'){
    if(compare(currentCard,nextCard)>0){
        return false;
    }}}
   
    else {
    console.log("You need to guess either 'h' or 'l'. No points for this round ")
    }
    }
console.log(guess(currentCard,nextCard))


// STEP SIX - Let's play!
// 1. declare a function called playGame
// 2. declare a variable called deck (it's okay to reuse -- remember scope!) that takes the result of the shuffle function. Remember that the shuffle function needs to take the results one of our other functions as its argument...
// 3. declare a variable called playerName that takes the result of the greet function as its value.
// 4. using let, declare a score variable that's currently set to the number zero
// 5. use an array method on deck to remove the last object in deck. using let, declare a variable called currentCard and assign it this value.
// 6. create a while loop whos conditions are that score is less than five AND less than the amount of items still in the deck array.
// 7. Inside the while loop, use an array method on deck to remove the last object and assign that value to a variable named nextCard.
// 8. Inside the while loop, create a conditional statement. If the outcome of guess is true, increment the score by 1, congratulate the user, and tell them their score. If it's false, tell them they were wrong and got no points.
// 9. Close the conditional statement and assign nextCard to currentCard. You may have to write this as the type of variable that's always global...
// 10. Close the while loop and use a ternary statement that checks if the length of the deck array has reached zero. If it has not, tell the user that they won. If it has reached zero, tell them that they're out of cards and they lost.
// 11. Write a line of code to execute the playGame function.


function playGame(){
    
    let deck = shuffle(buildDeck());
    let playerName = greet();
    let score=0;
    let currentCard = deck.pop();
   
    while(score<5 && (deck.length)){
        let nextCard=deck.pop();
        
        if(guess() === true){
            score+=1
            console.log(`Congratulations, your score is + ${score}`);
        }else if(guess() === false){
            console.log(`Oops, you are wrong and get no points.`)
        }
        currentCard = nextCard     }
     return deck.length = 0? console.log("You lose. You are out of cards") : console.log("Congratulations: You win")
}

console.log(playgame());