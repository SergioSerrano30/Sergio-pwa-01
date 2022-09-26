//Eq 1: Hola mundo a consola
console.log("Hola mundo");
//Eq 1: Funcion que recibe un numero y le suma uno.
function sumarUno(numero) {
  var promesa1 = new Promise(function (resolve, reject) {
    if (numero >= 7) {
      reject("El número ya es muy alto");
    }
    setTimeout(function () {
      resolve(numero + 1);
    }, 800);
  });
  return promesa1;
}

//Eq 1: llamado de la funcion y promesa
//de forma recursiva y optimizada y con
//validacion de error.
sumarUno(5)
  .then(sumarUno)
  .then(sumarUno)
  .then((nuevoNumero) => {
    console.log("Resultado:", nuevoNumero);
  })
  .catch(error=>{
    console.log('Error en la promesa',error)
  });

// sumarUno(8).then(nuevoNumero=>{
//     console.log('Resultado: ',nuevoNumero);
//     return sumarUno(nuevoNumero);
// }).then(nuevoNumero=>{
//     console.log('Resultado: ',nuevoNumero);
//     return sumarUno(nuevoNumero);
// }).then(nuevoNumero=>{
//     console.log('Resultado: ',nuevoNumero)
// });

