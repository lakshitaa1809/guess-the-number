// generating a random number
"use strict";
const a = Math.floor(Math.random() * (30 - 1)) + 1;
let msg = document.getElementById("display");
let attempt = document.getElementById("attempt");
let score = document.getElementById("score");
console.log(a);
let guessnumber = "";
let count = 0;
function clicked() {
  if (count < 5) {
    guessnumber = document.getElementById("enterno").value;
    console.log(guessnumber);
    if (isNaN === true) {
      alert("Enter only digits");
    } else if (a == guessnumber) {
      msg.value = null;
      alert("Congrats! you WON🤩🤩🤩");
    } else if (guessnumber > a) {
      count++;
      attempt.innerHTML = count;
      msg.value = "Number too High 😇😇";
    } else if (guessnumber < a) {
      count++;
      attempt.innerHTML = count;
      msg.value = "Number too Low 😇😇";
    }
  } else {
    alert("Try again...🤪🤪🤪Game over!!!");
  }
  score.innerHTML = 50 - count * 10;
}
