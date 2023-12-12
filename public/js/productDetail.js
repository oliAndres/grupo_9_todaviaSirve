/* const $valDetail = (id) => document.getElementById(id);


$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});  */


const main = document.querySelector('main');
const imgCentral = document.querySelector('.product-detail__main-image-central')

const id = new URLSearchParams(window.location.search).get('id')

const productosRelacionados = document.getElementById('productosRelacionados')
const fillProductosRelacionados = async (category)=> {
    
}