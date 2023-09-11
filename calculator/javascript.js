// function favoriteAnimal(animal) {
//     return "A " + animal + " is my favorite animal"
// }

// console.log(favoriteAnimal('Frog'))

// function add7(number) {
//     return number + 7
// }

//initial setup
let firstNumber = '';
let secondNumber = '';
let operater = ''; // assigning default values

let resultDisplay = document.querySelector("#resultDisplay");
resultDisplay.textContent = '';

//functions
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber) {
    return firstNumber*secondNumber;
}
function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}
function mod(firstNumber, secondNumber) {
    return firstNumber % secondNumber;
}

function addDigitToScreen(number) {
        resultDisplay.textContent += number;
}

function pressNumber(e) {
    console.log("number pressed is: " + e.target.value );
    addDigitToScreen(e.target.value)
}


function operate(operater, firstNumber, secondNumber) {
    switch(operater) {
        case '+':
          resultDisplay.textContent = add(firstNumber, secondNumber);
          break;
        case '-':
            resultDisplay.textContent = subtract(firstNumber, secondNumber);
          break;
        case 'x':
            resultDisplay.textContent = multiply(firstNumber, secondNumber);
            break;
        case '/':
            resultDisplay.textContent = divide(firstNumber, secondNumber);
            break;
        case '%':
            resultDisplay.textContent = mod(firstNumber, secondNumber);
        default:
          // code block
      }
}

function pressOperator(e) {
    console.log(e.target)
    if (e.target.value == "Clear") { resultDisplay.textContent = 0; }

    firstNumber = Number(resultDisplay.textContent);
    resultDisplay.textContent = '';
    operater = e.target.value
}

function pressEquals(e) {
    secondNumber = Number(resultDisplay.textContent);
    console.log(operater, firstNumber, secondNumber);
    operate(operater, firstNumber, secondNumber);
}

//wire up all the buttons
const btnNumbers = document.querySelectorAll('.bNum');
btnNumbers.forEach( (button) => button.addEventListener('click', pressNumber));

const btnOperators = document.querySelectorAll('.bOperators')
btnOperators.forEach( (button) => button.addEventListener('click', pressOperator));

const btnEquals = document.querySelector("#bEquals");
btnEquals.addEventListener('click', pressEquals);
