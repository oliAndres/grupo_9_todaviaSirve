const $login = id => document.getElementById(id);

$login('email').addEventListener('blur', function(e) {
    switch (true) {
        case !this.value.trim():
            $login('msgError-email').innerHTML = "El email es obligatorio";
            this.classList.add("is-invalid");
            break;
        case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value) :
            $login('msgError-email').innerHTML = "El email es inválido";
            this.classList.add("is-invalid");
            break
        default:
            $login('msgError-email').innerHTML = null;
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
            break;
    }
});

$login('password').addEventListener('blur', function(e) {
    
    if(!this.value.trim()){
            $login('msgError-password').innerHTML = "La contraseña es obligatoria";
            this.classList.add("is-invalid");
    }else{
            $login('msgError-password').innerHTML = null;
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
    }
})