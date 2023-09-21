// //* ======================================================
// //*                   FOREACH METHOD
// //! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) terminal işlemdir, diziyi fonksiyon içinde yazdırır ve tüketir bitirir.

// //*======================================================

// //*----------ORNEK-----------

// const prices1 = [100, 250, 50, 90];
// prices1.forEach((e)=>console.log(e))

// let toplam = 0

// prices1.forEach((rt)=>console.log(toplam +=rt))


// const pricess = [100, 250, 50, 90];
// let topla = 0
// pricess.forEach((p,i,prie)=>{

//     topla += p

//     console.log(`${i+1}.toplam ${topla}`);

//     prie[i]= prie[i]*2
// })
// console.log(pricess);


// //* ======================================================
// //*                       MAP METHOD
// //!map yapılan değişikliği bir diziye atıp, bunu döndürebilir,  foreach gibi tüketmez.
// //* ======================================================

// //*-------------- ÖRNEK -------------------
// //* names dizisinin içindeki her ismi büyük harf olarak
// //* yeni bir diziye saklayalım.

// const names = [
//     "kubilay",
//     "irfan",
//     "fatih",
//     "özlem",
//     "nihal",
//     "yunus",
//     "emirhan",
//     "halit",
//     "esra",
//     "hüseyin",
//   ];

  
  
// //*örnek
// //* fiyatlar dizisindeki ürün fiyatlarinın 250 TL altında olanlarına
// //* %50 zam, diğerlerine de %20 zam yapılmak isteniyor. Ayrıca
// //* zamli fiyatlar kalıcı olarak diziye işlenmek isteniyor fiyatlar[1]=eski fiyat*1.5 gibi
// //* 1. ürünün zamlı fiyati 150 TL gibi
// //* p => prices dizisinin her bir elemanı
// //* i => indis
// //* array=> fiyatlar dizisidir.

// const fiyat = [100,300,50,90]


// fiyat.map((er,i,pri)=>{
// if(er <250){
// pri[i]= pri[i]*1.5
// console.log(pri);
// }
// })
// console.log(fiyat);

// //* ======================================================
// //*                       FILTER METHOD
// //* ======================================================
// //* prices array"inde fiyatı 200 TL den az olanlari ayri
// //* bir diziye saklayalim.

// // const prices = [200, 500, 100, 180];


// const text = "Clarusway Online Career IT Training School";
// //text.split('').map((er)=>er.toUpperCase()).forEach((rt)=>console.log(s))

// // ! yukarıdaki string i array e çevirip bütün kelimelerin harflerini büyüttük



// function removeDuplicates(arr) {
//     const uni = []
//     arr.map((er,i)=>{
//         console.log(er,'er');
//         if(!uni.includes(er)){
//             uni.push(er)}
          
//     })
//         console.log(uni,'unu');

//     return uni;
//     }
//     const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
//     const result = removeDuplicates(arrayWithDuplicates);
    

    const dere = [1, 2, 2, 3, 4, 4, 5];
    
    const son = []
     const fg =  dere.filter((a,i) => console.log(a))
     console.log(fg);
   
       
    
       


