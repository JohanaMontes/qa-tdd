const { validarPassword } = require("../src/passwordValidator");

test("Deberia validar una contraseña valida", () => {
    expect(validarPassword("Hola123!")).toBe(true);
});

test("Deberia rechazar contraseñas con menos de 8 caracteres", () => {
    expect(() => validarPassword("Holatu123!")).toThrow("La contraseña debe tener al menos 8 caracteres")

});
