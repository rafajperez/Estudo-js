{
    {
        {
            {var sera = "Será???"}
        }
    }
    
}
console.log(sera);
//Scoopo é um local onde a variavel é visivel, acessivel. A Variavel sera ficara visivel ate fora do bloco, embora pareça que esta visivel dentro do scoopo//

function teste(){
    var local = 123;
    console.log(local)
}
teste()
console.log(local);
//Nesse caso a var nao é visivel//
//Evitar criar variaval que vá para o scoopo global, ela podera ser acessada de qualquer lugar do sistema, porem pode sobscrever por outra pessoa, alterando seu valor//
//Variavel so tem dois scoopos possiveis, ou ela é nivel global, visivel na aplicação inteira,(Browser), ou cria uma var no scoopo de função, assim ela fica visivel somente na function//