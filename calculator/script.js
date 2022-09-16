//to clear all values
function clearScr() {
    document.getElementById("result").value = 0;
}
 
//  for displaying values
function display(value) {
    document.getElementById("result").value += value;
}
 
// calculate
function calculate() {
    var val = document.getElementById("result").value;
    var result = Function("return " + val)(); 
    document.getElementById("result").value = result;
}



