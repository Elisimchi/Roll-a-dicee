function random(){
var randomNumber1 = Math.floor(Math.random()* 6 + 1)
var randomNumber2 = Math.floor(Math.random()* 6 + 1)
var randomDiceImage1 = "images/" + randomNumber1 + ".png"
var randomDiceImage2 = "images/" + randomNumber2 + ".png"

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1)
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2)

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "player 1 Wins"
} 
else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "it's a draw"
}
else{
document.querySelector("h1").textContent = "player 2 Wins"
}

console.log(randomNumber1,randomNumber2)
}
