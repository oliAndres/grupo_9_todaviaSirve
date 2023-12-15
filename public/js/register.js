
window.onload = function () {
    console.log('register.js success!!');

    $('name').addEventListener('blur', function() {
        validateField(this, 'msgError-name', [
            { condition: !this.value.trim(), message: 'El nombre es obligatorio' },
            { condition: !/^[A-Za-z]+$/.test(this.value), message: 'Solo caracteres alfabéticos' },
            { condition: this.value.trim().length < 2, message: 'Mínimo dos caracteres' }
        ]);
    });

    $('lastName').addEventListener('blur', function() {
        validateField(this, 'msgError-lastName', [
            { condition: !this.value.trim(), message: 'El apellido es obligatorio' },
            { condition: !/^[A-Za-z]+$/.test(this.value), message: 'Solo caracteres alfabéticos' },
            { condition: this.value.trim().length < 2, message: 'Mínimo dos caracteres' }
        ]);
    });

    $('email').addEventListener('blur', async function() {
        validateField(this, 'msgError-email', [
            { condition: !this.value.trim(), message: 'El email es obligatorio' },
            { condition: !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value), message: 'El email es inválido' }
        ]);

        try {
            const response = await fetch(`/api/check-email?email=${this.value}`);
            const result = await response.json();

            if (result.data) {
                $('msgError-email').innerHTML = 'El email ya se encuentra registrado';
                this.classList.add('is-invalid');
            }
        } catch (error) {
            console.error('Error al verificar el correo electrónico:', error);
        }
    });


    $('password').addEventListener('blur', function() {
        validateField(this, 'msgError-password', [
            { condition: !this.value.trim(), message: 'La contraseña es obligatoria' },
            { condition: !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,12}$/.test(this.value), message: 'El password debe tener entre 6 y 12 caracteres, un número, una mayúscula y un caracter especial' }
        ]);
    });



    $('formAdd').addEventListener('submit', function(e) {
        e.preventDefault();

        const elementsForm = $('formAdd').elements;
        let error = false;

        for (let i = 0; i < elementsForm.length - 1; i++) {
            if (!elementsForm[i].value.trim() || elementsForm[i].classList.contains('is-invalid')) {
                elementsForm[i].classList.add('is-invalid');
                $('msgError-empty').innerHTML = 'Hay errores en la carga de datos';
                error = true;
            }
        }

        !error && this.submit();
    });

    function validateField(field, errorId, conditions) {
        const errorElement = $(errorId);
        errorElement.innerHTML = null;

        for (const condition of conditions) {
            if (condition.condition) {
                errorElement.innerHTML = condition.message;
                field.classList.add('is-invalid');
                return;
            }
        }

        errorElement.innerHTML = null;
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    }
};
