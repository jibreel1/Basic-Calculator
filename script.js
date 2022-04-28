const displayElOne = document.querySelector(".display-1");
const displayElTwo = document.querySelector(".display-2");
const tempDisplay = document.querySelector(".temp-display");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAll = document.querySelector(".clear-all");
const lastClear = document.querySelector(".temp-clear");

let displayOne = "";
let displayTwo = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbersEl.forEach((number) => {
   number.addEventListener("click", (e) => {
      if (e.target.innerText === "." && !haveDot) {
         haveDot = true;
      } else if (e.target.innerText === "." && haveDot) {
         return;
      }
      displayTwo += e.target.innerText;
      displayElTwo.innerText = displayTwo;
      //   console.log(e);
   });
});

operationEl.forEach((operation) => {
   operation.addEventListener("click", (e) => {
      if (!displayTwo) return;
      haveDot = false;
      const operationName = e.target.innerText;
      if (displayOne && displayTwo && lastOperation) {
         mathOperation();
      } else {
         result = parseFloat(displayTwo);
      }
      clearVar(operationName);
      lastOperation = operationName;
      console.log(result);
   });
});

function clearVar(name = "") {
   displayOne += displayTwo + " " + name + " ";
   displayElOne.innerText = displayOne;
   displayElTwo.innerText = "";
   displayTwo = "";
   tempDisplay.innerText = result;
}

function mathOperation() {
   if (lastOperation === "/") {
      result = parseFloat(result) / parseFloat(displayTwo);
   } else if (lastOperation === "x") {
      result = parseFloat(result) * parseFloat(displayTwo);
   } else if (lastOperation === "-") {
      result = parseFloat(result) - parseFloat(displayTwo);
   } else if (lastOperation === "+") {
      result = parseFloat(result) + parseFloat(displayTwo);
   } else if (lastOperation === "%") {
      result = parseFloat(result) % parseFloat(displayTwo);
   }
}

equalEl.addEventListener("click", (e) => {
   if (!displayOne || !displayTwo) return;
   haveDot = false;
   mathOperation();
   clearVar();
   displayElTwo.innerText = result;
   tempDisplay.innerText = "";
   displayTwo = "";
   displayOne = "";
});

clearAll.addEventListener("click", (e) => {
   displayElOne.innerText = "0";
   displayElTwo.innerText = "0";
   displayOne = "";
   displayTwo = "";
   result = "";
   tempDisplay = "0";
});

lastClear.addEventListener("click", (e) => {
   displayElTwo.innerText = "";
   displayTwo = "";
});

window.addEventListener("keydown", (e) => {
   if (
      e.key === "0" ||
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "."
   ) {
      clickBtnEl(e.key);
   } else if (
      e.key === "/" ||
      e.key === "-" ||
      e.key === "+" ||
      e.key === "%"
   ) {
      clickOperation(e.key);
   } else if (e.key === "*") {
      clickOperation("x");
   } else if (e.key === "Enter" || e.key === "=") {
      clickEqual();
   } else if (e.key === "Escape") {
    clickClear();
 } else if (e.key === "Backspace") {
    clickLastClear();
 }
});

function clickBtnEl(key) {
   numbersEl.forEach((btn) => {
      if (btn.innerText === key) {
         btn.click();
      }
   });
}

function clickOperation(key) {
   operationEl.forEach((btn) => {
      if (btn.innerText === key) {
         btn.click();
      }
   });
}
function clickEqual() {
   equalEl.click();
}
function clickClear() {
    clearAll.click();
}
function clickLastClear() {
    lastClear.click();
}
