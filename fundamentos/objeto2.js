console.log(typeof Object);
console.log(typeof new Object);

const Cliente = function() {};
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {} // ES 2015 (ES6)//

console.log(typeof Produto);
console.log(typeof new Produto());

// no Js a classe exerce o papel de uma funçao//
// a funcao pode ser instanciada a partir da palavra new , instancia significa "um objeto criado usando uma função construtora particular" //