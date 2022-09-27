//Eq 1: Instanciamos los dos componentes de imagen
// que están en la pagina index.html
let img1 = document.getElementById("idImg1");
let img2 = document.getElementById("idImg2");

//Eq 1: Fetch con códifo de promesa simplificada.
fetch("images/imagen-1.png")
  .then((resp) => resp.blob())
  .then((image) => {
    console.log(image);
    //Eq 1: Instancia para imagen 1
    var imgPath1 = URL.createObjectURL(image);
    img1.src = imgPath1;
  });
//Eq 1: Fetch con código de promesa normal.
fetch("images/imagen-2.png")
  .then((resp) => {
    return resp.blob();
  })
  .then((image) => {
    console.log(image);
    //Eq 1: Instancia para imagen 2
    var imgPath2 = URL.createObjectURL(image);
    img2.src = imgPath2;
  });
