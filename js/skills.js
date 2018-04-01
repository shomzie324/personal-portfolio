// To get it in one function, give every icon the same mouse over
// function, and pass the event var into the function
// in the function call event.target to get the icone that triggered
// the function. Then use e.target.className to get that events class name
// then but all possible classNames in a switch case to change the right class


function addColor(){
    // Change logo colour
    var njs = document.getElementById("njs");
    document.getElementById("icon-name").innerHTML = "Node JS"
    njs.className = "devicon-nodejs-plain colored";
    njs.style.fontSize = "150px"; 
}

function removeColor(){
    // Change logo colour
    var njs = document.getElementById("njs");
    njs.className = "devicon-nodejs-plain";
    njs.style.fontSize = "100px";    
    document.getElementById("icon-name").innerHTML = ""          
}

function addBSColor(){
    // Change Bootstrap logo colour
    var boots = document.getElementById("boots");
    document.getElementById("bs-icon-name").innerHTML = "Bootstrap"
    boots.className = "devicon-bootstrap-plain colored";
    boots.style.fontSize = "150px"; 
    boots.style.opacity = 1;
}

function removeBSColor(){
     // Change logo colour
     var boots = document.getElementById("boots");
     boots.className = "devicon-bootstrap-plain";
     boots.style.fontSize = "100px";    
     document.getElementById("bs-icon-name").innerHTML = ""
}

function addhtColor(){
    // Change Bootstrap logo colour
    var ht5 = document.getElementById("ht5");
    document.getElementById("ht-icon-name").innerHTML = "HTML 5"
    ht5.className = "devicon-html5-plain colored";
    ht5.style.fontSize = "150px"; 
    ht5.style.opacity = 1;
}

function removehtColor(){
     // Change logo colour
     var ht5 = document.getElementById("ht5");
     ht5.className = "devicon-html5-plain";
     ht5.style.fontSize = "100px";    
     document.getElementById("ht-icon-name").innerHTML = ""
}