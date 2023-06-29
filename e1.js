const pessoas = [
  {
    nome: "Roger Medeiros",
    sexo: "M",
    salario: 3250,
  },
  {
    nome: "Carolina Silva",
    sexo: "F",
    salario: 1200,
  },
  {
    nome: "Cristina Avila",
    sexo: "F",
    salario: 8100,
  },
  {
    nome: "Gustavo Hoffman",
    sexo: "M",
    salario: 5200.35,
  },
  {
    nome: "Eva Trindade",
    sexo: "F",
    salario: 2501,
  },
  {
    nome: "Andre Mathias",
    sexo: "M",
    salario: 1750,
  },
  {
    nome: "Joice Castro da Silva",

    sexo: "F",
    salario: 3350.25,
  },
];

const quantidadeDePessoas = pessoas.length;

//     1. Imprima no console a quantidade de pessoas Total.
console.log("imprima no console a quantidade de pessoas total:");
console.log(pessoas.length);
console.log("------------------------------------");
// 2. Imprima no console a quantidade de pessoas pessoas do sexo
// Feminino.
const listaFuncionarias = pessoas.filter(function (pessoa) {
  console.log(pessoa.sexo);
  if (pessoa.sexo === "F") {
    return true;
  } else {
    return false;
  }
});
console.log(listaFuncionarias.length);
console.log("------------------------------------");
// 3. Imprima no console a soma do salário de todas as pessoas.
console.log("3. Imprima no console a soma do salário de todas as pessoas.");
let somaTodosSalarios = 0;
pessoas.forEach(function (pessoa) {
  somaTodosSalarios += pessoa.salario;
});

console.log(somaTodosSalarios);

console.log("-------------------------------------------");
// 4. Imprima no console a média do salário de todas as pessoas.
console.log("Média dos salários:");

const mediaTodosSalarios = somaTodosSalarios / quantidadeDePessoas;

console.log(mediaTodosSalarios.toFixed(2));

console.log("-------------------------------------------");
// 5. Imprima no console a soma do salário de todos as pessoas do sexo
// Masculino
console.log(
  "5. Imprima no console a soma do salário de todos as pessoas do sexo masculino"
);

const listaFuncionarios = pessoas.filter(function (pessoa) {
  return pessoa.sexo === "M";
});

let somaSalariosFuncionarios = 0;
listaFuncionarios.forEach(function (pessoa) {
  somaSalariosFuncionarios += pessoa.salario;
});

console.log(somaSalariosFuncionarios);
console.log("-------------------------------------------");

// 6. Imprima no console a média do salário de todas as pessoas do sexo
// Masculino
console.log(
  "6. Imprima no console a média do salário de todas as pessoas do sexo"
);

const quantidadeDeFuncionarios = listaFuncionarios.length;
const mediaSalarioFuncionarios =
  somaSalariosFuncionarios / quantidadeDeFuncionarios;
console.log(mediaSalarioFuncionarios.toFixed(2));
console.log("-------------------------------------------");
// 7. Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
// contrário falso.
console.log("7. Utilize a função Some, para descobrir se existe algum salário");

const existeSalarioAcimaDe7000 = pessoas.some(function (pessoa) {
  return pessoa.salario >= 7000;
});
console.log(existeSalarioAcimaDe7000);
console.log("-------------------------------------------");
// 8. Utilize a função findIndex, para descobrir a posição da pessoa de
// nome 'Eva Trindade'.
let evaTrindade = pessoas.findIndex(function (pessoa) {
  return pessoa.nome === "Eva Trindade";
});

console.log(evaTrindade, "8: indice da Eva Trindade");
console.log("-------------------------------------------");
// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
// sobrenome "Silva".
let silva = pessoas.filter((obj) => obj.nome.includes("Silva"));
console.log('Pessoas que tem sobrenome "Silva": ');
for (nome of silva) {
  let sobre = nome.nome.split(" ");
  if (sobre[0] !== "Silva") {
    console.log(nome.nome);
  }
}
console.log("-------------------------------------------");
// 10. Imprima os nomes utilizando o MAP

let nomes = pessoas.map(function (pessoa) {
  return pessoa.nome;
});
