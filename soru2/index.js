// // console.log('sorular2');

// // const dene = 'assak;lsdbv;dkslbv;sdlev'
// // const ses = 'aeioAEIüÜ'
// // const der= []
// // for(i = 0;i<dene.length ; i++){
// //     if(ses.includes(dene[i])){
// //           console.log('okey');
// //           der.push(dene[i])
// //           console.log(der);
// //     }
// //  else{
// // console.log('hatali');
// // }
// // }






// //  const dem = [ 12,14,100,18,89,90,400]
// // // dem.sort((a , b) => a -b )
// // // console.log (dem[dem.length-1])
// //  let son = dem[0]
// // for(i = 0; i<dem.length ;i++){

// //     if(dem[i] > son){
// //         son = dem[i]
// //     }
// // }
// // console.log(son);



// // const dert = [23,34,45]
// // let sonuc = 0
// // for(i=0 ; i<dert.length ; i++){
// //     sonuc += dert[i]
// // }
// // console.log(sonuc);





// // const fgt = [45,89,89,100]
// // let son1 = 0
// // for(i =0 ; i<fgt.length ;i++){
// //     son1 += fgt[i]
// // }
// // console.log(son1/fgt.length);



// // const dft = 'dfgg klfkldl vlckv'
// // console.log(dft.split(' ').length);

// // let sent = 'javas guyel bir dil'
// // console.log(sent.split(' ').reverse().join(' '));





// // const isim = []

// // while(true){

// //    // const derwn = prompt('isim gir')
// //     if(derwn === 'q')
// //     {
// //         isim.pop()
// //         break
// //     }
// //  else{
// //      isim.push(derwn)
// //  }
// // }
// //  console.log(isim);


// const dert = ["John", "Taylor", "John"]
// let bf= []

// dert.map((er)=>{
//     if(!bf.includes(er)){
//         bf.push(er)
//     }
// })
// console.log(bf);



// //! 13- Size bir dizi kelime verildi. "Nemo" kelimesini bulmanız ve şuna benzer bir dize döndürmeniz gerekir:

// //? "[Nemo'yu bulduğunuz kelimenin sırası] 'nda Nemo'yu buldum!"

// //? Nemo'yu bulamıyorsanız, "I can't find Nemo :(" yazın.

// //? findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

// //? findNemo("Nemo is me") ➞ "I found Nemo at 1!"

// //? findNemo("I Nemo am") ➞ "I found Nemo at 2!"


// const keli = 'adam illa memo bulacak'

// function findNemo (kelime) {
//     if(kelime.includes('memo')){
//         let er = kelime.split(' ')
//         console.log(er);
//         for(i = 0 ;i<er.length ;i++){
//             if(er[i]=== 'memo'){
//                 console.log(`memo ${i} indektse bulunmustur`);
//             }
//         }
//         return `I found Nemo at index: ${i}`
//     }
// }
// findNemo(keli)




// const names = ["Alice", "Bob", "Charlie"];
// // const nameLengths = // Write Your code here
// // console.log(nameLengths) // [5, 3, 7]
// let lengths = [];
// names.map((er)=>{
//     lengths.push(er.length)
// })
// console.log(lengths);


const words = ["apple", "banana", "cherry"];
// const capitalizedWords = // Write Your code here
// console.log(capitalizedWords) //['APPLE', 'BANANA', 'CHERRY']

console.log(words.map((ert)=>{
    console.log(ert,'map');
    //console.log(ert.toUpperCase());
}));
//
console.log(words.forEach((ert)=>{
    console.log(ert,'foreach');
    //console.log(ert.toUpperCase());
}));


const input = "John Ronald Reuel Tolkien"

let ko = input.split(' ')
//console.log(ko);
let sont = []
ko.map((er)=>{
   
    sont.push(er[0])
})
 console.log(sont.join(''));


 const inpt = [1, -4, 12, 0, -3, 30, 42, -150];
 let sum = 0;
 
 for (let i = 0; i < inpt.length; i++) {
   if (inpt[i] > 0) {
     sum += inpt[i];
   }
 }
 
 console.log(sum);
