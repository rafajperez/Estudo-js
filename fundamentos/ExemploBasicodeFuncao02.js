//funcao normal//
function imprimirSoma1(a, b){
    console.log(a + b)
}

//Armazenando uma função em uma variavel//
const imprimirSoma2 = function(a,b){
    console.log(a+b)
}
imprimirSoma2(2,3);

//Armazenando uma função arrow em uma variavel **Arrow surge na att em 2015**//
const soma = (a,b) => {
    return a + b
}
console.log(soma(2,3));

//Retorno implicito arrow em uma linha para reduzir a função//
const subtracao = (a,b) => a - b
console.log(subtracao(2,3));

const imprimir2 = a => console.log(a)
imprimir2("legal!!!!")
