// Iteration 8: Making scoreboard functional

const scoreboard=document.getElementById("score-board")
scoreboard.innerText=localStorage.getItem("total")

const playagain=document.getElementById("play-again-button").addEventListener('click',()=>{
    location.href='game.html'
})