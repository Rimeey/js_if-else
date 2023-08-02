alert("Hello, im js!");

let login
let password
login = prompt("Your login");
password = prompt("Your password");

if (login == "Admin") {
    password
} else if (login == "" || login == null) {
    alert("NaN")
} else {
    alert ("Wrong login")
}

if (password == "Own") {
    alert("Your Welcome!")
} else if (password == "" || password == null) {
    alert("NaN")
} else {
    alert("Wrong password")
}