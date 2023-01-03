var h3= document.querySelector("h3");
var body= document.querySelector("body");
var color1= document.querySelector(".clr1");
var color2= document.querySelector(".clr2");


function change_background() {
    body.style.background= 
    "linear-gradient(to right ,"
    +color1.value
    +" , "
    +color2.value
    +")";

    h3.textContent=body.style.background;
}


color1.addEventListener("input",change_background);
color2.addEventListener("input",change_background);
