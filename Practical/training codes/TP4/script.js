/*_________________JSON_________________
// JSON is a kind of standard format commonly used in webdev
//when you want to exchange a string from back-end to front end

//let's define a JSON string:
//The format is '{"key":value}'.
let jsonString ='{"name":"Jon Doe", "age":21,"city":"Esch-sur-Alzette", "isStudent":true,"hobbies":["bible","drawing"]}';

let obj = JSON.parse(jsonString); //converting a JSON string to a javascript object

console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.city);
console.log(obj.isStudent);
console.log(obj.hobbies[0]);*/


//setTimeout is a function used to execute a function after a certain amount of time

//shows "Hey there!" in the console after 3 seconds (3000 milliseconds) . NB: In the meanin time, it executes the following instructions:
/*setTimeout(function(){
    console.log("Hey there!");
},3000);*/

//This function counts down from seconds to 0,second after second, 
/*function startTimer(seconds){
    for(let i = seconds; i>=0; i--)
    {
        setTimeout(function(){
            console.log(i);
        }, (seconds-i)*1000); //we multiply by 1000 because the time is in milliseconds
    }
}
startTimer(5);*/
//The previous function can be defined using setInterval as follows: (The problem here is that)
/*function startTimer1(seconds)
{
    let i =seconds;
    setInterval(function()
    {
        console.log(i--);
    },1000); //for printing every 1000 millisecond in the terminal the value of i, and then incrementing i

}
startTimer1(5);
*/

/*
let i =0 ;
setInterval(function(){
    console.log(`Hey there! ${i++}`);
},1500);
*/
//**********************Online exercises for setInterval********************************** */
//function printNumbers(from, to) that outputs a number every second, starting from 'from' and ending with 'to'.
//using setTimeout:
/*
function printNumbers1(from,to)
{
    
    if(from>to)
    {
        let i = from;
        let timestop =setTimeout(function print1() {
            console.log(i--);
            timestop =setTimeout(print1, 1000);
            if(i<to)//NB it's reallyyyyy important to place clearTimeout after timestop = setTimeout(print1, 1000), because if we don't do it, the program just continues to print 
            {
                clearTimeout(timestop);
            }

        },1000)
    }
    else
    {
        let i = from;
        let timestop =setTimeout(function print2() {
            console.log(i++);
            timestop=setTimeout(print2, 1000);
            if(i>to)
            {
                clearTimeout(timestop);//same remark as in the case from>to
            }

        },1000)
    }
}
//printNumbers1(0,-10); //or printNumbers1(0,10);

function printNumbers2(from,to)
{
    let i;
    if(from>to)
    {
        i = from;
        let timerstop = setInterval(() => {
            console.log(i--);
            if(i<to)
        {
            clearInterval(timerstop);//It is important to put in in the set interval 
        }
        }, 1000);
        
    }
    else
    {
        i = from;
        let timerstop = setInterval(() => {
            console.log(i++);
            if(i>to)
            {
                clearInterval(timerstop);//same remark as in the case (from>to)
            }
        }, 1000);
       
    }
}*/
//printNumbers2(0,-10);
//using
/*_____________Error handling___________*/
/*
let msg = "hello";

//console.log(a); //if we leave it there, it causes an error
/*
console.log(msg);

try{ //we use is to catch errors
    console.log("Hey!");
    console.log(a); //here a is still undefined
}catch(error){//here we can use any name different than error. Example : er
    console.log("Error happened!");//this allows us to catch the error due to console.log(a)
    console.log(error.name);//this is a reference error
    console.log(error.message);//a is not defined
    console.log(error.stack);
}
console.log(msg);

//we have reference errors, syntax errors, type errors, evaluation errors, range errors, URL errors, internal errors
// (syntax errors or parse-time errors can not be catched by using try and catch. Only run time errors can be catched, or sometimes exceptions  )

//let's define our own error
let customError = ReferenceError("Something happened");

console.log(customError.name);
console.log(customError.message);

let jsonString = '{"name":"John"}';//age property is missing. we will define it as a syntax error
let obj = JSON.parse(jsonString);

console.log(obj);
/*
try{
console.log(x); //another source of error. Is handled in place of our SyntaxError because it comes before it.   
if(!obj.age) //if the property age is missing in object obj
{
    throw new SyntaxError("Age is missing");//the error is an instance of SyntaxError 
}

}
catch(err)//Here, we catch a Syntax error. Note, we can only catch syntax error that we defined ourselves.
{

    console.log(err.name); //the name is SyntaxError
    console.log(err.message);//"Age is missing"
}

try{
    if(!obj.age) //if the property age is missing in object obj
    {
        throw new SyntaxError("Age is missing");//the error is an instance of SyntaxError 
    }
    console.log(x); //another source of error. Is handled in place of our SyntaxError
    }
    catch(err)
    {
        if(err instanceof SyntaxError){//to avoid console.log(x) to be handled in place of our SyntaxError
        console.log(err.name); //the name is SyntaxError
        console.log(err.message);//"Age is missing"
        }
        else{
            throw err; //rethrwing if catch didn't catch the correct error.
        }
    }
*/
//CODEFORCES has many many coding assignments.

/*______________DOM_____________

HTML tags look like a tree (tags and sub tags..)*/

document.body.style.background = '';
//change color of the page every n second
let cameroon = 1; //because the background is red in the beginning
setInterval(function(){
    if(cameroon === 1)
    {
        document.body.style.background  = 'green';
        cameroon = 2;
    }
    else if(cameroon===2){
        document.body.style.background = 'red';
        cameroon = 3;
    }
    else{
        document.body.style.background = "yellow";
        cameroon = 1;
    }
}, 1000);
/*
setTimeout(function(){
    location.href = "https://uni.lu";
},3000);*/


