const $ = (id) => document.getElementById(id);
const regex = /^[a-zA-Z0-9]+$/;

$('search').addEventListener('click', function (event) {
    if (!this.value.trim()) {
        $('searchBar').placeholder = 'Su busqueda está vacia';
        event.preventDefault();
    }
})

$('search').addEventListener('blur', function (event) {
    $('searchBar').placeholder = '¿Qué productos buscas....?';
})

// $('searchBar').addEventListener('input', function (event) {
//     if (!regex.test(this.value)) {
//         $('msgError').textContent = 'Solo se permiten caracteres alfanuméricos';
//         event.preventDefault();
//     }else {
//         $('msgError').hidden
//     }
// })


