let lista = [];

export function hozzaad(szam) {
    if (szam < 0) {
        console.log("Szám nem megfelelő");
    } else {
        lista.push(szam);
    }
}

export function atlag() {
    let osszadva = 0;
    for (var i = 0; i < lista.length; i++) {
        osszadva += lista[i];
    }
    return osszadva / lista.length;

}