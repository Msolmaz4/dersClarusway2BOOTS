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