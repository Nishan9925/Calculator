//input symbols maximum must be 8
//+/- and % does not work yet


const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';

}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value = 'Error';
            
    }
}
