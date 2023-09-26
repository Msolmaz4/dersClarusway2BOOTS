//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================

const car = {
    title:'bwm',
    model:1990,
    engine:1.6
}
console.log(car.title)
console.log(car['model'])

const { title, model} = car
console.log(title)


const arabalar = {
    car1: {
      marka: "BMW",
      model: 1990,
      renk: "red",
    },
    car2: {
      marka: "MERCEDES",
      model: 1980,
      renk: "white",
    },
    car3: {
      marka: "AUDI",
      model: 2000,
      renk: "gray",
    },
  };
  const { car1 ,car2,car3} = arabalar
  const {marka,renk} = car1
  const { marka:marka2} = car2
  console.log(marka2)//! car1 için marka model ismini kullandık, o yüzden car2 de yeni isimler verdik. ilk object i oluştururken key leri (marka,model..) farklı verebilirdik, bu sayede yeni isim vermekle uğraşmazdık, ama o zamanda for in ile dönerken her bir marka yı yazdır diyemezdik, çünkü car2 nin içinde mesela marka2 yazıyor olacağından, onu tanıyamazdı


  //* ornek: Array-Object gezinme-DEST
const people = [
    {
      name: "Mustafa",
      surname: "Gertrud",
      job: "developer",
      age: 30,
    },
    {
      name: "Halo",
      surname: "Müller",
      job: "tester",
      age: 35,
    },
    {
      name: "Mehmet",
      surname: "Rosenberg",
      job: "team lead",
      age: 40,
    },
    {
      name: "Ozkul",
      surname: "Gutenberg",
      job: "developer",
      age: 26,
    },
  
    {
      name: "Baser",
      surname: "Shaffer",
      job: "tester",
      age: 24,
    },
  ];
  
  
  people.forEach((kisi)=>{
    const {name,surname,job} = kisi
    console.log(name)
  })
  people.forEach(({name,surname,job})=>{
    console.log(`${name}${surname}`)
    console.log(name)
  })
  
  const kontrol=(veri)=>{

    console.log(veri);
    console.log(veri.adi);
  
    const {adi, renk, yildiz}=veri
    console.log(adi,renk);
  }
  
  kontrol({adi:"GS", renk:"sari-kirmizi", yildiz:4})
  
  
  //*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//? ------------------------------------------------------
//?  REST =>>[...name]=diziden (ya da object den) alınmayan, geri kalanları yeni bir (diziyse) diziye,(object se)object e atıyor
//? ------------------------------------------------------

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//*REST OBJECT***************************************

const personel = {
    pName: "Johny",
    surname: "DEEP",
    job: "actor",
    age: 55,
  
  };
  

//?  SPREAD==>> parçala (yapısını boz)-> istenilen diziye ekle,içinde gezin vs
//? ------------------------------------------------------

//obje oldugundan ({}) yapariz
const yeni = people.map((er)=>({
   ...er,
   age  : er.age + 5
   
}))
console.log(yeni)

const Personel = {
    pName: "Johny",
    surname: "DEEP",
    job: "actor",
    age: 55,
  };

let der=  { job:'father',loca:'usa',...Personel}

 
  console.log(der)