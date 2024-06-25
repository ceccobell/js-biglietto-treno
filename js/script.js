let km = prompt("Inserisci i chilometri che devi percorrere");
let eta = prompt("Inserisci la tua eta");

let prezzo_biglietto = km * 0.21;

if (eta < 18) {
  prezzo_biglietto -= prezzo_biglietto * 0.2;
  console.log(prezzo_biglietto);
} else if (eta > 65) {
  prezzo_biglietto -= prezzo_biglietto * 0.4;
  console.log(prezzo_biglietto);
}
