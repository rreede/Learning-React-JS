import {useState} from 'react';

function CalculatorAdd() {

    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');


    function changeFirstValue(event) {
        setFirstValue(event.target.value);
    }

    function changeSecondValue(event) {
        setSecondValue(event.target.value);
    }

        const result = Number(firstValue) + Number(secondValue);
 
    return(
       <>

        <input type='number' name='add'  onChange={changeFirstValue}
        /><p>+</p> 
        <input type='number' name='add' onChange={changeSecondValue}/><p>=</p> 
        <p>{result}</p> 
       </>
    )
}

export default CalculatorAdd;