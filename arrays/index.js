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
const animal = [
    "fil",
    "aslan",
    "deve",
    "fil",
    "kaplan",
    "fil",
    "deve",
    "aslan",
    "aslan",
    "aslan",
  ];

  const user = prompt('bir hayvan adi ')
   let say = 0
  const fine = ()=>{
    for (let i in animal){
        if(animal[i] == user){
            say++
        }
    }
       return say
  }
  console.log(fine())
  console.log('dere')