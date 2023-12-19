// apiLocation.js

document.addEventListener('DOMContentLoaded', async function () {
    const urlBase = "https://apis.datos.gob.ar/georef/api";
  
    try {
      const responseProvincias = await fetch(`${urlBase}/provincias`);
      const resultProvincias = await responseProvincias.json();
  
      const provinceSelect = document.getElementById('province');
      
      resultProvincias.provincias
        .sort((a, b) => (a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0))
        .forEach(({ nombre }) => {
          provinceSelect.innerHTML += `<option value="${nombre}">${nombre}</option>`;
        });
    } catch (error) {
      console.error('Error al obtener provincias:', error);
    }
  
    document.getElementById('province').addEventListener('change', async function (e) {
      try {
        const responseLocalidades = await fetch(`${urlBase}/localidades?provincia=${this.value}&max=1000`);
        const resultLocalidades = await responseLocalidades.json();
  
        const citySelect = document.getElementById('city');
        citySelect.innerHTML = null;
  
        resultLocalidades.localidades
          .sort((a, b) => (a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0))
          .forEach(({ nombre }) => {
            citySelect.innerHTML += `<option value="${nombre}">${nombre}</option>`;
          });
      } catch (error) {
        console.error('Error al obtener localidades:', error);
      }
    });
  });
  