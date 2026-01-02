const Incbutton = document.getElementById("Incbutton");
const Rebutton = document.getElementById("Rebutton");
const Decbutton = document.getElementById("Decbutton");
const numberEl = document.getElementById("number");
let number = 0;

Incbutton.onclick = function(){
    number++;
    numberEl.textContent = number;

}
Decbutton.onclick = function(){
    number--;
    numberEl.textContent = number;
}
Rebutton.onclick = function(){
number = 0;
    numberEl.textContent = number;
}