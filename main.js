var wordLibrary = ["IMPORTANCE","GODPARENT","CONJUGATED","DUPLICATE","EMBRACING","OVERSTAY","PERSONALITY","SLUMBER","LUMBERJACK","THUNDERCLAP","SUBCATEGORY","FARSIGHTED","BACKGROUND","COPYRIGHT",
                    "DOCUMENTARY","DANGEROUS","GEOPHYSICAL","BIRTHPLACE","CAMPGROUND","COUNTRYSIDE","SPACEFLIGHT","WORKMANSHIP","SHOCKINGLY","ISOGRAM","DOWNSTREAM","ATMOSPHERIC","BANKRUPTCY",
                    "BLACKSMITH","COMPLAIN","HOSPITABLY","BOYFRIEND","CLOTHESPIN","GREYHOUND","INTRODUCE","NIGHTMARE","PATHFINDER","DRAGON","PHLEGMATIC","ULTRASONIC","BINOCULARS","TRAMPOLINE"];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var word; //selected word
var wordToGuess; //array of selected word
var answerArray = []; //blank array
var guessCount;
var keyGuess

window.onload = function startGame(){
    hangmanStart();
    gameLoop();
}

function hangmanStart(){
    word = wordLibrary[randNum(wordLibrary.length)];
    wordToGuess = wordToArray(word);
    
    for(var x=0;x<wordToGuess.length;x++){
        answerArray[x]="_";
    }

    guessCount = word.length;
}

function gameLoop(){
    while(guessCount>0){
        document.getElementById("wordGame").innerHTML=answerArray.join(" ");

        var guess = prompt("guess a letter");
        // if(guess===null){
        //     break;
        // } else {
        //     for(var i=0; i<wordToGuess.length; i++){
        //         if(wordToGuess[i]==guess){
        //             answerArray[i]=guess;
        //             guessCount--;
        //         }
        //     }
        // }
        if(wordToGuess.indexOf(guess)>-1){
            for(var i=0 ; i<wordToGuess.length ; i++){
                if(wordToGuess[1]==guess){
                    answerArray[i]=guess;
                    guessCount--;
                }
            }
        }
    }
    document.getElementById("countGuesses").innerHTML=guessCount+" guesses left";
}

document.onkeypress = function keyGet(input){
    var keyload = input.toLowerCase;

    if(alphabet.indexOf(keyload)>-1){
        keyGuess = keyload.toUpperCase;
    }

    return keyGuess;
}

function randNum(upperBound){
    var result = Math.floor((Math.random()*upperBound));
    return result;
}

function wordToArray(wordInput){
    var wordArray = [];
    for(var i=0;i<wordInput.length;i++){
        wordArray.push(wordInput[i]);
    }
    return wordArray;
}

function wordCheck(){
   guess = document.getElementById("textInput");
   if(wordToGuess.indexOf(guess)>-1){
       guessCount--;
   } else {
       answerArray[wordToGuess.indexOf(guess)]=guess;
   }
}