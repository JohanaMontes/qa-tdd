function validarPassword(password) {
    if(password.lenght < 8){
         throw new Error('La contraseña debe tener al menos 8 caracteres');
    }
    return true;
}

module.exports = { validarPassword };