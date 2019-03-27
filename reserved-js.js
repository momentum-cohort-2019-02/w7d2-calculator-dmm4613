let input = ''
let display = ''

function makeButtons() {
    console.log('1')
    const buttonsDiv = document.querySelector('#numbers')
    let index = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
    for (let i of index){
        const numberButton = document.createElement('button')
        numberButton.innerText = `${i}`
        numberButton.addEventListener('click', function () {
            input = i
            showDisplay(input)
        })  

        buttonsDiv.appendChild(numberButton)
    }
    console.log(buttonsDiv.querySelectorAll('button'))

    const operatorDiv = document.querySelector('#operators')
    let operands = ['+', '-', '*', '/', '%']
    for (let y of operands){
        const operatorButton = document.createElement('button')
        operatorButton.innerText = `${y}`
        operatorButton.addEventListener('click', function () {
            input = ` ${y} `
            showDisplay(input)
        })  

        operatorDiv.appendChild(operatorButton)
    }
    console.log(buttonsDiv.querySelectorAll('button'))

    const equalsDiv = document.querySelector('#equals')
    let equals = '='
    const equalsButton = document.createElement('button')
    equalsButton.innerText = `${equals}`
    equalsButton.addEventListener('click', function () {
        evaluate(display)
        display = ''
        input = ''
    })
        equalsDiv.appendChild(equalsButton)
    
    const clearDiv = document.querySelector('#clear')    
    let clear = 'C'
    const clearButton = document.createElement('button')
    clearButton.innerText = `${clear}`
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