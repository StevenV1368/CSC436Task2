import {add,mul} from './math';

const eventHandler = () => {

    const addButton = document.getElementById('add');
    const mulButton = document.getElementById('mul');
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const result = document.getElementById('result');
    const mulResult = document.getElementById('mulResult');

    const updateDomWithAddedNumbers = () => {
        result.innerHTML = `Added Result is: ${add(number1.value,number2.value)}`;
        
    }

    const updateDomWithMultipliedNumbers = () => {
        result.innerHTML = `Multiplied Result is: ${mul(number1.value,number2.value)}`;
    }


    addButton.addEventListener('click', updateDomWithAddedNumbers);
    mulButton.addEventListener('click', updateDomWithMultipliedNumbers);
}



export {eventHandler};