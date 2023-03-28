//undefined
var kosong;
console.log(kosong);
console.log(typeof(kosong));

//number 
var angka = 1;
console.log(angka);
console.log(typeof(angka));

//BigInt
const bignumber = 1234565789123456789n;
const myint = 12345678901234567889900;
console.log(bignumber);
console.log(myint);
console.log(6n +7n);

//string 
var word = "ini tipe data string";
document.write(word);
console.log(typeof(word));

//null
let tiada = null;
console.log(tiada);

//Boolean
const a = 1;
const b = 2;

let hasilnyabenar = a < b;
let hasilnyasalah = a > b;

console.log("ini nilai boolean", hasilnyabenar);
console.log("ini nilai boolean", hasilnyasalah);

//Symbol
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1, id2);

