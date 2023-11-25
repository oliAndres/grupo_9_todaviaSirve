const $valEdit = (id) => document.getElementById(id);

const show = (info, error, element) => {
  $valEdit(info).hidden = false
  $valEdit(error).hidden = true
  element.borderColor = 'inherit'
}

/*const validateElement = (info, error, element) => {
  $valEdit(info).hidden = true
  if(!element.target.value.trim()){
      $valEdit(error).hidden = false
  }  
}*/

window.onload = function () {
  const main = document.querySelector("main");
  const respuesta = confirm("Deseas editar un producto?");
  const formEdit = document.querySelector(".editProduct__main__form");

  
  let elementsForm = formEdit.elements;

  
   //MUESTRA LO Q SE VA ESRIBIENDO EN LA CONSOLA 
  elementsForm[0].addEventListener("keydown", (e) => {
    console.log(e.key);
  });
 
 

      
    if (!msgErrors.length){
      formEdit.submit()
    }
  }

      $valEdit('name').addEventListener("blur", function (e) {
        switch (true) {
          case !this.value.trim():
            $valEdit('error-name').innerHTML = "El nombre es obligatorio";
            this.classList.add("is-invalid");
            break
          case this.value.length < 2 : 
            $valEdit('error-name').innerHTML = "Mínimo dos caracteres";
            this.classList.add("is-invalid");
            break
          default:
            $valEdit('error-name').innerHTML = "";
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
          break;

        }
      })
    
      $valEdit('price').addEventListener("blur", function (e) {
        switch (true) {
          case !this.value.trim():
            $valEdit('error-price').innerHTML = "El precio es obligatorio";
            this.classList.add("is-invalid");
            break
          case !/^\d+(\.\d{1,2})?$/.test(this.value): 
            $valEdit('error-price').innerHTML = "Se aceptan solo números";
            this.classList.add("is-invalid");
            break
          case this.value.length < 2 : 
            $valEdit('error-price').innerHTML = "Mínimo dos caracteres";
            this.classList.add("is-invalid");
            break
          default :
            $valEdit('error-price').innerHTML = "";
            this.classList.add("is-valid");
            this.classList.remove("is-invalid");
            
          break;

        }
      })
      $valEdit('description').addEventListener("blur", function (e) {
        switch (true) {
          case !this.value.trim():
            $valEdit('error-description').innerHTML = "La descripción es obligatoria";
            this.classList.add("is-invalid");
            break
          case this.value.length < 2 : 
            $valEdit('error-description').innerHTML = "Mínimo 20 caracteres";
            this.classList.add("is-invalid");
            break
          default:
            $valEdit('error-description').innerHTML = "";           
            this.classList.add("is-valid");
            this.classList.remove("is-invalid");
          break;

        }
        
      })
    
      $valEdit("brandId").addEventListener("focus", (e) => {
        show('msg-brand')
      });

      $valEdit('brandId').addEventListener("blur", function (e) {
        if (this.value.trim() !== "") {
            $valEdit('error-brandId').innerHTML = "";
            this.classList.add("is-valid");
            this.classList.remove("is-invalid");
        } else {
          $valEdit("brandId").addEventListener("blur", () => {
            $valEdit('msg-brand').hidden = true
          });
        }
    });
    $valEdit("categoryId").addEventListener("focus", (e) => {
      show('msg-category')
    });
        $valEdit('categoryId').addEventListener("blur", function (e) {
          if (this.value.trim() !== "") {
              $valEdit('error-categoryId').innerHTML = "";
              this.classList.add("is-valid");
              this.classList.remove("is-invalid");
          } else {
            $valEdit("categoryId").addEventListener("blur", () => {
              $valEdit('msg-category').hidden = true
            });
          }
      });
      $valEdit("images").addEventListener("focus", (e) => {
        show('msg-images')
      });
     
          $valEdit('images').addEventListener("blur", function (e) {
            if (this.value.trim() !== "") {
                $valEdit('error-images').innerHTML = "";
                this.classList.add("is-valid");
                this.classList.remove("is-invalid");
            } else {
              $valEdit("images").addEventListener("blur", () => {
                $valEdit('msg-images').hidden = true
              });
            }
        });
      