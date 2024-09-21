const age = 10;
const name = 'Dicoding';
console.log(`Aku ${name}, Umur Ku ${age} Tahun`);

// komentar dalam javascript
console.log('Ini Komentar Yang Muncul');

/*
* TODO
* 1. Buatlah variabel bernama `PI` dan isikan dengan nilai 3.14
* 2. Cetak nilai variabel PI di terminal menggunakan console.log
*/

const phi = 3.14;
console.log(phi);

// variable const dan let
const id = 123;
let username = 'Dicoding';
console.log(id); // Outputnya 123
console.log(username) // Outputnya Dicoding

// Variable const isi nya tidak dapat di ubah sedangkan
// Variable let isi nya  bisa di ubah


const currentYear = new Date().getFullYear();
const text = `Sekarang Adalah Tahun ${currentYear}`;
console.log(text);

// Tipe Data Number
const number = 50 / 0; // hasil nya Infinity atau NaN karena hasil di bagi 0 pasti output Infinity atau NaN
console.log(number);

// Adapun nilai NaN (Not-a-Number) dihasilkan ketika nilai non-numerik diubah ke tipe data number. Contohnya ketika kita mencoba mengonversi string yang bukan angka menjadi number.
const result = Number('Dicoding'); // Hasil nya NaN
console.log(result);

//Tipe Data Boolean
const completed = true // hasil ny true
const passed = false // hasil nya false
console.log(completed, passed) // Hasil nya True dan False

// Contoh Lain
const contoh = 100 > 70;
console.log(contoh) // Hasil nya True

// Nilai NULL
let message = null;
console.log(message) // Hasil nya NULL

//Adapun undefined hadir dalam JavaScript sebagai nilai implisit ketika kita mendeklarasikan variabel tanpa menginisialisasi dengan nilai apa pun.
{
    let text;
    console.log(text);
}
{
    // Ubah Tipe Data Number Ke String
    const number = 123;
    const boolean = true;

    const strNumber = String(number);
    const strBoolean = boolean.toString();

    console.log(strNumber);
    console.log(strBoolean);
}

{
    // Ubah tipe data string ke Number
    const strNumber = '123';
    const strFloat = '3.14';
    const boolean = true;

    const numFromString = Number(strNumber);
    const floatFromString = Number(strFloat);
    const booleanFromString = Number(boolean);

    console.log(numFromString);
    console.log(floatFromString);
    console.log(booleanFromString);
}
{
    // Fungsi parseInt() digunakan untuk mengonversi string menjadi bilangan bulat (integer).
    const cm = '20cm'
    const px = '64px'

    const intFromCM = parseInt(cm);
    const intFromPX = parseInt(px);

    console.log(intFromCM);
    console.log(intFromPX);

}

{
    // Adapun fungsi parseFloat() digunakan untuk mengonversi string menjadi angka desimal (floating-point number)
    const cm = '20.55cm';
    const px = '64.23px';

    const floatFromCM = parseFloat(cm);
    const floatFromPX = parseFloat(px);

    console.log(floatFromCM);
    console.log(floatFromPX);
}
{
    //Untuk mengubah suatu nilai ke tipe data boolean, kita bisa gunakan fungsi Boolean(). Sama seperti fungsi sebelumnya,
    const number = 123;
    const string = 'Dicoding';
    const empty = null;

    const boolFromNumber = Boolean(123);
    const boolFromString = Boolean(string);
    const boolFromNull = Boolean(empty);

    console.log(boolFromNumber); //hasil true
    console.log(boolFromString) //hasil true
    console.log(boolFromNull); //hasil false
}

{
    //Konversi implisit terjadi ketika JavaScript secara otomatis mengubah tipe data tanpa instruksi eksplisit dari programmer.
    const age = 20;
    const message = 'Umurku ' + age;

    console.log(message);
}

{
    const strNumber = '123';
    const result = strNumber * 5;
    console.log(result);
}

{
    const bool = true;
    const result = 1 + bool;
    console.log(result);
}
// Unary operator bekerja dengan satu operand (misal: typeof).
//Binary operator bekerja dengan dua operand (misal: +, /, =).
//Ternary operator bekerja dengan tiga operand, biasanya digunakan untuk kondisi (misal: kondisi ? true_value : false_value).

{
    //Assignment Operator
    // Digunakan Untuk Menginisiasi operator
    const name = 'Dicoding';
    let location = 'Bandung';
    location = 'Jakarta';
    console.log(location);
}
{
    //Aritmatica Operator
    // 6 + 5; // mengembalikan 11
    // 7 - 2; // mengembalikan 5
    // 8 * 5; // mengembalikan 40
    // 10 / 3; // mengembalikan 3.33
    // 10 % 2; // mengembalikan 0
    // 2  (10 + 2); // mengembalikan 24
}

{
    //Comparison Operator
    const nilai = 10;
    if (nilai >= 60) {
        console.log('Nilai C')
    }
    else if (nilai >= 80) {
        console.log('Nilai B');
    }
    else if (nilai >= 100) {
        console.log('Nilai A')
    }
    else {
        console.log('Nilai Di  Bawah KKM');
    }
}
{
    // AND
    // console.log(true && true); // true
    // console.log(false && true); // false
    // console.log(true && false); // false
    // console.log(false && false); // false
    // console.log((5 === 5) && (3 < 5)); // true

    // // OR
    // console.log(true || true); // true
    // console.log(false || true); // true
    // console.log(true || false); // true
    // console.log(false || false); // false
    // console.log((5 === 5) || (3 > 5)); // true

    // // NOT
    // console.log(!true); // false
    // console.log(!false); // true
}

{
    // String Operator
    const firstName = 'Donal';
    const lastName = 'Bebek';
    const merged = firstName + lastName;
    console.log(merged);
}
{
    // Function Dan pemanggilan Function

    // Parameter belum ada value
    function convertCelsiusToFahrenheit(temperature) {
        const temperatureInFahrenheit = 9 / 5 * temperature + 32;
      
        console.log('Hasil konversi:', temperatureInFahrenheit);
      }
      
      const temperatureInCelcius = 90;

      // Hanya menampilkan nilai Function
      console.log(convertCelsiusToFahrenheit);

      // Akan menjalankan isi Function
      convertCelsiusToFahrenheit(temperatureInCelcius);
}
{   
    // Parameter ada value nya
    function convertCelsiusToFahrenheit(temperature = 30) {
        const temperatureInFahrenheit = 9 / 5 * temperature + 32;
        console.log(`Hasil konversi adalah :`, temperatureInFahrenheit);
    }
    convertCelsiusToFahrenheit();
    convertCelsiusToFahrenheit(50); // jika ingin ganti value
    
}
{
    // Return Value
    const result = console.log('Java Script Mudah');
    console.log(result);
    // Kenapa hasil yg baris ke 2 undifinied karena console log hanya bisa menampilkan data ga  bisa return.

{
     // Function Return
     function subNumber (a, b) {
        const result = a + b ;
        return result;
    }

    const result = subNumber(2, 4);
    console.log(`2 + 4:`, result);
}
}