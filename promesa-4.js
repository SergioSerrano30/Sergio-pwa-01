//Eq 1: Funcion normal que regresa una promesa
//      pero el resultado se obtiene mas lento.
function sumarLento( numero ){
    // var promesa = new Promise(function(resolve, reject){
    // });
    // return promesa;
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( numero + 1 );
            }, 800);
    });
}

//Eq 1: Esta es la manera mas optimizada de definir
//      una funcion pero de tipo arrow (flecha) que
//      tambien regresa una promesa pero el resultado
//      se obtiene mas rapido.
let sumarRapido = (numero)=>{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            //resolve( numero + 1 );
            reject('Error en la promesa de la función sumar rápido')
            }, 1000);
    });
}

Promise.race([sumarLento(8),sumarRapido(15)])
.then(respuesta => {
    console.log('Respuestas:', respuesta);
})
.catch(error=>{
    console.log('Error en la respuesta de la promesa: ',error)
});
