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
let divideButton = document.getElementById('divideButton');
let multiplyButton = document.getElementById('multiplyButton');
let minusButton = document.getElementById('minusButton');
let plusButton = document.getElementById('plusButton');
let decimalButton = document.getElementById('decimalButton');
let toggleNegative = document.getElementById('toggleNegative');

let enterButton = document.getElementById('enterButton');
let backButton = document.getElementById('backButton');
let clearButton = document.getElementById('clearButton');


//Variables
let operandOne = "";
let operandOneActive = true;
let operandTwo = "";
let operandTwoActive = false;
let currentOperation = "";
let currentSum = "none";


//Event Listeners
clearButton.addEventListener('click', () => clearScreen());
backButton.addEventListener('click', () => backOperation());
enterButton.addEventListener('click', () => getResult());

numberZero.addEventListener('click', () => handleNumber("0"));
numberOne.addEventListener('click', () => handleNumber("1"));
numberTwo.addEventListener('click', () => handleNumber("2"));
numberThree.addEventListener('click', () => handleNumber("3"));
numberFour.addEventListener('click', () => handleNumber("4"));
numberFive.addEventListener('click', () => handleNumber("5"));
numberSix.addEventListener('click', () => handleNumber("6"));
numberSeven.addEventListener('click', () => handleNumber("7"));
numberEight.addEventListener('click', () => handleNumber("8"));
numberNine.addEventListener('click', () => handleNumber("9"));
decimalButton.addEventListener('click', () => handleNumber("."));

exponentButton.addEventListener('click', () => handleOperation("^"));
divideButton.addEventListener('click', () => handleOperation("÷"));
multiplyButton.addEventListener('click', () => handleOperation("*"));
minusButton.addEventListener('click', () => handleOperation("-"));
plusButton.addEventListener('click', () => handleOperation("+"));
toggleNegative.addEventListener('click', () => handleOperation("(+/-)"))


//Functions

function clearScreen()
{
    resetAfterResult();
    currentSum = "none";
    answerInput.textContent = " ";
    liveInput.textContent = " ";
}

function backOperation()
{
    if (operandOneActive && operandOne.length > 0)
    {
        operandOne = operandOne.substring(0, operandOne.length - 1);
        liveInput.textContent = operandOne;
    }

    else if (operandTwoActive && operandTwo.length === 0)
    {
        currentOperation = "";
        operandOneActive = true;
        operandTwoActive = false;
        liveInput.textContent = operandOne;
    }

    else if (operandTwoActive && operandTwo.length > 0)
    {
        operandTwo = operandTwo.substring(0, operandTwo.length - 1);
        liveInput.textContent = operandOne + " " + currentOperation + " " + operandTwo;
    }
}

function getResult()
{
    if (operandTwoActive && operandTwo.length >= 1)
    {
        if (currentOperation === "^")
        {
            let result = exponent(operandOne, operandTwo);
            answerInput.textContent = result;
            liveInput.textContent = operandOne + " ^ " + operandTwo + " =";
            currentSum = result;
            resetAfterResult();
            return result;
        }
    
        else if (currentOperation === "÷")
        {
            let result = divide(operandOne, operandTwo);
            answerInput.textContent = result;
            liveInput.textContent = operandOne + " ÷ " + operandTwo + " =";
            currentSum = result;
            resetAfterResult();
            return result;
        }
    
        else if (currentOperation === "*")
        {
            let result = mutliply(operandOne, operandTwo);
            answerInput.textContent = result;
            liveInput.textContent = operandOne + " * " + operandTwo + " =";
            currentSum = result;
            resetAfterResult();
            return result;
        }
    
        else if (currentOperation === "-")
        {
            let result = subtract(operandOne, operandTwo);
            answerInput.textContent = result;
            liveInput.textContent = operandOne + " - " + operandTwo + " =";
            currentSum = result;
            resetAfterResult();
            return result;
        }
    
        else if (currentOperation === "+")
        {
            let result = add(operandOne, operandTwo);
            answerInput.textContent = result;
            liveInput.textContent = operandOne + " + " + operandTwo + " =";
            currentSum = result;
            resetAfterResult();
            return result;
        }
    } 
}

