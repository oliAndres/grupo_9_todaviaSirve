const $ = (id) => document.getElementById(id);

const show = (info, error, element) => {
  $(info).hidden = false
  $(error).hidden = true
  element.borderColor = 'inherit'
}

const validate = (info, error, element) => {
  $(info).hidden = true
  if(!element.target.value.trim()){
      $(error).hidden = false
  }
}

window.onload = function () {
  const formAdd = document.querySelector(".newProduct__main__form");

  let elementsForm = formAdd.elements;

  
 $("name").focus();
 

  $("name").addEventListener("focus", (e) => {
    show('msg-name', 'error-name', e)
  })

  $("name").addEventListener("blur", function (e) {
    validate('msg-name', 'error-name', e)
  })


  $("brandId").addEventListener("focus", (e) => {
    show('msg-brandId', 'error-brandId', e)
  });

  $("brandId").addEventListener("blur", function (e) {
    validate('msg-brandId', 'error-brandId', e)
  });

  $("price").addEventListener("focus", (e) => {
    show('msg-price', 'error-price', e)
  });

  $("price").addEventListener("blur", function (e) {
    validate('msg-price', 'error-price', e)
  });

  $("description").addEventListener("focus", (e) => {
    show('msg-description', 'error-description', e)
  });

  $("description").addEventListener("blur", function (e) {
    validate('msg-description', 'error-description', e)
  });

  $("categoryId").addEventListener("focus", (e) => {
    show('msg-category', 'error-category', e)
  });
  
  $("categoryId").addEventListener("blur", (e) => {
    validate('msg-category', 'error-category', e)
  });


  formAdd.addEventListener("submit", (event) => {
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
