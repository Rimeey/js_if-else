alert("Hello, im js, and i will help you compare 2 numbers ");

let x = prompt("Enter the first number");
let y = prompt("Enter the second number");

if (+x>+y) {
    alert(x+">"+y)
} else if (+x<+y) {
    alert(x+"<"+y)
} else if (+x == +y) {
    alert(x+"="+y)
} else {
    alert("NaN")
}