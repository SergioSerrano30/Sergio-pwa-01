//Eq 1: Funcion normal que regresa una promesa
//      pero el resultado se obtiene mas lento.
function sumarLento( numero ){
    // var promesa = new Promise(function(resolve, reject){
    // });
    // return promesa;
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( numero + 1 );
            }, 1500);
    });
}

//Eq 1: Esta es la manera mas optimizada de definir
//      una funcion pero de tipo arrow (flecha) que
//      tambien regresa una promesa pero el resultado
//      se obtiene mas rapido.
let sumarRapido = (numero)=>{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( numero + 1 );
            }, 300);
    });
}

// //Eq 1: Llamado normal de la funcion sumar lento y su promesa.
// sumarLento(5)
// .then(respuesta=>{
//     console.log('Respuesta Lenta:', respuesta);
// });
// //Eq 1: Llamado normal de la funcion sumar rapido y su promesa.
// sumarRapido(10)
// .then(respuesta=>{
//     console.log('Respuesta Rapida:', respuesta);
// });
let arregloVarios = [sumarLento(5), sumarRapido(10), true, 'Hola mundo'];
//Eq 1: Llamado de las 2 funciones y sus respectivas promesas al mismo tiempo.
Promise.all(arregloVarios)
.then(respuestas =>{
    console.log('Respuestas:', respuestas);
})
.catch(error=>{
    console.log("Error en todas las promesas: ",error);
});