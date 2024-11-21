const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const validateNumber = () => {
  const rawNumber = userInput.value.replace(/^(-)|[()\-\s]/g, (match, p1) => (p1 ? p1 : ""));
  const openBrackets = (userInput.value.match(/\(/g) || []).length;
  const closeBrackets = (userInput.value.match(/\)/g) || []).length;
  if ((userInput.value.match(/-/g) || []).length > 2) {
    result.innerText = `Invalid US number: ${userInput.value}`;
  }
  else if ((openBrackets + closeBrackets) % 2 === 1) {
    result.innerText = `Invalid US number: ${userInput.value}`;
  }
  else if (rawNumber.length === 10 || rawNumber.length === 11) {
    if (rawNumber.length === 11 && rawNumber[0] === "1") {
      result.innerText = `Valid US number: ${userInput.value}`;
    }
    else if (rawNumber.length === 11 && rawNumber[0] !== "1") {
      result.innerText = `Invalid US number: ${userInput.value}`;
    }
    else if (userInput.value[0] === "(" && userInput.value[userInput.value.length - 1] === ")") {
      result.innerText = `Invalid US number: ${userInput.value}`;
    }
    else {
      result.innerText = `Valid US number: ${userInput.value}`;
    }
  }
  else {
    result.innerText = `Invalid US number: ${userInput.value}`;
  }
}

checkBtn.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
  }
  else {
    validateNumber(userInput.value);
  }
});

clearBtn.addEventListener("click", () => {
  result.innerText = "";
});
