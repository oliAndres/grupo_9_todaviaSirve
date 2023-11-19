module.exports = (req, res, next) => {
    const todaviaSirveCookie = req.cookies.todaviaSirve;

    // Comprobar si la cookie "todaviaSirve" existe
    if (todaviaSirveCookie) {
        try {
            const userData = JSON.parse(todaviaSirveCookie);

            // Verificamos si el objeto userData contiene propiedades esperadas (id, name, role)
            if (userData && userData.id && userData.name && userData.role) {
                // Si la cookie es válida, establecer userData en la sesión de la solicitud
                req.session.userLogin = userData;
            } else {
                // Imprimir un mensaje en la consola si la cookie es inválida debido a datos faltantes
                console.log('Cookie inválida. Datos faltantes.');
            }
        } catch (error) {
            
            console.error('Error al analizar la cookie:', error);
        }
    }

    next();
};
