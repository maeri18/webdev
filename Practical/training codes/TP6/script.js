//We want to add a new node using javascript : dynamic modifictation of an html document
let postWrapper = document.createElement('div'); //we want to add that element to our html body
postWrapper.setAttribute("class", "post-wrapper"); //adding attribute "class" with value "post-wrapper"
postWrapper.setAttribute("id", "post02");
let posTitle = document.createElement('h1'); //we make the title of the new div element  
posTitle.innerText = "Another Post Title";
posTitle.setAttribute("class", "post-title");
postWrapper.append(posTitle);

let postDate = document.createElement("div");
postDate.innerText = "Wed, 8, Nov";
postDate.setAttribute("class", "post-date");
postWrapper.append(postDate); //if we don't append element to the wrapper, that itself is added into the html document, the html document is not modified 

let postBody = document.createElement("div");
postBody.innerHTML = "<p>First paragraph !</p><p>Second paragraph!</p>"; //here we use innerhtml because we want to add an html text, with tags
postWrapper.append(postBody);
document.body.append(postWrapper); //adding the node to the html document (It appears after script tags that call this JS document)
/*
//Fucntion to add a div in the document, given the parameters 
function addPost(title, date, body) { 
    //We want to add a new node using javascript : dynamic modifictation of an html document
    let postWrapper = document.createElement('div'); //we want to add that element to our html body
    postWrapper.setAttribute("class", "post-wrapper"); //adding attribute "class" with value "post-wrapper"
    let posTitle = document.createElement('h1'); //we make the title of the new div element  
    posTitle.innerText = title;
    posTitle.setAttribute("class", "post-title");
    postWrapper.append(posTitle);

    let postDate = document.createElement("div");
    postDate.innerText = date;
    postDate.setAttribute("class", "post-date");
    postWrapper.append(postDate); //if we don't append element to the wrapper, that itself is added into the html document, the html document is not modified 

    let postBody = document.createElement("div");
    postBody.innerHTML = body; //here we use innerhtml because we want to add an html text, with tags
    postWrapper.append(postBody);
    document.body.append(postWrapper); //adding the node to the html document (It appears after script tags that call this JS document)

//In VScode, by right clicking, you can format you code. Sooooo cooooool!!!1
}*/
/*
addPost("Third Post","Mon 6, Nov, 2023","<p>Some text</p>");
setTimeout (function(){
    addPost("Fourth Post","Mon 6, Nov, 2023","<p>Bluuuuuuuuuuuuuh</p>")}, 1500); //this is not a good practice because it adds the element at the en dof the document. We then use document.prepend in place of document.append

    function addPostBeginning(title, date, body) { 
        //We want to add a new node using javascript : dynamic modifictation of an html document
        let postWrapper = document.createElement('div'); //we want to add that element to our html body
        postWrapper.setAttribute("class", "post-wrapper"); //adding attribute "class" with value "post-wrapper"
        let posTitle = document.createElement('h1'); //we make the title of the new div element  
        posTitle.innerText = title;
        posTitle.setAttribute("class", "post-title");
        postWrapper.append(posTitle);
    
        let postDate = document.createElement("div");
        postDate.innerText = date;
        postDate.setAttribute("class", "post-date");
        postWrapper.append(postDate); //if we don't append element to the wrapper, that itself is added into the html document, the html document is not modified 
    
        let postBody = document.createElement("div");
        postBody.innerHTML = body; //here we use innerhtml because we want to add an html text, with tags
        postWrapper.append(postBody);
        document.body.prepend(postWrapper); //adding the node to the html document (It appears after script tags that call this JS document)
    
    //In VScode, by right clicking, you can format you code. Sooooo cooooool!!!1
    }
    setTimeout(function(){
        addPostBeginning("Fifth Post","Thur 15, Nov, 2023","<p>Some text, yeahhhh</p>");},1000);
setTimeout (function(){
    addPostBeginning("Sixth Post","Mon 6, Nov, 2023","<p>Bluuuuuuuuaaaaaaaaaaaaaaaaaaaauouuuuh</p>")}, 1500); //this is not a good practice because it adds the element at the en dof the document. We then use document.prepend in place of document.append
*/
function addPost(id, title, date, body) {
    //We want to add a new node using javascript : dynamic modifictation of an html document
    let postWrapper = document.createElement('div'); //we want to add that element to our html body
    postWrapper.setAttribute("class", "post-wrapper");
    postWrapper.setAttribute("id", id); //adding attribute "class" with value "post-wrapper"
    let posTitle = document.createElement('h1'); //we make the title of the new div element  
    posTitle.innerText = title;
    posTitle.setAttribute("class", "post-title");
    postWrapper.append(posTitle);

    let postDate = document.createElement("div");
    postDate.innerText = date;
    postDate.setAttribute("class", "post-date");
    postWrapper.append(postDate); //if we don't append element to the wrapper, that itself is added into the html document, the html document is not modified 

    let postBody = document.createElement("div");
    postBody.innerHTML = body; //here we use innerhtml because we want to add an html text, with tags
    postWrapper.append(postBody);
    document.body.prepend(postWrapper); //adding the node to the html document (It appears after script tags that call this JS document)

    //In VScode, by right clicking, you can format you code. Sooooo cooooool!!!1
}
addPost("post03", "Sixth Post", "Mon 6, Nov, 2023", "<p>Bluuuuuuuuaaaaaaaaaaaaaaaaaaaauouuuuh</p>");
addPost("post04", "Seventh Post", "Fri 10, Nov, 2023", "<p>Yiiiiiiiiiiiiiiiiiiiiiiiiii</p>");
/*
let postToBeDeleted = document.getElementById("post02");
setTimeout(function(){
    postToBeDeleted.remove();},1000); //deletes the element that has an id of "post02" after 1 second*/

let secondBt = document.getElementById("second-button");
secondBt.onclick = function () {
    alert("Second button has been clicked");
}
let thirdBt = document.getElementById("third-button");
thirdBt.addEventListener("click", function () {
    alert("Third button has been clicked");
});

let titles = document.getElementsByClassName('post-title');
for (let t of titles) {
    console.log(t);
    t.addEventListener("mouseover", function (event) { //with the function, we can have access to the element that triggered the event ("mouseover" is this case) 
        //console.log(event.target);
        event.target.style.color = 'red';
        console.log(event.clientX, event.clientY);
    });
    t.addEventListener("mouseout", function (event) { //a better practice would be creating a class and changing the attribute of that class everytime we pass on it
        event.target.style.color = 'darkgreen';
    });
}
let newPostBt = document.getElementById("post-it-button");
newPostBt.addEventListener("click",function(){
    //console.log("it works");
    let title = document.getElementById("post-title-input").value;
    let date = document.getElementById("post-date-input").value;
    let body = document.getElementById("post-body-input").value;
    console.log(title,date,body);
    addPost(Math.random().toString(),title,date,body); //add the post on the page

});

let titleInput = document.getElementById("post-title-input");
titleInput.addEventListener("focus", function(event){
    //console.log(event.target);
    event.target.style.background = "green";
});

titleInput.addEventListener("blur", function(event){
    event.target.style.background = "red";
});

titleInput.addEventListener("keyup", function(event){
    event.target.style.background = "orange";
});

titleInput.addEventListener("keydown", function(event){
    event.target.style.background = "yellow";
});
//have a look at bubbling and capturing