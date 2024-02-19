alert("Web berhasil running");

let firstname = "John";
firstname = "Doe";
console.log(firstname);

const PI =3.14;
// console.log(PI);

// Aritmatika
const A = 10;
const B = 3;
const C = B**A
console.log(C)

// Penjumlahan String
let namadepan = "John";
let namabelakang = "Doe";
let fullname =namadepan + " " + namabelakang;
console.log(fullname);

// perbandingan
let umur =15;

if (umur > 10 && umur < 20) {
    console.log("Anak-anak");
} else {
    console.log("Dewasa");
}

// Looping
for (let kue =3; kue>=1; kue--){
    console.log("Kue sudah dimakan, kue sisa "+ kue);
}

//function
function tambah(angka1, angka2) {
    return angka1 + angka2
}

console.log(tambah(10, 5));