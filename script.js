
let intervalo;
intervalo = setInterval(clock, 100);

function clock() {
let data = new Date();
let h1 = document.getElementById("h");
let p = document.getElementById("p");
let m1 = document.getElementById("m");
let pp = document.getElementById("pp");
let s1 = document.getElementById("s");
let h = data.getHours();
let m = data.getMinutes();
let s = data.getSeconds();

h = (h<10) ? "0" + h : h;
s = (s<10) ? "0" + s : s;

h1.innerHTML = h;
m1.innerHTML = m;
s1.innerHTML = s;


}

