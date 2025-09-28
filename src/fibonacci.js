function generar_secuencia_fibonacci(n) {
  if (!Number.isInteger(n)) {
    throw new TypeError("n debe ser un número entero");
  }
  if (n < 0) {
    throw new RangeError("n debe ser mayor o igual a 0");
  }
  if (n === 0) return "";
  if (n === 1) return "0";

  let a = 0, b = 1;
  let resultado = [a.toString()];

  for (let i = 1; i < n; i++) {
    resultado.push(b.toString());
    [a, b] = [b, a + b];
  }

  return resultado.join("");
}

module.exports = { generar_secuencia_fibonacci };