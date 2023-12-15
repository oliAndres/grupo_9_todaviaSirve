const $ = (id) => document.getElementById(id);
const regex = /^[a-zA-Z0-9]+$/;

$('search').addEventListener('click', function (event) {
    if (!this.value.trim()) {
        $('searchBar').placeholder = 'Su búsqueda está vacía';
        event.preventDefault();
    } else {
        this.form.submit(); 
    }
});


$('search').addEventListener('blur', function (event) {
    $('searchBar').placeholder = '¿Qué productos buscas....?';
});

$('searchBar').addEventListener('change', function (event) {
    if (!regex.test(this.value)) {
        event.preventDefault();
    } else {
        searchTimeout = setTimeout(() => {
        this.form.submit(); 
    }, 750);
    }
});
// MODAL NAVIDEÑO
document.addEventListener('DOMContentLoaded', function() {
    // Se ejecutará cuando el documento HTML se haya cargado completamente
    openModal(); // Llama a la función para abrir el modal
});

function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.height = '30%';
    modal.style.width = '30%';
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}