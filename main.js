let input = ''
let display = ''

function makeButtons() {
    console.log('1')
    const numberOneDiv = document.querySelector('#button1')
    const numberOneButton = document.createElement('calc-btn')
    numberOneButton.innerText = '1'
    numberOneButton.addEventListener('click', function () {
        input = '1'
        showDisplay(input)
    })  

    numberOneDiv.appendChild(numberOneButton)

    const numberTwoDiv = document.querySelector('#button2')
    const numberTwoButton = document.createElement('calc-btn')
    numberTwoButton.innerText = '2'
    numberTwoButton.addEventListener('click', function () {
        input = '2'
        showDisplay(input)
    })  

    numberTwoDiv.appendChild(numberTwoButton)

    const numberThreeDiv = document.querySelector('#button3')
    const numberThreeButton = document.createElement('calc-btn')
    numberThreeButton.innerText = '3'

    numberThreeButton.addEventListener('click', function () {
        input = '3'
        showDisplay(input)
    })  

    numberThreeDiv.appendChild(numberThreeButton)

    const numberFourDiv = document.querySelector('#button4')
    const numberFourButton = document.createElement('calc-btn')
    numberFourButton.innerText = '4'

    numberFourButton.addEventListener('click', function () {
        input = '4'
        showDisplay(input)
    })  

    numberFourDiv.appendChild(numberFourButton)

    const numberFiveDiv = document.querySelector('#button5')
    const numberFiveButton = document.createElement('calc-btn')
    numberFiveButton.innerText = '5'

    numberFiveButton.addEventListener('click', function () {
        input = '5'
        showDisplay(input)
    })  

    numberFiveDiv.appendChild(numberFiveButton)

    const numberSixDiv = document.querySelector('#button6')
    const numberSixButton = document.createElement('calc-btn')
    numberSixButton.innerText = '6'

    numberSixButton.addEventListener('click', function () {
        input = '6'
        showDisplay(input)
    })  

    numberSixDiv.appendChild(numberSixButton)

    const numberSevenDiv = document.querySelector('#button7')
    const numberSevenButton = document.createElement('calc-btn')
    numberSevenButton.innerText = '7'

    numberSevenButton.addEventListener('click', function () {
        input = '7'
        showDisplay(input)
    })  

    numberSevenDiv.appendChild(numberSevenButton)

    const numberEightDiv = document.querySelector('#button8')
    const numberEightButton = document.createElement('calc-btn')
    numberEightButton.innerText = '8'

    numberEightButton.addEventListener('click', function () {
        input = '8'
        showDisplay(input)
    })  

    numberEightDiv.appendChild(numberEightButton)

    const numberNineDiv = document.querySelector('#button9')
    const numberNineButton = document.createElement('calc-btn')
    numberNineButton.innerText = '9'

    numberNineButton.addEventListener('click', function () {
        input = '9'
        showDisplay(input)
    })  

    numberNineDiv.appendChild(numberNineButton)

    const numberZeroDive = document.querySelector('#button0')
    const numberZeroButton = document.createElement('calc-btn')
    numberZeroButton.innerText = '0'

    numberZeroButton.addEventListener('click', function () {
        input = '0'
        showDisplay(input)
    })  

    numberZeroDive.appendChild(numberZeroButton)

    const decimalDiv = document.querySelector('#decimal')
    const decimalButton = document.createElement('calc-btn')
    decimalButton.innerText = '.'
    decimalButton.addEventListener('click', function () {
        input = '.'
        showDisplay(input)
    })  

    decimalDiv.appendChild(decimalButton)

    // console.log(input)
    const equalsDiv = document.querySelector('#equals')
    const equalsButton = document.createElement('calc-btn')
    equalsButton.innerText = '='

    equalsButton.addEventListener('click', function () {
        evaluate(display)
        display = ''
        input = ''
    })
    equalsDiv.appendChild(equalsButton)

    const additionDiv = document.querySelector('#addition')
        const additionButton = document.createElement('calc-btn')
        additionButton.innerText = '+'
        additionButton.addEventListener('click', function () {
            input = '+'
            showDisplay(input)
        })  
        additionDiv.appendChild(additionButton)

    const subtractionDiv = document.querySelector('#subtraction')
        const subtractionButton = document.createElement('calc-btn')
        subtractionButton.innerText = '-'

        subtractionButton.addEventListener('click', function () {
            input = '-'
            showDisplay(input)
        })  
        subtractionDiv.appendChild(subtractionButton)
    
    const multiplyDiv = document.querySelector('#multiply')
        const multiplyButton = document.createElement('calc-btn')
        multiplyButton.innerText = '*'
        multiplyButton.addEventListener('click', function () {
            input = '*'
            showDisplay(input)
        })  
        multiplyDiv.appendChild(multiplyButton)
    
    const divisionDiv = document.querySelector('#division')
        const divisionButton = document.createElement('calc-btn')
        divisionButton.innerText = '/'
        divisionButton.addEventListener('click', function () {
            input = '/'
            showDisplay(input)
        })  
        divisionDiv.appendChild(divisionButton)
    
    const remainderDiv = document.querySelector('#remainder')
        const remainderButton = document.createElement('calc-btn')
        remainderButton.innerText = '%'
        remainderButton.addEventListener('click', function () {
            input = '%'
            showDisplay(input)
        })  
        remainderDiv.appendChild(remainderButton)
     

    const clearDiv = document.querySelector('#clear')    
    const clearButton = document.createElement('calc-btn')
    clearButton.innerText = 'C'
    clearButton.addEventListener('click', function () { 
        display = ''
        input = ''
        showDisplay(input)  
    })
        clearDiv.appendChild(clearButton)
       

}

function showDisplay(input) {
    display = display + input
    console.log(display)
    document.querySelector('#display').innerText = `${display}`
}

function evaluate(display){
    let answer = eval(display)
    document.querySelector('#display').innerText = `${answer}`
    console.log(answer)
    display = ''
    input = ''
    return display, input
}

function main () {
    makeButtons()
    showDisplay(input)
}

document.addEventListener('DOMContentLoaded', main)