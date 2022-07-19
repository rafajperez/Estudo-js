//conceito de null: atribuiçao por valor e atribuiçao por referencia
//fazer no console do navegador: const a = {name:"teste"}
//digita a e aperta enter
//retorna {name:"Teste"}
//const b = a
//a const a nao tem valor de objeto, ela tem um endereço que aponta um objeto, na const b, recebe o mesmo endereço que a const a aponta na memoria//
//se fizer alguma mudança em a ou b, como os mesmos possuem o mesmo endereço de memoria, é uma atribuiçao por referencia//
// let c =3
//let d = c
//d++   incremento da variavel d
//nesse caso, por ser primitivo o uso do let, os valores ficam idenpendentes, incrementando somente a variavel d, nao alterando a c isso e a atribuiçao por valor//

let valor //nao inicializado//
console.log(valor);
//retorna undefined, que nunca foi inicializada, nao foi definido//

//console.log(valor2);
//gera erro pois valor2 nem declarado foi

valor = null
//null significa que a variavel nao aponta nenhum endereço de memoria, ela nao tem nenhum valor, nulo, ausencia de valor//
console.log(valor);
//console.log(valor.toString()) erro por tentar acionar algo de valor nulo//

const produto = {}//objeto vazio
console.log(produto.preço)//como produto nao ta nulo, ta setado, ele nao da erro, como preço nao ta definido, ele da undefined
console.log(produto)

produto.preço = 3.50
console.log(produto.preço)

produto.preço = null //ai voce quer dizer que o preço nao esta definido.