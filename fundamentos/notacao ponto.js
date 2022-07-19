console.log(Math.ceil(6.1));
//math arredonda, .ceil arredonda para cima, .floor arredonda para baixo, 6.1 arredonda para 7 por causa do .ceil//

const obj1 = {}
obj1.nome = "Bola";
//   obj1["nome"] = "Bola2"; //acessa o atributo .nome do objeto e troca o valor para Bola2
console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome
    this.exec = function(){
        console.log("Exec....")
    }
}

//.this significa nome associado ao objeto que for criado a partir dessa função, podendo instanciar a função, vai receber o atributo nome por parametro
//deixando visivel para quem criar instanciar o Obj, ou seja fica publico//

const obj2 = new Obj("Cadeira")
const obj3 = new Obj("Mesa")
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec()

