'use strict'

const outputList = document.getElementById('list_output');
const inputOne = document.getElementById('input_1');
const inputTwo = document.getElementById('input_2');
const add = document.getElementById('button_add');
const subtract = document.getElementById('button_subtract');
const multiply = document.getElementById('button_multiply');
const divide = document.getElementById('button_divide');
const equals = document.getElementById('button_equals');
const reset = document.getElementById('button_reset');
let result;


let oprList =(text)=> {
    let list = document.createElement('li');
    list.innerText = text;
    outputList.appendChild(list)
};

add.onclick =()=> {
    const num1 = Number(inputOne.value);
    const num2 = Number(inputTwo.value);
    
    const sum = num1 + num2;
    result = `${num1} + ${num2} = ${sum}`;  
};

subtract.onclick =()=>{
    const num1 = Number(inputOne.value);
    const num2 = Number(inputTwo.value);

    const diff = num1 - num2;
    result = `${num1} - ${num2} = ${diff}`;
}

multiply.onclick =()=>{
    const num1 = Number(inputOne.value);
    const num2 = Number(inputTwo.value);

    const prod = num1 * num2;
    result = `${num1} * ${num2} = ${prod}`;
}

divide.onclick =()=>{
    const num1 = Number(inputOne.value);
    const num2 = Number(inputTwo.value);

    const div = num1 / num2;
    result = `${num1} / ${num2} = ${div}`;
}

equals.onclick =()=>{
    oprList(result);
}


let counter = 0;
reset.onclick =()=>{
    if (counter === 0){
        inputOne.value = '';
        
    } else if (counter ===1){
        inputTwo.value = '';
    }else if (counter === 2){
        outputList.innerHTML = '';
        counter = -1;
    }
    counter++;
    // let count = document.getElementById('myForm').reset()
    // return count
}