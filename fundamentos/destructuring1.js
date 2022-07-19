//Desestruturação, extrai de um objeto seus atributos, ou de um array, se retirar de objeto usa as {}, e em array usa []//

//novo recurso do ES2015//

const pessoa = {
    nome: "Ana",
    idade: 15,
    endereco: {
        logradouro: "Rua abc",
        numero: 100
    }
}

//Essas chaves nao sao para criar o objeto, elas representam o destruturing, elas extraem nome e idade do objeto pessoa// 
const {nome, idade } = pessoa
console.log(nome, idade);

const {nome:n, idade:i } = pessoa
console.log(n,i);

//extraia do objeto o atributo nome e idade e cria variaveis com o nome n e i, se tirar um atributo que nao existe, reorna o undefined//

const {sobrenome, bemhumorada = true} = pessoa
console.log(sobrenome, bemhumorada);

const {endereco: {logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);