let x = document.querySelector("h2");
x.style.color = "red";

let y = document.querySelector("h3");

setTimeout(function(){
    y.innerHTML = "Good Night";
    y.style.color = "blue"
}, 2000)