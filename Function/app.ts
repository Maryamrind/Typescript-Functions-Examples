//  Functions

// Example # 1
function Hello(){           //declaring function
    console.log(`Hello world from function`);
};
Hello()                     //calling the function


// Example # 2
function Greet(name:string,age:number,colour:string){
    console.log(`Hello, my name is ${name}, my age is ${age} and my favourite colour is ${colour}.`);
}

Greet("Maryam",24,"Black")
Greet("Laiba",20,"Blue")


// Example # 3
function Birthday(birthay_girl:string){
    console.log(`Hello ${birthay_girl}! Happy Birthday to you, Many Many happy returns of the day!`);
    
}
 Birthday("Maryam")

// Example # 4
function Add(digit:number,digit0:number){
    console.log(`Addition: ${digit+digit}`);
    
}
Add(35,44)
Add(110,22)
Add(255,15)

// Example # 5
function Sub(digit1:number,digit2:number){
    console.log(`Subtraction: ${digit1-digit2}`);
    
}
Sub(35,24)
Sub(11,8)
Sub(25,15)


// Example # 6
function multiply(digit3:number,digit4:number){
    console.log(`Multiplication: ${digit3*digit4}`);
}
multiply(2,3)
multiply(25,5)
multiply(20,3)



// Example # 7
function Divide(digit3:number,digit4:number){
    console.log(`Division: ${digit3/digit4}`);
}
Divide(21,3)
Divide(25,5)
Divide(28,7)

// Arrow Functions

// Example # 1

const helloArrow = () => {
    console.log(`Hello from Arrow function`);
    
}
helloArrow()


// Example # 2

const greetArrow = (name:string,age:number,height:number) =>{
    console.log(`Hello, my name is ${name}, my age is ${age} and my height is ${height} in meters.`);
}

greetArrow("Maryam",24,1.65)



// Example # 3

const BirthdayArrow = (birthay_girl:string) => {
    console.log(`Hello ${birthay_girl}! Happy Birthday to you, Many Many happy returns of the day!`);
    
}
BirthdayArrow("Maryam")

// Example # 4

const AddArrow = (digit:number,digit0:number) => {
    console.log(`Addition: ${digit+digit}`);
    
}
AddArrow(35,44)

// Return Function


// Example # 1

const customercare = (statement:string) => {
    return statement;
}
const info = customercare("Dear customer! Your current balance is insufficient to compete this call. Please try later")
console.log(info);


// Example # 2

const isEven = (num:any) => {
    if (num % 2 == 0) {
        console.log("Even");
        
    }

else{
    console.log("odd")
    
}
}
isEven(9)

// Global Scope in Function

let Ali_Jawwad = "Ali Jawwad"

function Ali_Session (){
    let Ali = "Ali"
    console.log(Ali)
}
Ali_Session()

const Hamzah_Session = () => {
    let Hamzah = "Hamzah"
    console.log(Hamzah)

}
Hamzah_Session()


// Rest Parameters

// 
// Example # 1

function Wallet(colour:string,...args:string[]){
    console.log(colour,args);
    
}
Wallet("Brown","currency","NIC","ATM")


// Example # 2

function File_Upload(File1:string,File2:string,...args:string[]){
    console.log(File1,File2,args);
    
}

File_Upload("Document1.pdf","Document2.docx","Document3.txt","Document4.jpg")

// Optional Parameters

function From(name:string,feedback?:string){
    console.log(name,feedback);
}
From("Muhammad","Good Student")
