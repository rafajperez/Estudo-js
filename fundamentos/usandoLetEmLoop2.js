const funcs = [];
for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}
funcs[2]();
funcs[8]();
//agora sim ele imprimi o valor 2 e 8 nao 10, pois let tem scoopo de bloco; no momento que a function for definida ele acessa na memoria//