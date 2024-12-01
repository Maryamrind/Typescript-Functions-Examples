//  Functions
// Example # 1
function Hello() {
    console.log("Hello world from function");
}
;
Hello(); //calling the function
// Example # 2
function Greet(name, age, colour) {
    console.log("Hello, my name is ".concat(name, ", my age is ").concat(age, " and my favourite colour is ").concat(colour, "."));
}
Greet("Maryam", 24, "Black");
Greet("Laiba", 20, "Blue");
// Example # 3
function Birthday(birthay_girl) {
    console.log("Hello ".concat(birthay_girl, "! Happy Birthday to you, Many Many happy returns of the day!"));
}
Birthday("Maryam");
// Example # 4
function Add(digit, digit0) {
    console.log("Addition: ".concat(digit + digit));
}
Add(35, 44);
Add(110, 22);
Add(255, 15);
// Example # 5
function Sub(digit1, digit2) {
    console.log("Subtraction: ".concat(digit1 - digit2));
}
Sub(35, 24);
Sub(11, 8);
Sub(25, 15);
// Example # 6
function multiply(digit3, digit4) {
    console.log("Multiplication: ".concat(digit3 * digit4));
}
multiply(2, 3);
multiply(25, 5);
multiply(20, 3);
// Example # 7
function Divide(digit3, digit4) {
    console.log("Division: ".concat(digit3 / digit4));
}
Divide(21, 3);
Divide(25, 5);
Divide(28, 7);
// Arrow Functions
// Example # 1
var helloArrow = function () {
    console.log("Hello from Arrow function");
};
helloArrow();
// Example # 2
var greetArrow = function (name, age, height) {
    console.log("Hello, my name is ".concat(name, ", my age is ").concat(age, " and my height is ").concat(height, " in meters."));
};
greetArrow("Maryam", 24, 1.65);
// Example # 3
var BirthdayArrow = function (birthay_girl) {
    console.log("Hello ".concat(birthay_girl, "! Happy Birthday to you, Many Many happy returns of the day!"));
};
BirthdayArrow("Maryam");
// Example # 4
var AddArrow = function (digit, digit0) {
    console.log("Addition: ".concat(digit + digit));
};
AddArrow(35, 44);
// Return Function
// Example # 1
var customercare = function (statement) {
    return statement;
};
var info = customercare("Dear customer! Your current balance is insufficient to compete this call. Please try later");
console.log(info);
// Example # 2
var isEven = function (num) {
    if (num % 2 == 0) {
        console.log("Even");
    }
    else {
        console.log("odd");
    }
};
isEven(9);
// Global Scope in Function
var Ali_Jawwad = "Ali Jawwad";
function Ali_Session() {
    var Ali = "Ali";
    console.log(Ali);
}
Ali_Session();
var Hamzah_Session = function () {
    var Hamzah = "Hamzah";
    console.log(Hamzah);
};
Hamzah_Session();
// Rest Parameters
// 
// Example # 1
function Wallet(colour) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(colour, args);
}
Wallet("Brown", "currency", "NIC", "ATM");
// Example # 2
function File_Upload(File1, File2) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    console.log(File1, File2, args);
}
File_Upload("Document1.pdf", "Document2.docx", "Document3.txt", "Document4.jpg");
// Optional Parameters
function From(name, feedback) {
    console.log(name);
}
From("Muhammad", "Good Student");
