// Restaurante

let valorJantar = 80;
let taxaGarcom = 10;
let total = valorJantar + ((taxaGarcom / 100) * valorJantar);

console.log(`Valor do jantar: R$${valorJantar},00`);
console.log(`Valor do garçom: R$${(taxaGarcom / 100) * valorJantar},00`);
console.log(`Total a pagar: R$${total},00`);