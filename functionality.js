let timeLeft;
let intervalID = null;
let score;
let positions = [0,1,2,3,4,5,6,7,8];

$(document).ready(function(){
    $("#reset-button").click(function(){
        if(intervalID) {
            clearInterval(intervalID)
        }
        $("#reset-button").html("Reset Game");

        positions = [0,1,2,3,4,5,6,7,8];

        score = 0;
        $("#score-value").html(score);
        
        timeLeft = 10;
        $("#timer-value").html(timeLeft);
        startCountdown();
    })

    $(".grid-item").click(function(){
        if ($(this).children().eq(0).attr('src') == "mole.png" && timeLeft > 0){
            $(this).children().eq(0).attr('src', 'hole.png');
            score++;
            $("#score-value").html(score);
        }
    })
})

function startCountdown() {
    $("#gameGrid").children().children().attr('src','hole.png');
    intervalID = setInterval(decrement, 1000);
    generateMoles();
}

function decrement() {
    timeLeft -= 1
    if(timeLeft <= 0){
        clearInterval(intervalID)
        intervalID = null;
    }
    //$("#gameGrid").children().eq(timeLeft).children().attr('src','mole.png');
    $("#timer-value").html(timeLeft); 
}

async function generateMoles() {
    
    waitTime = Math.random() * (3000 - 500) + 500;
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            spawnMole();
            resolve("success");
        }, waitTime)
    });
    let result = await promise;
    
    if (timeLeft > 0) generateMoles();
}

function spawnMole() {
    //filter my positions array to get the available ones
    let avail = positions.filter((pos) => pos >= 0)
    if (avail.length === 0 || timeLeft <= 0) return
    //using length of the new array, randomly select one
    let index = Math.floor(Math.random() * avail.length);
    let swap = avail[index]
    //swap from hole to mole
    $("#gameGrid").children().eq(swap).children().attr('src','mole.png');
    //positions[swap] = -1
    positions[swap] = -1
}

/**
 * TODO: 
 * - Make moles randomly swap/swap back with hole
 *
 */
