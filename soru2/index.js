console.log('sorular2');

const dene = 'assak;lsdbv;dkslbv;sdlev'
const ses = 'aeioAEIüÜ'
const der= []
for(i = 0;i<dene.length ; i++){
    if(ses.includes(dene[i])){
          console.log('okey'); 
          der.push(dene[i])
          console.log(der);
    }
 else{
console.log('hatali');
}
}
 const dem = [ 12,14,100,18,89,90,400]
// dem.sort((a , b) => a -b )
// console.log (dem[dem.length-1])

 let son = dem[0]
////////////
for(i = 0; i<dem.length ;i++){
   
    if(dem[i] > son){
        son = dem[i]
       
    }
    
}
console.log(son);

const dert = [23,34,45]
let sonuc = 0

for(i=0 ; i<dert.length ; i++){
    sonuc += dert[i]
}
console.log(sonuc);