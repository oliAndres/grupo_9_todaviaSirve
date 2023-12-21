const $valProductAdd = (id) => document.getElementById(id);

const show = (info, error, element) => {
 $valProductAdd(info).hidden = false
 $valProductAdd(error).hidden = true
  element.borderColor = 'inherit'
}

const validate = (info, error, element) => {
 $valProductAdd(info).hidden = true
  if(!element.target.value.trim()){
     $valProductAdd(error).hidden = false
  }
}

window.onload = function () {
  const formAdd = document.querySelector(".newProduct__main__form");

  let elementsForm = formAdd.elements;

  
$valProductAdd("name").focus();
 

 $valProductAdd("name").addEventListener("focus", (e) => {
    show('msg-name', 'error-name', e)
  })

 $valProductAdd("name").addEventListener("blur", function (e) {
    validate('msg-name', 'error-name', e)
  })


 $valProductAdd("brandId").addEventListener("focus", (e) => {
    show('msg-brandId', 'error-brandId', e)
  });

 $valProductAdd("brandId").addEventListener("blur", function (e) {
    validate('msg-brandId', 'error-brandId', e)
  });

 $valProductAdd("price").addEventListener("focus", (e) => {
    show('msg-price', 'error-price', e)
  });

 $valProductAdd("price").addEventListener("blur", function (e) {
    validate('msg-price', 'error-price', e)
  });

 $valProductAdd("description").addEventListener("focus", (e) => {
    show('msg-description', 'error-description', e)
  });

 $valProductAdd("description").addEventListener("blur", function (e) {
    validate('msg-description', 'error-description', e)
  });

 $valProductAdd("categoryId").addEventListener("focus", (e) => {
    show('msg-category', 'error-category', e)
  });
  
 $valProductAdd("categoryId").addEventListener("blur", (e) => {
    validate('msg-category', 'error-category', e)
  });


  formAdd.addEventListener("submit", (event) => {
    // event.preventDefault();

    const msgErrors = [];

    for (let i = 0; i < elementsForm.length; i++) {
      if (elementsForm[i].value.trim() === "") {
        msgErrors.push(`El campo$valProductAdd{elementsForm[i].name} no puede estar vacío`);
        elementsForm[i].style.borderColor = 'red'
      }else{
        elementsForm[i].style.borderColor = 'inherit'
      }
    }
    
   /* if(msgErrors.length) {
      alert('Los campos señalados son obligatorios')
    }else {
      this.submit()
    }*/
  })
}