function handleNumber(number)
{
    if (number === "0")
    {
        if (operandOneActive)
        {
            if (operandOne.length === 1 && operandOne === "0")
            {
                return;
            }
            else
            {
                operandOne += number;
                liveInput.textContent = operandOne;
            }
        }

        else if (operandTwoActive)
        {
            if (operandTwo.length === 1 && operandTwo === "0")
            {
                return;
            }
            else
            {
                operandTwo += number;
                liveInput.textContent = operandOne + " " + currentOperation + " " + operandTwo;
            }
        }
    }

    else if (number === "1")
    {
        if (operandOneActive)
        {
            operandOne += number;
            liveInput.textContent = operandOne;
        }

        else if (operandTwoActive)
        {
            operandTwo += number;
            liveInput.textContent = operandOne + " " + currentOperation + " " + operandTwo;
        }
    }

    else if (number === "2")
    {
        if (operandOneActive)
        {
            operandOne += number;
            liveInput.textContent = operandOne;
        }

        else if (operandTwoActive)
        {
            operandTwo += number;
            liveInput.textContent = operandOne + " " + currentOperation + " " + operandTwo;
        }
    }

    else if (number === "3")
    {
        if (operandOneActive)
        {
            operandOne += number;
            liveInput.textContent = operandOne;
        }

        else if (operandTwoActive)
        {
            operandTwo += number;
            liveInput.textContent = operandOne + " " + currentOperation + " " + operandTwo;
        }
    }

    else if (number === "4")
    {
        if (operandOneActive)
        {
            operandOne += number;
            liveInput.textContent = operandOne;
        }

        else if (operandTwoActive)
        {
            operandTwo += number;
            liveInput.textContent = operandOne + " " + currentOperation + " " + operandTwo;
        }
    }

    else if (number === "5")
    {
        if (operandOneActive)
        {
            operandOne += number;
            liveInput.textContent = operandOne;
        }

        else if (operandTwoActive)
        {
            operandTwo += number;
            liveInput.textContent = operandOne + " " + currentOperation + " " + operandTwo;
        }
    }

    else if (number === "6")
    {
        if (operandOneActive)
        {
            operandOne += number;
            liveInput.textContent = operandOne;
        }

        else if (operandTwoActive)
        {
            operandTwo += number;
            liveInput.textContent = operandOne + " " + currentOperation + " " + operandTwo;
        }
    }

    else if (number === "7")
    {
        if (operandOneActive)
        {
            operandOne += number;
            liveInput.textContent = operandOne;
        }

        else if (operandTwoActive)
        {
            operandTwo += number;
            liveInput.textContent = operandOne + " " + currentOperation + " " + operandTwo;
        }
    }

    else if (number === "8")
    {
        if (operandOneActive)
        {
            operandOne += number;
            liveInput.textContent = operandOne;
        }

        else if (operandTwoActive)
        {
            operandTwo += number;
            liveInput.textContent = operandOne + " " + currentOperation + " " + operandTwo;
        }
    }

    else if (number === "9")
    {
        if (operandOneActive)
        {
            operandOne += number;
            liveInput.textContent = operandOne;
        }

        else if (operandTwoActive)
        {
            operandTwo += number;
            liveInput.textContent = operandOne + " " + currentOperation + " " + operandTwo;
        }
    }

    else if (number === ".")
    {
        if (operandOneActive)
        {
            operandOne += number;
            liveInput.textContent = operandOne;
        }

        else if (operandTwoActive)
        {
            operandTwo += number;
            liveInput.textContent = operandOne + " " + currentOperation + " " + operandTwo;
        }
    }
    
}

