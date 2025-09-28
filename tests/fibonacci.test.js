const { generar_secuencia_fibonacci } = require("../src/fibonacci");

test("n=1 debe retornar '0'", () => {
  expect(generar_secuencia_fibonacci(1)).toBe("0");
});

test("n=2 debe retornar '01'", () => {
  expect(generar_secuencia_fibonacci(2)).toBe("01");
});

test("n=7 debe retornar '0112358'", () => {
  expect(generar_secuencia_fibonacci(7)).toBe("0112358");
});

test("n=0 debe retornar cadena vacía", () => {
  expect(generar_secuencia_fibonacci(0)).toBe("");
});

test("n negativo debe lanzar RangeError", () => {
  expect(() => generar_secuencia_fibonacci(-1)).toThrow(RangeError);
});

test("n no entero debe lanzar TypeError", () => {
  expect(() => generar_secuencia_fibonacci("3")).toThrow(TypeError);
});
