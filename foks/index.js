// console.log('deneme')

// const Pin= '123'
// let girilin;
// do{
//    girilin  = prompt('pin')
// }
// while(girilin != Pin)



// let er;
// do{
//     let der = prompt('sayi giriniz')
//     er = isNaN(der)
//     console.log(er)
// }while(er != false){
 

function dele(a,b){
    if(a-b < 10){
        return console.log('babab')
    }else if( 10 <a-b <20 )
    return console.log('gex')
}
dele(90,30)


const dre=(...number) => Math.max(...number)

console.log(dre(35,15,12))


const mu = (fiyat)=> fiyat + (fiyat*18)/100
 
console.log(mu(100))

function evenNumber (num){
    return console.log(num)
    }
    evenNumber(3) // output : 3 is odd
    evenNumber(2)


let deger = +prompt('kelvin bur deger giriniz')

const sou = (gelen)=>{
    let fgh =  (gelen -273.15).toFixed(2)
    return  fgh
}
console.log(sou(deger))




 const ciko =(k,b,g) => g < k*2 +b*5 ?  (console.log('okey')) : (console.log('hayir'))
 ciko(10,5,89)




  
  let tarih = new Date().getDate(); 
  console.log(tarih)
  const tat = (tarih)=>{
 if(tarih %7 == 0 && tarih %7 == 6){
   return  console.log('tatil')
  }
  else{
   return  console.log('dersvar')
  }
  }
 
tat(tarih)