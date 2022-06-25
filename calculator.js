let fNumber = prompt("Enter first number");
let operator = prompt("Choose your preferred operator(+_-_*_/)");
let sNumber = prompt("Enter second number");
let result 

if ( operator == "+"){
    result = parseInt(fNumber) + parseInt(sNumber);
}
if ( operator == "-"){
    result = parseInt(fNumber) - parseInt (sNumber);
}
if ( operator == "*"){
    result = parseInt(fNumber) * parseInt(sNumber);
}
if ( operator == "/"){
    result = parseInt(fNumber) / parseInt(sNumber);
}
alert(`${result}`);