function handleOperation(operation)
{
    if (operation === "^")
    {
        if (operandOneActive && currentSum !== "none" && operandOne.length === 0)
        {
            operandOne = currentSum;
            currentOperation = "^";
            liveInput.textContent = operandOne + " ^ ";
            operandOneActive = false;
            operandTwoActive = true;
        }
        else if (operandOneActive && operandOne.length === 0)
        {
            return;
        }

        else if (operandTwoActive && operandTwo.length === 0)
        {
            return;
        }

        else if (operandOneActive)
        {
            operandOneActive = false;
            operandTwoActive = true;
            currentOperation = "^";
            liveInput.textContent = operandOne + " ^ ";
        }

        
        else if (operandTwoActive)
        {
            currentSum = getResult();
            operandOne = currentSum;
            currentOperation = "^";
            liveInput.textContent = operandOne + " ^ ";
            answerInput.textContent = currentSum;
            operandOneActive = false;
            operandTwoActive = true;
        }
    }

    else if (operation === "÷")
    {
        if (operandOneActive && currentSum !== "none" && operandOne.length === 0)
        {
            operandOne = currentSum;
            currentOperation = "÷";
            liveInput.textContent = operandOne + " ÷ ";
            operandOneActive = false;
            operandTwoActive = true;
        }

        else if (operandOneActive && operandOne.length === 0)
        {
            return;
        }

        else if (operandOneActive)
        {
            operandOneActive = false;
            operandTwoActive = true;
            currentOperation = "÷";
            liveInput.textContent = operandOne + " ÷ ";
        }

        else if (operandTwoActive && operandTwo.length === 0)
        {
            return;
        }
        
        else if (operandTwoActive)
        {
            currentSum = getResult();
            operandOne = currentSum;
            currentOperation = "÷";
            liveInput.textContent = operandOne + " ÷ ";
            answerInput.textContent = currentSum;
            operandOneActive = false;
            operandTwoActive = true;
        }

    }

    else if (operation === "*")
    {
        if (operandOneActive && currentSum !== "none" && operandOne.length === 0)
        {
            operandOne = currentSum;
            currentOperation = "*";
            liveInput.textContent = operandOne + " * ";
            operandOneActive = false;
            operandTwoActive = true;
        }

        else if (operandOneActive && operandOne.length === 0)
        {
            return;
        }

        else if (operandOneActive)
        {
            operandOneActive = false;
            operandTwoActive = true;
            currentOperation = "*";
            liveInput.textContent = operandOne + " * ";
        }

        else if (operandTwoActive && operandTwo.length === 0)
        {
            return;
        }
        
        else if (operandTwoActive)
        {
            currentSum = getResult();
            operandOne = currentSum;
            currentOperation = "*";
            liveInput.textContent = operandOne + " * ";
            answerInput.textContent = currentSum;
            operandOneActive = false;
            operandTwoActive = true;
        }

    }

    else if (operation === "-")
    {
        if (operandOneActive && currentSum !== "none" && operandOne.length === 0)
        {
            operandOne = currentSum;
            currentOperation = "-";
            liveInput.textContent = operandOne + " - ";
            operandOneActive = false;
            operandTwoActive = true;
        }

        else if (operandOneActive && operandOne.length === 0)
        {
            return;
        }

        else if (operandOneActive)
        {
            operandOneActive = false;
            operandTwoActive = true;
            currentOperation = "-";
            liveInput.textContent = operandOne + " - ";
        }

        else if (operandTwoActive && operandTwo.length === 0)
        {
            return;
        }
        
        else if (operandTwoActive)
        {
            currentSum = getResult();
            operandOne = currentSum;
            currentOperation = "-";
            liveInput.textContent = operandOne + " - ";
            answerInput.textContent = currentSum;
            operandOneActive = false;
            operandTwoActive = true;
        }

    }

    else if (operation === "+")
    {
        if (operandOneActive && currentSum !== "none" && operandOne.length === 0)
        {
            operandOne = currentSum;
            currentOperation = "+";
            liveInput.textContent = operandOne + " + ";
            operandOneActive = false;
            operandTwoActive = true;
        }

        else if (operandOneActive && operandOne.length === 0)
        {
            return;
        }

        else if (operandOneActive)
        {
            operandOneActive = false;
            operandTwoActive = true;
            currentOperation = "+";
            liveInput.textContent = operandOne + " + ";
        }

        else if (operandTwoActive && operandTwo.length === 0)
        {
            return;
        }
        
        else if (operandTwoActive)
        {
            currentSum = getResult();
            operandOne = currentSum;
            currentOperation = "+";
            liveInput.textContent = operandOne + " + ";
            answerInput.textContent = currentSum;
            operandOneActive = false;
            operandTwoActive = true;
        }

    }

    else if (operation === "(+/-)")
    {
        if (operandOneActive)
        {
            if (operandOne.length === 0)
            {
                operandOne = "-";
                liveInput.textContent = operandOne;
            }
            else 
            {
                operandOne *= -1;
                liveInput.textContent = operandOne;
            }
        }

        else if (operandTwoActive)
        {
            if (operandTwo.length === 0)
            {
                operandTwo = "-";
                liveInput.textContent = operandOne + " " + currentOperation + " " + operandTwo;
            }
            else 
            {
                operandTwo *= -1;
                liveInput.textContent = operandOne + " " + currentOperation + " " + operandTwo;
            }
        }
         
    }
}

function add(a, b)
{
    return Number(a) + Number(b);
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

function resetAfterResult()
{
    operandOne = "";
    operandOneActive = true;
    operandTwo = "";
    operandTwoActive = false;
    currentOperation = "";
}
