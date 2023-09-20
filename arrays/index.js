console.log('arrays')

// const ekran = prompt('bir sayi gir')
// const sayi = [3,5,6,7,'bir','iki']
// if(sayi.includes(ekran)){
//     console.log('var',sayi.indexOf(ekran))
// }
// else{
//     console.log('babayokuz')
// }

//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================
//*ÖRNEK: dizi1 arrayindeki pozitif sayılarla negatif sayıları 2 ayrı array de toplayan function yazınız

// const dizi1 = [-5, 15, 22, -4, 45, 79, -54];

// const dizilereAyir1 = () => {
//     for (let i = 0; i < dizi1.length; i++) {
//       if (dizi1[i] < 0) {
//         negatifler1.push(dizi1[i]);
//       } else pozitifler1.push(dizi1[i]);
//     }
//     console.log(negatifler1);
//     console.log(pozitifler1);
//   };
//   dizilereAyir1()
  ////////////////////////******************************* *///* ======================================================
//*                   FOR IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
//* bir dizide saklandığını varsayalım.Bu hayvanları türüne
//* göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//*  ana programa döndürecek fonksiyonu yazınız.
//*--------------------------------------------------------
// const animal = [
//     "fil",
//     "aslan",
//     "deve",
//     "fil",
//     "kaplan",
//     "fil",
//     "deve",
//     "aslan",
//     "aslan",
//     "aslan",
//   ];

//   const user = prompt('bir hayvan adi ')
//    let say = 0
//   const fine = ()=>{
//     for (let i in animal){
//         if(animal[i] == user){
//             say++
//         }
//     }
//        return say
//   }
//   console.log(fine())
//   console.log('dere')

//* ======================================================
//*                   FOR OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icindeki veriye erisirken indisleme kullanmaya gerek yoktur.

//* ORNEK: alttaki dizinin elemanlarını yanyana string olarak yazdır (for of döngüsü kullanın)

const arabalar = ["bmw", "mercedes", "audi", "volvo"]

console.log(arabalar.join(''))
let araba = ''
for(let i of arabalar){
    araba +=i
}
console.log(araba)//asya=>yasa
//kacmak=>cakmal

const str1="listen";
const str2="silent";

const areAnagrams=(str1,str2)=>{

return str1.split("").sort().join("")===str2.split("").sort().join("") ? "anagram":"anagram degildir"

}


console.log(areAnagrams("listen", "silent")); // Should print true
console.log(areAnagrams("triangle", "integral")); // Should print true
console.log(areAnagrams("debit card", "bad credit")); // Should print true
console.log(areAnagrams("Dormitory", "dirty room")); // Should print true
console.log(areAnagrams("The Morse Code", "Here come dots")); // Should print true
console.log(areAnagrams("Astronomer", "Moon starer")); // Should print true

console.log(areAnagrams("hello", "world")); // Should print false
console.log(areAnagrams("apple", "banana")); // Should print false
console.log(areAnagrams("hello", "holla")); // Should print false
console.log(areAnagrams("race", "racing")); // Should print false