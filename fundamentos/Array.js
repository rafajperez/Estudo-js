const valores = [7.7, 8.9,6.3,9.2]
//acessando os valores da array//
console.log(valores[0], valores[3])
console.log(valores[4])

//alterando um valor dentro da array://
valores[3] = 10
console.log(valores)
//contando elementos da array//
console.log(valores.length)

valores.push({id: 3}, false, null,"teste")
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)
console.log(typeof valores)