var wordLibrary = ["IMPORTANCE","GODPARENT","CONJUGATED","DUPLICATE","EMBRACING","OVERSTAY","PERSONALITY","SLUMBER","LUMBERJACK","THUNDERCLAP","SUBCATEGORY","FARSIGHTED","BACKGROUND","COPYRIGHT",
                    "DOCUMENTARY","DANGEROUS","GEOPHYSICAL","BIRTHPLACE","CAMPGROUND","COUNTRYSIDE","SPACEFLIGHT","WORKMANSHIP","SHOCKINGLY","ISOGRAM","DOWNSTREAM","ATMOSPHERIC","BANKRUPTCY",
                    "BLACKSMITH","COMPLAIN","HOSPITABLY","BOYFRIEND","CLOTHESPIN","GREYHOUND","INTRODUCE","NIGHTMARE","PATHFINDER","DRAGON","PHLEGMATIC","ULTRASONIC","BINOCULARS","TRAMPOLINE"];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var word; //selected word
var wordToGuess; //array of selected word
var answerArray = []; //blank array
var guessCount;
var wordCount;

window.onload = function startGame(){
    hangmanStart();
    gameLoop();
}

function hangmanStart(){
    word = wordLibrary[randNum(wordLibrary.length)];
    wordToGuess = wordToArray(word);
    blankArray(wordToGuess);
    guessCount = word.length;
    wordCount = word.length;
}

// function gameLoop(){
//     while(guessCount>=0){
//         document.getElementById("wordGame").innerHTML = answerArray.join(" ");
//         wordCheck();
//     }
// }

function blankArray(word){
    for(var x=0;x<wordToGuess.length;x++){
    answerArray[x]="_";
    }
}

function buttonReturn(button){
    var buttonAns = button.id;
    console.log(buttonAns);
    return buttonAns;
}

function gameLoop(){
    var counter = guessCount;
    var guess;
    while(counter>0){
        document.getElementById("wordGame").innerHTML = answerArray.join(" ");

        guess = buttonReturn(button);

        if(wordCount==0){
            alert("You win the game!");
        } else if(wordToGuess.indexOf(guess)>-1){
            for(var i=0; i<wordToGuess.length; i++){
                if(wordToGuess[i]==guess){
                    answerArray[i]=guess;
                    wordCount--;
                    counter--;
                }
            }
        } else {
            guessCount--;
            counter--;
        }
    }
}

// function wordCheck(){
//     var guess = buttonReturn(button);

//     if(wordToGuess.indexOf(guess)>-1){
//         for(var i=0; wordToGuess.length; i++){
//             if(wordToGuess[i]==guess){
//                 answerArray[i]=guess;
//             }
//         }
//     } else {
//         guessCount--;
//     }
//     document.getElementById("countGuesses").innerHTML=guessCount+" guesses left";
// }

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