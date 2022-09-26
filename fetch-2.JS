// https://reqres.in/api/users

//Eq 1: Función Fetch
// fetch('https://reqres.in/api/users')
// .then(resp => {
//     console.log(resp);
// })

//Eq 1: Opcion 1 Función Fetch
fetch('https://reqres.in/api/users')
.then(resp => resp.json())
.then(respObj => {
    console.log(respObj);
    console.log(respObj.page);
    console.log(respObj.per_page);
    console.log(respObj.data);
});