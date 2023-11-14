
//Making Luxembourgish flag
/*
let flagTop = document.getElementById("flag-top");
console.log(flagTop);
flagTop.style.background = 'red'; 

let flagMiddle = document.getElementById("flag-middle");
console.log(flagMiddle);
flagMiddle.style.background = 'white'; 

let flagBottom = document.getElementById("flag-bottom");
console.log(flagBottom);
flagBottom.style.background = 'lightblue'; 
*/
/*
setTimeout(function()
    {let flagTop = document.getElementById("flag-top");
    console.log(flagTop);
    flagTop.style.background = 'red'; 
    
    let flagMiddle = document.getElementById("flag-middle");
    console.log(flagMiddle);
    flagMiddle.style.background = 'white'; 
    
    let flagBottom = document.getElementById("flag-bottom");
    console.log(flagBottom);
    flagBottom.style.background = 'lightblue'; 
},500);
//NB : We can asign the same ID to multiple elements, 
//but javascript is only going to consider one.
// So we should use unique ID for each element
setTimeout(function(){
    let flagSections = document.getElementsByClassName("flag-section");
    console.log(flagSections);
    for(let section of flagSections){
        section.style.background = "black";
    }
},1000);

setTimeout(function(){
    let districtTitles = document.getElementsByTagName('h2');
    for(let title of districtTitles)
    {
        title.style.color="red";
    }
},1000)

//in the css #district-wrapper li

setTimeout(function(){
    let liElements = document.querySelectorAll("#district-wrapper li");
    console.log();
    for (let liElem of liElements)
    {
        liElem.style.fontStyle = 'italic';
    }
},1500);

setTimeout(function(){ 
    let liElement = document.querySelector("#district-wrapper li"); //only for the first element
    console.log(liElement);
    liElement.style.color = 'red'; //to make it bold, change the fontweight. you can assign it a number or bold.

},2000);
*/
//task querySelector
/*
To find a table with id="age-table" : 
let tab = document.getElementById("age-table");

to find all label elements inside that table :
tab.getElementByClassName("label"); //here it is tab.getElementByTagName("label");

to find the first td in that table with the word "Age"
tab.querySelector("#Age td"); //here, it is tab.querySelector("td");

to find the form with name="search"
let theform = document.querySelectorAll("#search form");

to find the first input in that form :
theform.querySelector("input");

tof ind the last input in that form:
let allinputs = theform.querySelectorAll("input")
let last = allinputs[allinputs.length -1] ;
*/

//Making Luxembourgish flag
/*
let flagTop = document.getElementById("flag-top");
console.log(flagTop);
flagTop.style.background = 'red'; 

let flagMiddle = document.getElementById("flag-middle");
console.log(flagMiddle);
flagMiddle.style.background = 'white'; 

let flagBottom = document.getElementById("flag-bottom");
console.log(flagBottom);
flagBottom.style.background = 'lightblue'; 
*/

setTimeout(function()
    {let flagTop = document.getElementById("flag-top");
    console.log(flagTop);
    flagTop.style.background = 'red'; 
    
    let flagMiddle = document.getElementById("flag-middle");
    console.log(flagMiddle);
    flagMiddle.style.background = 'white'; 
    
    let flagBottom = document.getElementById("flag-bottom");
    console.log(flagBottom);
    flagBottom.style.background = 'lightblue'; 
},500);
//NB : We can asign the same ID to multiple elements, 
//but javascript is only going to consider one.
// So we should use unique ID for each element
setTimeout(function(){
    let flagSections = document.getElementsByClassName("flag-section");
    console.log(flagSections);
    for(let section of flagSections){
        section.style.background = "black";
    }
},0);

setTimeout(function(){
    let districtTitles = document.getElementsByTagName('h2');
    for(let title of districtTitles)
    {
        title.style.color="red";
    }
},0)

//in the css #district-wrapper li

setTimeout(function(){
    let liElements = document.querySelectorAll("#district-wrapper li");
    console.log();
    for (let liElem of liElements)
    {
        liElem.style.fontStyle = 'italic';
    }
},0);

setTimeout(function(){
    let elem = document.getElementById("district-wrapper");
    console.log(elem.parents);
    console.log(elem.children); //6 children (or 7?)
    for (let element of elem.children)
    {
        if(element.tagName == 'H2')
        {
            element.style.color = 'blue';
        }
    }
    elem.firstElementChild.style.color = 'orange';
},1000);


setTimeout(function(){
    let introTexElem = document.getElementById('intro-text');
    //introTexElem.innerText = "Something else..."; //shows the text as it is, no html
    //introTexElem.innerText = "Something <strong>else</strong>..."; //shows the text with tags
    introTexElem.innerHTML = "Something <strong>else</strong>..."; //embedding a piece of html code.
},1000);

setTimeout(function(){
    let introTexElem = document.getElementById('intro-text');
    console.log(introTexElem.innerHTML); //only prints (Some text...)
    console.log(introTexElem.outerHTML);// prints :(<p id="intro-text">Some text...</p>)
},1000);

setTimeout(
    function(){
        document.getElementById("flag-wrapper").hidden = true;
    },1000);

    setTimeout(
        function(){
            let myTextInput = document.getElementById("my-text-input");
            console.log(myTextInput.attributes); //to get a special attribute, use myTextInput.getAtrribute("name-of-attribute");
        },1000);

//Tasks DOM children:
/*
I give at least one way to access the elements
 -- <div>
 let elem = document.getElementByTagName('div');
 or 
 let elem = document.getElementByTagName('ul').parent;

 -- <ul>
let elem = document.getElementByTagName('ul');
or
let elem = document.getElementByTagName('div').children[0];
-- <li>
let elem = document.getElementByTagName('li');
*/
/*
setTimeout(function(){
    let myTextInput = document.getElementById("my-text-input");
    console.log(myTextInput.getAttribute);
    myTextInput.setAttribute("class", myTextInput.getAttribute)
})*/