const { suma, resta } = require("../src/calculadora");

test("debería sumar dos números", () => {
  expect(suma(2, 3)).toBe(5);
});

test("debería sumar dos números prueba2", () => {
  expect(suma(5, 4)).toBe(9);
});

test("debería sumar un número positivo y uno negativo", () => {
  expect(suma(10, -3)).toBe(7);
});

test("debería sumar dos números negativos", () => {
  expect(suma(-4, -6)).toBe(-10);
});

test("debería sumar números grandes", () => {
  expect(suma(1_000_000, 2_500_000)).toBe(3_500_000);
});

test("No deberia sumar un string con número", () => {
  expect(() => suma("Hola", 4)).toThrow("Los argumentos deben ser números")
});

test("debería restar dos números", () => {
  expect(resta(5, 3)).toBe(2);
});

test("debería restar dos números negativos", () => {
  expect(resta(-8, -3)).toBe(-5);
});

test("No debería restar dos letras", () => {
  expect(() => resta("x", "y")).toThrow("Los argumentos deben ser números")
});

