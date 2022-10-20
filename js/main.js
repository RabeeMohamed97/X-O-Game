let squers = [];

function over(num1, num2, num3) {
  title.innerHTML = `${squers[num1]} Winner`;
  document.getElementById("item" + num1).style.backgroundColor = "#0ff";
  document.getElementById("item" + num2).style.backgroundColor = "#0ff";
  document.getElementById("item" + num3).style.backgroundColor = "#0ff";
  setInterval(() => {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 4000);
}

function winner() {
  for (let i = 1; i < 10; i++) {
    squers[i] = document.getElementById("item" + i).innerHTML;
  }
  if (squers[1] == squers[2] && (squers[2] == squers[3]) & (squers[1] !== "")) {
    over(1, 2, 3);
  }
  if (squers[4] == squers[5] && (squers[5] == squers[6]) & (squers[5] !== "")) {
    over(4, 5, 6);
  }
  if (squers[7] == squers[8] && (squers[8] == squers[9]) & (squers[7] !== "")) {
    over(7, 8, 9);
  }
  if (squers[1] == squers[4] && (squers[4] == squers[7]) & (squers[1] !== "")) {
    over(1, 4, 7);
  }
  if (squers[2] == squers[5] && (squers[5] == squers[8]) & (squers[2] !== "")) {
    over(2, 5, 8);
  }
  if (squers[3] == squers[6] && (squers[6] == squers[9]) & (squers[6] !== "")) {
    over(3, 6, 9);
  }
  if (squers[1] == squers[5] && (squers[5] == squers[9]) & (squers[1] !== "")) {
    over(1, 5, 9);
  }
  if (squers[3] == squers[5] && (squers[5] == squers[7]) & (squers[7] !== "")) {
    over(3, 5, 7);
  }
}

let title = document.querySelector(".title");

let turn = "X";

function game(id) {
  let element = document.getElementById(id);
  if (turn === "X" && element.innerHTML == "") {
    element.innerHTML = "X";
    turn = "O";
    title.innerHTML = ".. O ..";
  } else if (turn === "O" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "X";
    title.innerHTML = ".. X ..";
  }
  winner();
}
