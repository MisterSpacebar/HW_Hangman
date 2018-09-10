var wordLibrary = ["IMPORTANCE","GODPARENT","CONJUGATED","DUPLICATE","EMBRACING","OVERSTAY","PERSONALITY","SLUMBER","LUMBERJACK","THUNDERCLAP","SUBCATEGORY","FARSIGHTED","BACKGROUND","COPYRIGHT",
                    "DOCUMENTARY","DANGEROUS","GEOPHYSICAL","BIRTHPLACE","CAMPGROUND","COUNTRYSIDE","SPACEFLIGHT","WORKMANSHIP","SHOCKINGLY","ISOGRAM","DOWNSTREAM","ATMOSPHERIC","BANKRUPTCY",
                    "BLACKSMITH","COMPLAIN","HOSPITABLY","BOYFRIEND","CLOTHESPIN","GREYHOUND","INTRODUCE","NIGHTMARE","PATHFINDER","DRAGON","PHLEGMATIC","ULTRASONIC","BINOCULARS","TRAMPOLINE"];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var word;

window.onload = function hangmanGame(){
    word = wordLibrary[randNum(wordLibrary.length)];
    var remainingLetters = word.length;
    var guessCount = remainingLetters;
    var answerArray = [];

    for(var x=0; x<word.length; x++){
        answerArray[x]="_";
    }

    while(remainingLetters+5>0){
        document.getElementById("wordGame").innerHTML = answerArray.join(" ");
        document.getElementById("guessCounts").innerHTML = remainingLetters+5 + " guesses remaining!";

        var buttonPress;
        var keyIn = prompt("Enter a singular letter");
        var guess = keyIn.toUpperCase;

        if(guess.length>1){
            alert("This is more than one letter!");
        } else if(alphabet.indexOf(guess)>-1){
            for(var i=0; i<word.length; i++){
                if(word.toLowerCase[i]==guess){
                    answerArray[i]=guess;
                    remainingLetters--;
                }
            }
        }

        document.getElementById("wordGame").innerHTML = answerArray.join(" ");
    }
}

function randNum(upperBound){
    var result = Math.floor((Math.random()*upperBound));
    return result;
}

function buttonReturn(button){
    var buttonAns = button.id;
    console.log(buttonAns);
    return buttonAns;
}