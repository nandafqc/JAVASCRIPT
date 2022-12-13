let pais = 'Brasil';
console.log(pais);

console.log(pais.toUpperCase());
console.log(pais.toLowerCase());

let frase = (' um pais continental');
// console.log (pais + frase);

// console.log (`O ${pais}${frase}`)
let frasecompleta = `O ${pais} um pais continental`;
console.log(frasecompleta.replace('continental', 'tropical'));
console.log(frasecompleta.length)