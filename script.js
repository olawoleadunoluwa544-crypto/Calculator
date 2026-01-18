const display = document.getElementById('display');
let currentInput='0';
let resultDsisplayed = false;

function updateDisplay(){
    display.value=currentInput;
}
function appendNumber(number){
    if(resultDsisplayed){
        currentInput=number;
        resultDsisplayed=false;
    } else {
        if(currentInput==='0'){
            currentInput=number;
        } else {
            currentInput+=number;
        }
    }
    updateDisplay();
}

function appendOperator(operator){
    const lastChar=currentInput.slice(-1);
    const operators=['+','-','*','/'];

    if(operators.includes(lastChar)){return;
    }
    resultDisaplayed=false;
    currentInput+=operator;
    updateDisplay();
}

function deleteLast(){
    if(currentInput.length>1){
        currentInput=currentInput.slice(0,-1);
    } else {
        currentInput='0';
    }
    updateDisplay();
}

function calculateResult(){
    try{
        let result=eval(currentInput);

        if(!Number.isInteger(result)){
            result=result.toFixed(2);result=parseFloat(result);
        }

        currentInput=result.toString();
        resultDsisplayed=true;
        updateDisplay();
    } catch(error){
        currentInput='Error';
        updateDisplay();
        setTimeout(()=>{
            currentInput='0';
            updateDisplay();
        },1500);
    }
}