const escola = "Cod3r"

console.log(escola.charAt(3))
//.charAt retorna o index do char escolhido//
console.log(escola.charCodeAt(3))
//retorna o code referente ao codigo unicode//
console.log(escola.indexOf("3"))
//acha a posição index do valor pedido//
console.log(escola.substring(1))
//imprimi do valor selecionado pra frente//
console.log(escola.substring(0,3))
//imprimi do primeiro valor "0" até o "3"//
console.log("Escola ".concat(escola).concat("!"))
//outro jeito de concatenar//
console.log(escola.replace(3, "e"))
//substitui os valores escolhidos
console.log("Ana,Maria,Beatriz".split(','))
