// window.onload = async function() {
//     // Obtener referencias a los select
//     const provinceSelect = document.getElementById('province');
//     const citySelect = document.getElementById('city');

//     try {
//         const provincesResponse = await fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre');
//         const provincesData = await provincesResponse.json();
//         console.log('Provincias recibidas:', provincesData);

//         provincesData.provincias.forEach(province => {
//             const option = document.createElement('option');
//             option.value = province.id;
//             option.textContent = province.nombre;
//             provinceSelect.appendChild(option);
//         });

//         provinceSelect.addEventListener('change', async function() {
//             const selectedProvinceId = this.value;

//             const citiesResponse = await fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${selectedProvinceId}`);
//             const citiesData = await citiesResponse.json();

//             citySelect.innerHTML = '<option value="" hidden selected>Elije tu ciudad...</option>';

//             citiesData.localidades.forEach(city => {
//                 const option = document.createElement('option');
//                 option.value = city.id;
//                 option.textContent = city.nombre;
//                 citySelect.appendChild(option);
//             });
//         });

//     } catch (error) {
//         console.error('Error al obtener datos de la API', error);
//     }
// }
