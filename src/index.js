import { hozzaad, atlag } from "./lista.js";


function nyomas() {
    let output = document.getElementById("output");
    let szam = document.getElementById("szam");
    hozzaad(parseInt(szam.value));
    output.innerHTML = `Átlag: ${atlag()}`; 
}

let gomb = document.getElementById("gomb");
gomb.addEventListener("click", nyomas);

