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