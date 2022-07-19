var numero = 1;
{
    var numero = 2
    console.log("dentro = ", numero);
}
console.log("fora = ", numero);
//mesmo estando dentro de {} o var fica no scoopo global, pois nao esta dentro da function//