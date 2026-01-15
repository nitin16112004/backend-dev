console.log("Node.js Backend Started");  // Prints a message to the console indicating the backend has started

let name="nitin";  //Declares a variable 'name' and stores a string value
let age=24;        //Declares a variable 'age' and stores a numeric value
const country="India";  //Declares a constant 'country' and stores a string value
let isstudent=true;   //Declare a variable 'isstudent' and store a boolean value (true/false)

console.log("Name:", name);  //print the value of the variable 'name to the console
console.log("Age:", age);    //print the value of the variable 'age to the console
console.log("Country:", country); //print the value of the constant 'country' to the console
console.log("Is Student:", isstudent);  //print the value of the variable 'isstudent' to the console

//Data Types    
let score;
let data=null;
console.log("Score:", score);  //undefined      
console.log("Data:", data);    //null

//object
let user={
    name: "nitin",
    age: 24,
    country: "India"
    email: nitin16112004@gmail.com
};

//Operations
let a=5;
let b=10;

console.log("Addition:", a + b);          //Addition
console.log("Subtraction:", b - a);       //Subtraction
console.log("Multiplication:", a * b);  //Multiplication
console.log("Division:", b / a);         //Division         

//Conditional Statements
let ageCheck=18;
if(ageCheck >= 18){
    console.log(name + " is an adult.");
} else {
    console.log(name + " is a minor.");
}

//Loops(for loop)
for(let i=1; i<=5; i++){
    console.log("Loop Count:", i);
}

//Function
function add(x,y){
    return x + y;

}

let result=add(15,25);
console.log("Function Result:", result);  //print the result of the function to the console

//login Credentials
const admin={
    username: "admin",
    password: "password123"
}