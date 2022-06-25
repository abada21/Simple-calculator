let fNumber = prompt("Enter first number");
let operator = prompt("Choose your preferred operator(+_-_*_/)");
let sNumber = prompt("Enter second number");
let result = (`${fNumber} ${operator} ${sNumber}`);

if ( operator = "+"){
    result = fNumber + sNumber;
}
if ( operator = "-"){
    result = fNumber - sNumber;
}
if ( operator = "*"){
    result = fNumber * sNumber;
}
if ( operator = "/"){
    result = fNumber / sNumber;
}
alert(`${result}`);