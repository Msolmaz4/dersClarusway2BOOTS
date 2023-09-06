// //kitsp turu girince kitamoner
// let a =prompt('kitap turu').toLocaleLowerCase()





// switch (a) {
//     case 'novel':
//         console.log(`${a} Anna Karennina`)
//         break;
//     case 'fiction':
//         console.log(`${a} Notre Dame`)
//         break;
//     case'poerty':
//         console.log(`${a} Pillow Thouht`)
//         break;

//     default:
//         break;
// }
///////////////////////////////////////
///////////////////////////////////////
// condtion ? (sart dogru ) : (baba gidik) es6 ile geldi
//////////////////////////////
///////////////////////////////

// const age =-20

// console.log(age>= 0 ? 'poz ' : 'neg')
 

// operator = '+'
// const num = 145
// const num2 = 67
// console.log( operator === '+' ? 'num+num2' : 'num-num2')

// let ada = +prompt('deger gitirniz')

// if(ada %10 === 0){
//     console.log(`${ada*100} kazanilan bonus`)
// }
// else if(ada%5 === 0){
//     console.log(`${ada*5} kazanilan bonus`)
// }
// else if(ada%4 === 0){
//     console.log(`${ada*3} kazanilan bonus`)
// }
// else{
//     console.log('avucunu yala')
// }

// let ada = prompt('easya turunu yaniyz')


// switch(ada){
//     case 'ekmek':
//         console.log('gida copune') 
//         break
//     case 'sise':
//         console.log('cam copne')
//         default :
//         break

// }

// let a = 'muhammet'

// for(i=0 ; i<10 ; i++){
//     console.log(a)
// }


// let toplam =0
// for ( i = 1 ; i<=100 ; i++){
//     toplam = toplam+i
   
// } console.log(toplam)



// for(i=1 ; i<100 ; i++)
// {
//     let a=+prompt('1 notu giriniz')
//     let b=+prompt('2 notu giriniz')
//     let c=+prompt('3 notu giriniz')
//     let ortlama  = (a+b+c)/3 
//     console.log(ortlama)
    
// (ortlama)
function add(a, b) {
    const dere = a+b
    console.log(dere)
   return dere
}
add(3 ,5)

for(i= 1 ; i<5 ; i++){
    for(j=1 ; j<5 ; j++){
        console.log(i*j)
    }
}