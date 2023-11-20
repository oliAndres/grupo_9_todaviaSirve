console.log("Hello");
const $ = (id) => document.getElementById(id);

window.onload = function () {
  const main = document.querySelector("main");

  const formName = document.querySelector("#name");

  //console.log(formName)

  const formBrand = document.querySelector("#brandId");
  //console.log(brandId)

  //const formDescrption = document.querySelector('#description')
  //console.log(description)

  //const form = document.querySelector('#price')
  //console.log(price)

  //const formCategory = document.getElementById('#categoryId')
  //console.log(categoryId);

  // esta va
  //console.log($('price'))

  const respuesta = confirm("Deseas editar un producto?");
  //captura el nombre

  const formEdit = document.querySelector(".editProduct__main__form");

  //obtengo los elementos del formulario Y LOS LLAMO POR SU POSICIÓN
  let elementsForm = formEdit.elements;
  console.log(elementsForm);

  /* ME MUESTRA LO Q SE VA ESRIBIENDO EN LA CONSOLA */
  elementsForm[0].addEventListener("keydown", (e) => {
    console.log(e.key);
  });
 //$("name").focus();

  $("name").addEventListener("focus", () => {
    $("msg-name").hidden = false
    $('error-name').hidden = true
  });

  $("name").addEventListener("blur", function () {
    $("msg-name").hidden = true
    if(!this.value.trim()){
        $('error-name').hidden = false
    }
  });

  formEdit.addEventListener("submit", (event) => {
    event.preventDefault();

    const msgErrors = [];

    for (let i = 0; i < elementsForm.length; i++) {
      if (elementsForm[i].value.trim() === "") {
        msgErrors.push(`El campo ${elementsForm[i].name} no puede estar vacío`);
      }
    }
    //console.log(msgErrors)
    /*--- OJO  no se muestra listado de errores--*/
    const boxErrors = $("box-errors");
    boxErrors.innerHTML = ""; // Limpiar errores anteriores

    if (msgErrors.length) {
      msgErrors.forEach((msg) => {
        boxErrors.innerHTML += `<li style="color: red">${msg}</li>`;
      });
    }
  })
}
