var diceTurns = [1,2,3,4,5,6];
var playerOneResult = Math.floor(Math.random(diceTurns)*6)+1;
var playerTwoResult = Math.floor(Math.random(diceTurns)*6)+1;


function playerOneImage(){
    if (playerOneResult == 1){
        document.querySelector("#playerOneSix").setAttribute("src","./one.png");
    }

    else if (playerOneResult == 2){
        document.querySelector("#playerOneSix").setAttribute("src","./two.png");
    }

    else if (playerOneResult == 3){
        document.querySelector("#playerOneSix").setAttribute("src","./three.png");
    }

    else if (playerOneResult == 4){
        document.querySelector("#playerOneSix").setAttribute("src","./four.png");
    }

    else if (playerOneResult == 5){
        document.querySelector("#playerOneSix").setAttribute("src","./five.png");
    }

    else{
        document.querySelector("#playerOneSix").setAttribute("src","./six.png");
    }
}


function playerTwoImage(){
    if (playerTwoResult == 1){
        document.querySelector("#playerTwoSix").setAttribute("src","./one.png");
    }

    else if (playerTwoResult == 2){
        document.querySelector("#playerTwoSix").setAttribute("src","./two.png");
    }

    else if (playerTwoResult == 3){
        document.querySelector("#playerTwoSix").setAttribute("src","./three.png");
    }

    else if (playerTwoResult == 4){
        document.querySelector("#playerTwoSix").setAttribute("src","./four.png");
    }

    else if (playerTwoResult == 5){
        document.querySelector("#playerTwoSix").setAttribute("src","./five.png");
    }

    else{
        document.querySelector("#playerTwoSix").setAttribute("src","./six.png");
    }
}

function playerWin(){
    if(playerOneResult>playerTwoResult){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
        document.querySelector(".logo").setAttribute("src","./win.png");

    }
    else if(playerOneResult === playerTwoResult){
        document.querySelector("h1").innerHTML = "This is a Tie!";
    }
    else{
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
        document.querySelector(".logo").setAttribute("src","./win.png");
    }
}

document.querySelector(".playButton").addEventListener("click", () => {
  playerOneImage();
  playerTwoImage();
  playerWin();
});