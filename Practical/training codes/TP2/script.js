/*
//alert("Hello");
let birth_year = prompt("Please enter the year of your birth");
alert(typeof birth_year); //we use typeof to have the type of a variable

let age = 2023 - birth_year;
alert("Your age is ${age} years old");
alert(Number(undefined)); // result is NaN

let a = "123ert";
alert(Number(a)); //shows NaN

let a1 = "123";
alert(Number(a1)); //shows 123

let a = 2;
let b = 3;
alert(b+a); //5
alert(b-a);//1
alert(b**a);//9 = 3^2 = 3*3
alert(b/a);//1.5
alert(b%a);//1

b = 6;
b++; //b=b+1

alert(b);//shows 7

a = 6;
a+=1;
alert(a); //shows 7

a = 1;
b = '2';
alert(a+b); //shows 12, a string
alert(typeof (a+b)); 

a = "Hello";
b = "World!";
alert(a+''+b);

let x = 3;
x = -x; //-3
alert(x);*/
/*
let age = prompt("Enter your age");

age = Number(age);

if(age>18)
{
    alert("You are allowed to use our website");
}
else{
    alert("Access denied!");
}
*/
/* Operators : 
== : equal
!= : not equal
> : greater than
< : smaller than
*/
/*
let a = 3;

let b = '3';
if(a==b) //When comparing a string to a number, the string will be converted to a number.
{
    alert("True");
}
else{
alert("false");
}

if(a===b) //With ===, also the types of operands are checked
{
    alert("True");
}
else{
alert("false");

}
*/
/*
let a = 3;

if(a<3)
{
    alert("low");
}
else if (a>5)
{
    alert("high");
}
else{
    alert("med");
}
*/

// To combine two conditions, use || or &&
 
//6<a<9
/*
let a = 4;
if(a>6 && a<9)
{
    alert("TRUE");
}
else{
    alert("FALSE");
}
*/
/*
let true_username = 'a21';
let true_password = '1234';

username = prompt("Username?");
password = prompt("Password?");

if(username === true_username && password === true_password) //for safety, we also check for the types (===)
{
 alert("Welcome!");
}
else{
    alert("Wrong username / password");
}
*/
//alert(typeof 'a21'); 

/*let month_number = prompt("Please enter the number of the month");

month_number = Number(month_number); // for safety, we convert in a number

if(month_number===1)
{
    alert("Jan.");
}
else if (month_number ===2)
{
    alert("Feb.");
}
else if (month_number ===3)
{
    alert("Mar.");
}else if (month_number ===4)
{
    alert("Apr.");
}else if (month_number ===5)
{
    alert("May.");
}
else{
    alert("Invalud input");
}
*/
//With if, it really big. Hence, we can just use switch case.
/*
switch(month_number)
{
    case 1 :
        alert("Jan.");
        break
    case 2 :
        alert("Feb.");
        break
    case 3 :
        alert("Mar.");
        break
    case 4 :
        alert("Apr.");
        break
    default:
        alert("Invalid input");
        break
}*/

//let age = 15;
//this if else condition can be replaced by  message = age < 18 ? "Access denied!" : "Welcome";
/*
if (age<18)
{
    message = "Access denied!"
}
else{
    message = "Welcome";
}

alert(message);*/
/*
message = age < 18 ? "Access denied!" : "Welcome";
alert(message);*/

/*
for(let num = 0; num <= 20; num++)
{
    if(num % 2 == 0)
    {
        console.log(num); // is shown in developper tools console
    }
}
//show in console all odd number between  0 and 20 included
for(let num = 0; num <= 20; num++)
{
    if(num % 2 != 0)
    {
        console.log(num); // is shown in developper tools console
    }
}

//or
let num = 1;
for(num ; num <= 20; num+=2)
{
    
    console.log(num); // is shown in developper tools console
    
}*/
/*
for(let num = 0; num <= 20; num+=2) //because of num+=2, and we start at 0, there is no odd number that will be printed
{
    if(num % 2 != 0)
    {
        console.log(num);
    }
    else{
        console.log("EVEN!");
    }
}
*/
/*
for(let num = 0; num <= 20; num++) 
{
    if(num % 2 != 0)
    {
        console.log(num);
        break;
    }
    else{
        console.log("EVEN!");
    }
}
*/
/*
for(let num = 0; num <=100; num++)
{
    if (num>20 && num<40)
    {
        continue; //when we use continue, we pass all the remaining code and go to the next iteration
    }
    if(num % 2 ==0)
    {
        console.log(-num);
    }
}
*/

for(let num = 0; ;num++)
{
    if(num>20)
    {
        break;
    }
    if(num%2 == 0 )
    {
        console.log(num);
        break;
    }
}

for(let num = 0; ;)
{
    if(num>20)
    {
        break;
    }
    if(num%2 == 0 )
    {
        console.log(num);
        break;
    }
    num ++;
}

let num = 0;
while(num<20)
{
    if(num%2 == 0)
    {
        console.log(num);
    }
    num = num + 1;
}

//Read do while javascript

