const $ = (id) => document.getElementById(id);

const show = (info, error, element) => {
  $(info).hidden = false
  $(error).hidden = true
  element.borderColor = 'inherit'
}

const validateElement = (info, error, element) => {
  $(info).hidden = true
  if(!element.target.value.trim()){
      $(error).hidden = false
  }
}

window.onload = function () {
  const main = document.querySelector("main");

  const formName = document.querySelector("#name");
  const formBrand = document.querySelector("#brandId");
  const respuesta = confirm("Deseas editar un producto?");
  const formEdit = document.querySelector(".editProduct__main__form");

  
  let elementsForm = formEdit.elements;

  
  /* MUESTRA LO Q SE VA ESRIBIENDO EN LA CONSOLA */
  elementsForm[0].addEventListener("keydown", (e) => {
    console.log(e.key);
  });
 $("name").focus();
 

  $("name").addEventListener("focus", (e) => {
    show('msg-name', 'error-name', e)
  })

  $("name").addEventListener("blur", function (e) {
    validateElement('msg-name', 'error-name', e)
  })


  $("price").addEventListener("focus", (e) => {
    show('msg-price', 'error-price', e)
  });

  $("price").addEventListener("blur", function (e) {
    validateElement('msg-price', 'error-price', e)
  });

  $("description").addEventListener("focus", (e) => {
    show('msg-description', 'error-description', e)
  });

  $("description").addEventListener("blur", function (e) {
    validateElement('msg-description', 'error-description', e)
  });
  $("categoryId").addEventListener("focus", (e) => {
    show('msg-category', 'error-category', e)
  });

  formEdit.addEventListener("submit", (event) => {
    event.preventDefault();

    const msgErrors = [];

    for (let i = 0; i < elementsForm.length; i++) {
      if (elementsForm[i].value.trim() === "") {
        msgErrors.push(`El campo ${elementsForm[i].name} no puede estar vacío`);
        elementsForm[i].style.borderColor = 'red'
      }else{
        elementsForm[i].style.borderColor = 'inherit'
      }
    }
    
    if(msgErrors.length) {
      alert('Los campos señalados son obligatorios')
    }else {
      this.submit()
    }
  })
}
