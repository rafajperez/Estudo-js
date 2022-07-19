const saudacao = "opa"; //contexto lexo 1

//contexto lexico é o local pnde sua variavel foi definida fisicamente no codigo, lexico tem a  ver com palavra, aqui ele foi definido no inicio do arquivo
// que é o arquivo Par Nome/Valor.js, poderia ter sido no browser no contexto global//

function exec(){ //contexto lexo 2
const saudacao = "falaaaa";
return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: "Pedro", 
    idade: 22, 
    peso: 90,
    endereco: { 
        logradouro: "Luis Gama",
        numero: 768,
    }    
}
console.log(saudacao);
console.log(exec());
console.log(cliente);