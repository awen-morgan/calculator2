let firstNumber;
let mathSymbol;
let secondNumber;
let sum;

const numberAppear = (numberIn) => {
  const input = document.getElementById("input");
  input.value = input.value + numberIn;
};

const mathSymbolAppear = (symbolIn) => {
  const input = document.getElementById("input");
  firstNumber = input.value;
  mathSymbol = symbolIn;

  console.log(firstNumber);
  console.log(mathSymbol);
  input.value = input.value + mathSymbol;
};
function equalsAppear(equalIn) {
  const input = document.getElementById("input");
  firstNumber = input.value;
  let numberArr = input.value.split(mathSymbol);
  console.log(equalIn);
  console.log(numberArr);
  console.log(secondNumber);

  const numberOne = Number(numberArr[0]);
  const numberTwo = Number(numberArr[1]);

  if (mathSymbol === "+") {
    sum = numberOne + numberTwo;
    console.log(sum);
  } else if (mathSymbol === "-") {
    sum = numberOne - numberTwo;
    console.log(sum);
  } else if (mathSymbol === "*") {
    sum = numberOne * numberTwo;
    console.log(sum);
  } else if (mathSymbol === "/") {
    sum = numberOne / numberTwo;
    console.log(sum);
  }
  input.value = sum;
}
