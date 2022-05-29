
const readlineSync = require("readline-sync");

function getInput(prompt) {
    return readlineSync.question(`${prompt}: `);
     }


function buildDeck(){
    const suits = ["Diamond", "Spade", "Heart", "Clover"];
    const ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let deck =[];
    
    //console.log("Declaration completed");
  
    for (j=0;j<ranks.length;j++){
        for (i=0;i<suits.length;i++) {

       let deckObject={suit: suits[i], rank:ranks[j], value: j};
       deck.push(deckObject);  

      }   
    }
  return deck;
 }
//console.log(buildDeck());


//2

function shuffle(deck) {
    let shuffledDeck = deck;
    let currentIndex = deck.length-1;
    let temporaryValue
    let randomIndex 
    
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
    //console.log(shuffledDeck);
    return shuffledDeck;
    
    }
   //console.log(shuffle(buildDeck()))

    //3

    function greet(){
        const input = require('readline-sync');
        //let name = input.question("Welcome! Enter Your Name:");
        let name = getInput("Welcome! Enter your Name:");
        console.log(`${name}`);
        return name;
}
//console.log("Username is : " + greet())

//4

function compare(currentCard,nextCard){
  
    return currentCard.value - nextCard.value;
}
//console.log(compare()) 
//console.log(compare(playGame(currentCard,nextCard)));

//5

function guess(currentC,nextC){
    //currentCard = {suit: 'Heart', rank: '10',value: 9}
    //nextCard = {suit: 'Heart', rank: '8',value: 31}
    
    console.log(currentC.suit,currentC.rank)
    let response = getInput("Do you think the next card will be higher(h) or lower (l) than the current card?");
    if(response === 'h' ||  response === 'l'){
        if(response === 'h'){
            return compare(currentC,nextC)<=0; //compare function will run and this line will check if the answer is less than 0
        
            
        }   else if(response ==='l'){
            return compare(currentC,nextC)>0; 
        }}

            else {
            console.log("You need to guess either 'h' or 'l'. No points for this round ")
            return false;
            }
        }
    //console.log(guess(currentC,nextC))

    //6

    function playGame(){
    
        let deck = shuffle(buildDeck());
        let playerName = greet();
        let score=0;
        let currentCard = deck.pop();
        console.log(deck)
        while(score < 5 && score < deck.length){
            let nextCard=deck.pop();
            //console.log(currentCard,nextCard);
            
            if(guess(currentCard,nextCard)){    //you dont have to write ===true because under the hood it ll return true
                score+=1
                console.log(`Congratulations, your score is + ${score}`);

            }else {
                console.log(`Oops, you are wrong and get no points.`)
            }
            
            currentCard = nextCard;
         }
         return deck.length === 0? console.log("You lose.You are out of cards") : console.log("Congratulations: You win")
    }
    playGame();
    //(guess(currentCard,nextCard) === false)   - i was calling the guess funtion twice.. resulting in the terminal asking for me to guess two times