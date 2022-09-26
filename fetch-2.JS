// https://reqres.in/api/users

//Eq 1: Función Fetch
// fetch('https://reqres.in/api/users')
// .then(resp => {
//     console.log(resp);
// })

//Eq 1: Opcion 1 Función Fetch
fetch('https://reqres.in/api/users')
.then(resp => {
    resp.json().then(console.log);
});