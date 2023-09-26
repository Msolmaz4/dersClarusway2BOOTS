/* -------------------------------------------------------------------------- */
//!                                  OBJECTS                                  */
/* -------------------------------------------------------------------------- */

// Diziler : index numaraları ile erişim sağlanıyor. 0'dan başlayarak artan bir sıralama.

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için Object(nesne) kullanılır
const dizi=[1,2,3,4,5,6]

//! Objectlerde key-value ( Property-value) değerlerini içerir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erişim için property (key) adı kullanılır.const team = [
    const team = [
        {
          id:1,
          name: "Harold",
          lastname: "Strevy",
          DateOfBirth: 2000,
          job: "developer",
          salary: 8000,
          drivingLicense: true,
        },
      
        {
          id:2,
          name: "Farold",
          lastname: "Strevy",
          DateOfBirth: 2002,
          job: "developer",
          salary: 40000,
          drivingLicense: true,
        },
        {
          id:3,
          name: "Ketty",
          lastname: "Strevy",
          DateOfBirth: 2000,
          job: "devOps",
          salary: 30000,
          drivingLicense: true,
        },
      ];

      team.map((er)=>{
       console.log(er.salary*1.1); 
      }
      )//! Object kendi içinde var olan özellikleridir
// Object.keys
// Object.values
// Object.entries



console.log(Object.keys(team));
console.log(Object.values(team));
console.log(Object.entries(team))