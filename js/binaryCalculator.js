const res = document.getElementById("res");

function addText(value) {
  res.innerHTML += value;
}

function clearAll() {
  res.innerHTML = "";
}

function calculate() {
  let regex = /[\+|-|\*|/]/;
  let operation = res.textContent.match(regex);
  let numbers = res.textContent.split(regex);

  let num1 = parseInt(numbers[0], 2);
  let num2 = parseInt(numbers[1], 2);

  let result = 0;

  switch (operation[0]) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      alert("Error!");
      break;
  }

  res.innerHTML = result.toString(2);
}
