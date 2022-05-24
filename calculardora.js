import {dividir}  from "./dividir.js"
import {somar}  from "./somar.js"
import {multiplicar}  from "./multiplicar.js"
import {subtrair}  from "./subtrair.js"

console.log("Testando função somar \n");
console.log(somar(6, 3));

console.log("\n Testando função subtrair \n");
console.log(subtrair(6, 3));

console.log("\n Testando função multiplicar \n");
console.log(multiplicar(6, 3));

console.log("\n Testando função multiplicar por 0 \n");
console.log(multiplicar(6, 0));

console.log("\n Testando função dividir \n");
console.log(dividir(6, 3));

console.log("\n Testando função dividir por 0 \n");
console.log(dividir(6, 0));
