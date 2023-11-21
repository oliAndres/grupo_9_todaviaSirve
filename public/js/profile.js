const $ = (id) => document.getElementById(id);
const urlBase = "https://apis.datos.gob.ar/georef/api";

window.onload = async function (e) {
  $("name").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-name").innerHTML = "El nombre es obligatorio";
        this.classList.add("is-invalid");
        break;
      case !/^[A-Za-z]+$/.test(this.value):
        $("msgError-name").innerHTML = "Solo caracteres alfabéticos";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 2:
        $("msgError-name").innerHTML = "Mínimo dos caracteres";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-name").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("lastName").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-lastName").innerHTML = "El apellido es obligatorio";
        this.classList.add("is-invalid");
        break;
      case !/^[A-Za-z]+$/.test(this.value):
        $("msgError-lastName").innerHTML = "Solo caracteres alfabéticos";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 2:
        $("msgError-lastName").innerHTML = "Mínimo dos caracteres";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-lastName").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("birthdate").addEventListener("blur", function (e) {
    const birthDate = moment(this.value);
    const currentDate = moment();
    const minDate = moment().subtract(120, "years");

    switch (true) {
      case !this.value.trim():
        $("msgError-birthdate").innerHTML = "La fecha es obligatoria";
        this.classList.add("is-invalid");
        break;
      case birthDate.isAfter(currentDate):
        $("msgError-birthdate").innerHTML = "Venis del futuro??";
        this.classList.add("is-invalid");
        break;
      case birthDate.isBefore(minDate):
        $("msgError-birthdate").innerHTML = "Nadie puede ser tan viejo !!";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-birthdate").innerHTML = null;
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
        $("province").innerHTML += `<option value="${nombre}">${nombre}</option>`;
      });
  } catch (error) {
    console.error(error); 
  }


    $('province').addEventListener('change', async function(e) {
        try {
            const response = await fetch(`${urlBase}/localidades?provincia=${this.value}&max=1000`);
            const result = await response.json();

            $("city").innerHTML = null;

            result.localidades
            .sort((a, b) => (a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0))
            .forEach(({ nombre }) => {
                $("city").innerHTML += `<option value="${nombre}">${nombre}</option>`;
            });

        } catch (error) {
            console.error(error); 
        }
     
    })
};
