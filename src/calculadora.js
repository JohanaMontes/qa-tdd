function validarNumeros(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Los argumentos deben ser números');
  }
}

function suma(a, b) {
  validarNumeros(a, b);
  return a + b;
}

function resta(a, b) {
  validarNumeros(a, b);
  return a - b;  
}

module.exports = { suma, resta };