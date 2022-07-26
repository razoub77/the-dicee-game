function play() {
    var randomDice1 = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
    var randomDice2 = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
    
    document.querySelector(".img1").setAttribute("src", randomDice1);
    document.querySelector(".img2").setAttribute("src", randomDice2);
    
    if ( randomDice1 > randomDice2 ) {
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    } else if ( randomDice1 < randomDice2 ) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

document.querySelector("button").setAttribute("onclick", "play()")