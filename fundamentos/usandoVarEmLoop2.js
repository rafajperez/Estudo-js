 const funcs = [];
 for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]();
funcs[8]();
//por "var" nao ter scoopo de bloco ele imprimi o valor maximo de 10 mesmo chamando a funcs com outro indice//