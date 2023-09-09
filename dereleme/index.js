console.log('derele')
///////////////////////////////

//////////////////sayi tahmin oyunu

////////////////////////////////
// let ara =  Math.floor(Math.random()*100)
// console.log(ara)
// let deneme = +prompt('bir deger')

//  ara == deneme ? alert('kazandiniz') :null
 
// for(i= 0 ;i<5 ;i++){
//     console.log(i)
//     if(ara > deneme ){
//     deneme = prompt('kucuk deger')
    
// }
// else{
//      deneme = prompt('buyuk')
// }
// }


////////////////////////////////////////
////////////girilen saynin kac basamakli


// let ar = 358

// console.log(ar.toString().split('').length)

//  let sayi = 897
//  let sayac = 0
//  while(sayi !=0 ){
//     sayac++
//     sayi/=10
//  }
//  console.log(sayac,'sayac')

//  let say = 689;
//  let basamakSay = 0;
// while (say != 0) {
//     basamakSay++;
//     say/= 10;
// }
// alert('SaUzunluğu: ' + basamakSay);


///////////////////////////////////
/////////////////////////////////////
/////////////////////////////
//////////girilrn  tek degerlerin toplami
// /////////////////////////

// let er = [1,2,3,4,5,6,7,8,9]
//     let df = 0
//     console.log(typeof er)
//     // er.map((ke)=>(
//     //     console.log(typeof (ke%2 != 0))
        
//     // ))



//     for(i=0 ; i<er.length ; i++){
//     if(er[i]%2 != 0){
//         df += er[i]
//     }
    
// //     }

//     console.log(df)

//parameterl ile argumembt esleneip eslenmdegi paramaetere girin argument foksitonda yaana

function dere(a,b){
    if(arguments.length === dere.length){
        console.log('okey')
    }
    else{
        console.log('hayir')
    }
}
dere(1)
dere(1,2)
dere(1,2,3)

