let timeLeft;
let intervalID = null;
let score;

$(document).ready(function(){
    $("#reset-button").click(function(){
        if(intervalID) {
            clearInterval(intervalID)
        }
        $("#reset-button").html("Reset Game");

        score = 0;
        $("#score-value").html(score);
        
        timeLeft = 10;
        $("#timer-value").html(timeLeft);
        startCountdown();
    })
})

function startCountdown() {
    intervalID = setInterval(decrement, 1000);
}

function decrement() {
    timeLeft -= 1
    if(timeLeft <= 0){
        clearInterval(intervalID)
    }
    $("#timer-value").html(timeLeft); 
}

/**
 * TODO: 
 * - Swap hole with mole
 * - Make mole clickable (alert)
 * - Make mole increment score when clicked
 * - Make moles randomly swap/swap back with hole
 *
 */
