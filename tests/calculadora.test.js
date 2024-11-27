/*test("nome do teste", () => {
  console.log("e agora?");
});*/

const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deve retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 20 + 2 deve retornar 22", () => {
  const resultado = calculadora.somar(20, 2);
  expect(resultado).toBe(22);
});

test("somar 2 + 100 deve retornar 102", () => {
  const resultado = calculadora.somar(2, 100);
  expect(resultado).toBe(102);
});

test("somar 'banana' + 2 deve retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});
