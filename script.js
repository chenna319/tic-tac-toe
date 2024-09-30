let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#rst-btn");
let newBtn = document.querySelector("#newGameBtn");
let msg = document.querySelector("#msg");
let result = document.querySelector(".result-container");

let turnO = true;

const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const resetGame = () => {
  turnO = true;
  enableBoxes();
  result.classList.add("hide");
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations the winner is ${winner}`;
  result.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winningPattern) {
    let pat1val = boxes[pattern[0]].innerText;
    let pat2val = boxes[pattern[1]].innerText;
    let pat3val = boxes[pattern[2]].innerText;

    if (pat1val !== "" && pat2val !== "" && pat3val !== "") {
      if (pat1val === pat2val && pat2val === pat3val) {
        showWinner(pat1val);
      }
    }
  }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
