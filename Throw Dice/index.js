const mybuttonE = document.getElementById("mybutton");
const mylebal1 = document.getElementById("mylabel1");
const mylebal2 = document.getElementById("mylabel2");
const mylebal3 = document.getElementById("mylabel3");
let random1;
let random2;
let random3;
const max = 6;
const min = 1;

mybuttonE.onclick = function(){
    random1 = Math.floor(Math.random()* max) + min;
    random2 = Math.floor(Math.random()* max) + min;
    random3 = Math.floor(Math.random()* max) + min;
    mylebal1.textContent = random1;
    mylebal2.textContent = random2;
    mylebal3.textContent = random3;

}