alert("Hello, im js, I can help you find out if a number is zero ");

let x = prompt("Enter the number")

if (+x>0) {
    alert("Your value is bigger than zero")
} else if (+x<0) {
    alert("Your value is less than zero")
} else if (+x == 0) {
    alert("your value is null")
} else {
    alert(NaN)
}