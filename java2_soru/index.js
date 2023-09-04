// let der = 536
// let op = String(der)
// console.log(op,'op')
// let  er= []

// for(i= 0 ; i<3 ;i++){
//     if(i == 0 ){
//         er.push(op[i]  +  ' ' +'yuzler')
//     }
    
//     if(i ==  1){
//         er.push(op[i]  + ' ' + 'onlar ')
//     }
    
//     if(i == 2 ){
//         er.push(op[i] + '' + 'birler' )
//     }
    
// }
// console.log(er)

// //prompt basina arti eklersen number
// let hours = +prompt('saat giriniz')

// console.log(typeof hours)

// let day = Math.trunc(hours/24)
// let remainder = hours % 24 
// console.log(`bu is ${day} gun ve ${remainder} saate tamamalnistri`)

// let now = new Date()
// console.log(now.getFullYear())



////////odev
// console.log((45.678).toFixed())
// console.log((45.678).toPrecision(2))

// console.log(Math.pow(5,3))

// //console.log(Math.sqrt(25))
// console.log(Math.ceil(67,789))

// console.log(Math.abs(Math.ceil(Math.random()*10)-4))

// let ada = +prompt('nir deger gitinix')

// console.log(Math.sqrt(ada))

// let er = 25
// let re = 15
// console.log((25+15)/2)

// let re = +prompt('yari cap girin')
// console.log('alan',2*Math.PI*re*re)
// console.log('cevre',2*Math.PI*re)

// let ty = 456
// let po = String(ty)
// console.log(typeof po)

// let uy = '345.34'
// let yu = parseFloat(uy)
// console.log(yu)

//  console.log(`icinde bulundugumuz ${new Date().getDay()} gun ${new Date().getMonth()} ay ${new Date().getFullYear()} yil` )

///////////////////////////////////////////////////////
//verilen sayinin max ve min genel toplamadan cikarme
/////////////////////////////////////////////
///////////////////////////////////////////////
// let tr = [1,2,3,4,5,7]
// let toplam = 0
// let min = tr[0]
// let max = tr[0]

// for(i= 0; i<tr.length ;i++){
//     toplam = toplam+tr[i]
//     max = Math.max(max,tr[i])
//     min = Math.min(min,tr[i])
// }
// console.log(toplam-max-min)
//////////////////
////////////////////////////////////////////////////
///////icerde onuc varsa alta ve topl
/////////////////////////////////////////
/////////////////////////////////////
// let py = [3,15,13,4]
// let toplam = 0

// for(i = 0 ; i<py.length ; i++){
//   if(py[i] != 13 )
//   {
//     toplam = toplam + py[i]
   
//   } else{
//     i++
//   }
//  console.log(toplam)
// }

///////////////////////////////////
/////////////////////////////////////////
///////Arka arakaya iki varsa true yokdsa false cevir
///////////////////////////////////////////
///////////////////////////////////////
// function dre(){
//     let fg = [1,2,2,8]
//     for(i= 0 ;i<fg.length ; i++){
//     if(fg[i]== 2 && fg[i+1] == 2){
       
//     return console.log(true)
    
//     }
//     return console.log(false)
// }
// }
// dre()

// let dere= [1,4,3,5,2,1,4,4,4,1,5,4,5]
// let say1 = 0
// let say2 =0

// for(i= 0;i<dere.length ; i++){
//    if(dere[i]== 1){
//     say1++
//     console.log(say1)
//    }
//    else if(dere[i]==4){
//     say2++
//     console.log(say2)
//    }
  
// }

// console.log(say1 >say2 ? true :false) 
////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//girilrn sayinin string olarak gosterilmsei
/////////////////////////////////////////
////////////////////////////////////////
// let der  =  prompt('bir say giriniz')

// let rt = []

// for(i = 0; i<Number(der) ; i++){
// rt.push(i+'')
// }

// console.log(rt)

console.log('hello')
/////////////////////////////////
///////girilen sayalar arda uc sayi ardasiksa true nzaysdir
//////////////////////////////////////
///////////////////////////////


// function ert(){

// let der = [5,4,5,11,98,99,100]

//     for(i=0 ; i <der.length-2 ;i++){
//     if(der[i+1] == der[i]+1 && der[i+2]== der[i+1] + 1) {
//       return true
//     }else  
//       return false
    
// }
// }
// ert()

// let as = +prompt('deger giriniz')
// let der = []

// for(i = 0 ; i<as ;i++){ 
    
//     if(i %3 == 0 && i%15 != 0){
//         der.push('poooo')
//     }
//     else if(i %5 == 0 && i%15 != 0){
//         der.push('ppppppppp')
//     }
//     else if(i %15 == 0){
//         der.push('biyybuyyyyyyyy')
//     }
// der.push(i)
    
  
// }
// console.log(der)
let dr = [1,4]
let fr = []
console.log(dr,'dr')

for(i = 0; i<dr.length ; i++)
{ if(dr[i] == 1){
    dr.push(dr[i]==4)
    console.log(dr,'derere')
}}


let efr = [1,3,7]
let plk= []

for(i = 0; i<efr.length ; i++){
    if(efr[0] > efr[2]){

    }
    else{
       plk.push(efr[2])
    }
}
console.log(plk)