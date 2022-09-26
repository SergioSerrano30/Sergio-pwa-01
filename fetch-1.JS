console.log('Hola mundo');
var request = new XMLHttpRequest();
request.open('GET', 'https://reqres.in/api/users', true );
request.send(null);
request.onreadystatechange = function(state){
    if(request.readyState === 4){
        //Eq 1: La respuesta obtiene un string
        var resp = request.response;
        //Eq 1: Ahora transformamos la cadena en formato
        var respObj = JSON.parse(resp);
        //Eq 1: Enviamos el resultado a la consola
        console.log(respObj);
        //Eq 1: Obtenemos solo la pagina actual.
        console.log(respObj.page);
        //Eq 1: Obtenemos solo la data de los usuarios
        console.log(respObj.data);
    }
}