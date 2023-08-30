//Calculator Screen
let liveInput = document.getElementById('liveInput');
let answerInput = document.getElementById('answerOutput');

//Number Buttons
let numberNine = document.getElementById('numberNine');
let numberEight = document.getElementById('numberEight');
let numberSeven = document.getElementById('numberSeven');
let numberSix = document.getElementById('numberSix');
let numberFive = document.getElementById('numberFive');
let numberFour = document.getElementById('numberFour');
let numberThree = document.getElementById('numberThree');
let numberTwo = document.getElementById('numberTwo');
let numberOne = document.getElementById('numberOne');
let numberZero = document.getElementById('numberZero');

//Operator Buttons
let exponentButton = document.getElementById('exponentButton');
let backButton = document.getElementById('backButton');
let clearButton = document.getElementById('clearButton');
let divideButton = document.getElementById('divideButton');
let multiplyButton = document.getElementById('multiplyButton');
let minusButton = document.getElementById('minusButton');
let plusButton = document.getElementById('plusButton');
let decimalButton = document.getElementById('decimalButton');
let squareRootButton = document.getElementById('squareRootButton');
let enterButton = document.getElementById('enterButton');


//Variables
let currentSum = 0;
let currentInput = [];
let currentInputString = "";



//Event Listeners
clearButton.addEventListener('click', () => clearScreen());
backButton.addEventListener('click', () => backOperation());
enterButton.addEventListener('click', () => getResult());

numberZero.addEventListener('click', () => handleNumberOrOperation(0));
numberOne.addEventListener('click', () => handleNumberOrOperation(1));
numberTwo.addEventListener('click', () => handleNumberOrOperation(2));
numberThree.addEventListener('click', () => handleNumberOrOperation(3));
numberFour.addEventListener('click', () => handleNumberOrOperation(4));
numberFive.addEventListener('click', () => handleNumberOrOperation(5));
numberSix.addEventListener('click', () => handleNumberOrOperation(6));
numberSeven.addEventListener('click', () => handleNumberOrOperation(7));
numberEight.addEventListener('click', () => handleNumberOrOperation(8));
numberNine.addEventListener('click', () => handleNumberOrOperation(9));

exponentButton.addEventListener('click', () => handleNumberOrOperation("^"));
divideButton.addEventListener('click', () => handleNumberOrOperation("/"));
multiplyButton.addEventListener('click', () => handleNumberOrOperation("*"));
minusButton.addEventListener('click', () => handleNumberOrOperation("-"));
plusButton.addEventListener('click', () => handleNumberOrOperation("+"));
squareRootButton.addEventListener('click', () => handleNumberOrOperation("**"));
decimalButton.addEventListener('click', () => handleNumberOrOperation("."));














//Functions

function clearScreen()
{
    currentSum = 0;
    currentInput = [];
    currentInputString = "";
    liveInput.textContent = "";
    answerInput.textContent = "";
}

function backOperation()
{
    if (currentInput.length >= 1)
    {
        currentInput.pop();
        currentInputString = currentInputString.substring(0, currentInput.length - 1);
        liveInput.textContent = currentInputString;
    }

}

function getResult()
{

}

function handleNumberOrOperation(input)
{
    switch(input)
    {
        case 0:
            currentInput.push(0);
            currentInputString += "0";
            liveInput.textContent = currentInputString;
            break;
        
        case 1:
            currentInput.push(1);
            currentInputString += "1";
            liveInput.textContent = currentInputString;
            break;

        case 2:
            currentInput.push(0);
            currentInputString += "0";
            liveInput.textContent = currentInputString;
            break;
           
    }
}

function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function mutliply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
}

function exponent(a, b)
{
    return a ** b;
}

function sqaureRoot(a)
{
    return Math.sqrt(a);
}

