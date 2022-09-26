//Eq 1: Declaramos el objeto.
let usuario = {
    nombre: 'Sergio',
    edad: 21
}

//Eq 1: API POST de usuario.
fetch('https://reqres.in/api/users',{
    method: 'POST',
    body: JSON.stringify(usuario), //Data a enviar
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(resp => resp.json())
.then(console.log)
.catch(error => {
    console.log('Error en la petición API POST');
    console.log('Error');
});
