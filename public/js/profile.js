const $profile = (id) => document.getElementById(id);
const urlBase = "https://apis.datos.gob.ar/georef/api";

window.onload = async function (e) {
  $profile("name").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $profile("msgError-name").innerHTML = "El nombre es obligatorio";
        this.classList.add("is-invalid");
        break;
      case !/^[A-Za-z]+$/.test(this.value):
        $profile("msgError-name").innerHTML = "Solo caracteres alfabéticos";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 2:
        $profile("msgError-name").innerHTML = "Mínimo dos caracteres";
        this.classList.add("is-invalid");
        break;
      default:
        $profile("msgError-name").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $profile("lastName").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $profile("msgError-lastName").innerHTML = "El apellido es obligatorio";
        this.classList.add("is-invalid");
        break;
      case !/^[A-Za-z]+$/.test(this.value):
        $profile("msgError-lastName").innerHTML = "Solo caracteres alfabéticos";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 2:
        $profile("msgError-lastName").innerHTML = "Mínimo dos caracteres";
        this.classList.add("is-invalid");
        break;
      default:
        $profile("msgError-lastName").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $profile("birthdate").addEventListener("blur", function (e) {
    const birthDate = moment(this.value);
    const currentDate = moment();
    const minDate = moment().subtract(120, "years");

    switch (true) {
      case !this.value.trim():
        $profile("msgError-birthdate").innerHTML = "La fecha es obligatoria";
        this.classList.add("is-invalid");
        break;
      case birthDate.isAfter(currentDate):
        $profile("msgError-birthdate").innerHTML = "Venis del futuro??";
        this.classList.add("is-invalid");
        break;
      case birthDate.isBefore(minDate):
        $profile("msgError-birthdate").innerHTML = "Nadie puede ser tan viejo !!";
        this.classList.add("is-invalid");
        break;
      default:
        $profile("msgError-birthdate").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  try {
    const response = await fetch(urlBase + "/provincias");
    const result = await response.json();
  
    result.provincias
      .sort((a, b) => (a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0))
      .forEach(({ nombre }) => {
        $profile("province").innerHTML += `<option value="${nombre}">${nombre}</option>`;
      });
  } catch (error) {
    console.error(error); 
  }


    $profile('province').addEventListener('change', async function(e) {
        try {
            const response = await fetch(`${urlBase}/localidades?provincia=${this.value}&max=1000`);
            const result = await response.json();

            $profile("city").innerHTML = null;

            result.localidades
            .sort((a, b) => (a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0))
            .forEach(({ nombre }) => {
                $profile("city").innerHTML += `<option value="${nombre}">${nombre}</option>`;
            });

        } catch (error) {
            console.error(error); 
        }     
    });

    let avatarProfile = document.getElementById("avatarProfile");
    let avatarInput = document.getElementById("avatarInput");

    const modalImages = document.querySelectorAll("#exampleModal .modal-body img");
    modalImages.forEach(img => {
        img.addEventListener("click", function () {
          var selectedAvatar = img.getAttribute("data-avatar");

          avatarProfile.src = "/images/productos/userImages/" + selectedAvatar;

          avatarInput.value = selectedAvatar;
          
        });
      })
};
