var numero = 1;
{
let numero = 2;
console.log("dentro =", numero)
}
console.log("fora =", numero);
//let diferente da var, quando colocado dentro de {}, fica visivel apenas nesse bloco//

//Não há conflito pois ele procura o scoopo menor, se nao existir ele procura no scoop mais abrangente

var numeRo = 1;
{
let nuMeRo = 2
console.log("dentro = ", numeRo)
}

//Variaveis declaradas com Let tem scoopo global, scoopo de função e scoopo de bloco, tem uim scoopo a mais que a var//