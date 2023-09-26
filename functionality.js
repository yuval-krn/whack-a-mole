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

    $(".grid-item").click(function(){
        if ($(this).children().eq(0).attr('src') == "mole.png"){
            $(this).children().eq(0).attr('src', 'hole.png');
            score++;
            $("#score-value").html(score);
        }
    })
})

function startCountdown() {
    $("#gameGrid").children().children().attr('src','hole.png');
    intervalID = setInterval(decrement, 1000);
}

function decrement() {
    timeLeft -= 1
    if(timeLeft <= 0){
        clearInterval(intervalID)
    }
    $("#gameGrid").children().eq(timeLeft).children().attr('src','mole.png');
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
