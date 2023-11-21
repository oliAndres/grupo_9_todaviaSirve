const $ = id => document.getElementById(id);

$('email').addEventListener('blur', function(e) {
    switch (true) {
        case !this.value.trim():
            $('msgError-email').innerHTML = "El email es obligatorio";
            this.classList.add("is-invalid");
            break;
        case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value) :
            $('msgError-email').innerHTML = "El email es inválido";
            this.classList.add("is-invalid");
            break
        default:
            $('msgError-email').innerHTML = null;
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
            break;
    }
});

$('password').addEventListener('blur', function(e) {
    
    if(!this.value.trim()){
            $('msgError-password').innerHTML = "La contraseña es obligatoria";
            this.classList.add("is-invalid");
    }else{
            $('msgError-password').innerHTML = null;
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
    }
})