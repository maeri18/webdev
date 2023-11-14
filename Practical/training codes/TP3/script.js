
/*************************PART 1 : FUNCTIONS****************

function sayHello(){

    console.log("Hello");
    }
    
    function printFullname(firstname, lastname)
    {
        console.log(`Your fullname is ${firstname} ${lastname}`);

    }

    printFullname("Maeri","Rinrin");

    let fname = 'Alex';
    let lname = 'Feit';
    printFullname(fname, lname);

    let firstname = 'Mae'
    let lastname = 'Rin'
    console.log(`Your fullname is ${firstname} ${lastname}`);
 //Adavntages of writing functions is to avoid repeating code, and eady modification of code (You onl have to modify the code of the function)

 function sayHello1(username = "Guest"){ //here Guest is the default value for username. It's optional.

    console.log("Hello"+ username);
    }
    let a = printFullname(fname,lname);

    console.log(a); // the funtion printFullname doesn't have any return value, so a is undefined
sayHello();
sayHello1("ALI");

function add(a,b)
{
    let c = a + b;
    return c;
}//This function has a return value

a = add(2,6);
console.log(a); //since add has a return value, in the console, we have the result : 8 showed on the screen

function isEven(num)
{
    if(num%2==0)
    {
        return true;
    }
    return false;
}

console.log(isEven(8));
console.log(isEven(7));

function doubleTheNumber(num)
{
    return num * 2;
}

console.log(doubleTheNumber(3));

let double = (num) => num * 2; //Function in one line, takes one argument and returns its double : it is called Arrow function
console.log(double(9));

let addNumbers = (a,b) => a + b;
console.log(addNumbers(2,9));

function showWarning()
{
    console.log("Warning!");

}

let warningFunction = showWarning; //It is possible to affect a function to a variable!!!!!1

showWarning();

warningFunction();//warningFunction is also a function
warningFunction; //doesn't do anything


function authenticate(age, allowedFunction, notAllowedFunction){ //we can pass functions to another function
    if(age>18)
    {
        allowedFunction();

    }
    else{
        notAllowedFunction();
    }


}

function welcome()
{
    console.log("Welcome!");

}

function rejected()
{
    console.log("You are noe allowed to use this service!");

}

authenticate(19, welcome, rejected); //call to function authenticate with the other two functions welcome and rejected 

confirm("Do you really want chocolate?"); //Alerts a  box with a question we should "confirm" (click OK)
//Search function call-back and the scope of variables

*/
/*************************PART 2 :STRINGS 
let num = 3.2322323

console.log(Math.ceil(num)); //Math is a class and provides functions for numeric calculations. Math.ceil gives an approximation (majorée)
console.log(Math.floor(num));//inferior approximation of a decimal number in an integer
console.log(Math.round(num));//closest approximation of a decimal number in an integer

console.log(Math.random());

function rollDice()
{
    return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDice());

true_email = 'abc@xyz.com';

input_email = prompt("Please, enter your email address.");

input_email = input_email.trim(); //trim is a build-in function to remove spaces at the end of in the beginning. Without trimming, putting space before or after the input_email address will lead to an "incorrect" message
input_email = input_email,toLowerCase(); //To transform every uppercase in a string into lowercase. Is useful in case the user enters an email address in uppercase.
if(true_email === input_email)
{
    console.log("correct!");
}
else{
    console.log("incorrect");
}
*/
/************PART 3: ARRAYS 
let arr = []; //empty array
let arr = new Array(); //empty array

let courses = ["Web Development 1","Data Structures", "Databases"];

let ects = [5,4,4];
console.log(courses[0]);
console.log(courses[2]);

console.log(courses.length);

for(let c of courses)
{
    console.log(c);
}

courses[2] = "Operating Systems";
console.log(courses);

courses.push("Computer Networks"); //adds "Computer Networks" at the end of the array courses
console.log(courses);

courses.pop();//removes the last element of array courses
console.log(courses); 

let numbers = [2,6,8];
let sum = 0;
for (let i = 0; i<numbers.length; i++)
{
    sum+=numbers[i];
}
*/

let person = {
    firstName : "John", 
    lastName : "Doe",
    age : 30
    greet: function()
    {
        console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
    }
};

console.log(person.lastName);
person.lastName = 'Feit';
console.log(person.lastName);

//objects have behaviors, and behaviors are deined by functions
person.greet();

let anotherPerson = person;

console.group(anotherPerson.firstName);
anotherPerson.firstName = 'Alex'; //here, modifying anotherPerson also modifies person. To avoid it, we create another object
console.log(anotherPerson.firstName);
console.log(person.firstName);


let another = Object.assign({},person); //Copies person in another


function Person(firstName, lastName,  age)
{
    this.firstName = firstName,
    this.lastName = lastName,
    this.age=age,
    this.greet = function(){
        HTMLFormControlsCollection.log(`Hello, I'm ${firstName} ${lastName}`)
    }
};

let person1 = new Person ("Alice", "Smith", "32"); //constructor
let person1 = new Person ("Alice", "Smith", "32");
let person1 = new Person ("Alice", "Smith", "32");

let people = [];

people.push(person1);