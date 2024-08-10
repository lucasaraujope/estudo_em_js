/*
FALSY é quando um valor é considerado false
TRUTHY é quando um valor é considerado verdadeiro em contextos onde um boleando
é obrigatório (condicionais e loops).
*/

console.log("### VALORES FALSY ###");
console.log(false ? "VERDADEIRO":"FALSO");
console.log(0 ? "VERDADEIRO":"FALSO");
console.log(-0 ? "VERDADEIRO":"FALSO");
console.log("" ? "VERDADEIRO":"FALSO");
console.log(null ? "VERDADEIRO":"FALSO");
console.log(undefined ? "VERDADEIRO":"FALSO");
console.log(NaN ? "VERDADEIRO":"FALSO");

console.log("### VALORES TRUTHY ###");
console.log(true ? "VERDADEIRO":"FALSO");
console.log({} ? "VERDADEIRO":"FALSO");
console.log([] ? "VERDADEIRO":"FALSO");
console.log(1 ? "VERDADEIRO":"FALSO");
console.log(3.23 ? "VERDADEIRO":"FALSO");
console.log("0" ? "VERDADEIRO":"FALSO");
console.log(" " ? "VERDADEIRO":"FALSO");
console.log("Lucas" ? "VERDADEIRO":"FALSO");
console.log("False"? "VERDADEIRO":"FALSO");
console.log(Infinity ? "VERDADEIRO":"FALSO");
console.log(-1 ? "VERDADEIRO":"FALSO"); 