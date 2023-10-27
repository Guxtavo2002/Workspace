var numeros = [54, 111, 58, 853, 17, 75, 30] //array unidimensional 

// console.log(numeros)
console.log("Antes de alterar a posição:" + numeros);
numeros[3] = "hoara do lanche";
console.log("depois de alterar a posição:" + numeros);

//Array bidimensional 
//Cria um array com tres dimensioanais 

var matrix=[
    ["Icarly", 2010, 10],
    ["Os fet de Everlyplace", 2009, 10],
    ["Doug", 1999, 8.7]
]

console.log(matrix);
console.log(matrix[0][2]);
console.log(matrix[2][1]);

console.log("Antes de alterar a posição:" + matrix);
matrix 
[2][1] = 1800;
console.log("depois de alterar a posição:" + matrix);

console.clear()

// Para utilizar os metodos é criado sempre um novo var devido a segurança e uma boa pratica.

var numArray = [2, 3, 6, 7, 45, 86]
//metodo tostring
//mudar o array para string
//vai transformar para uma string
console.log(numArray)
let receba = numArray.toString()
console.log(receba)

// podemos mudar a forma de separação no caso a caracter que estava sendo separado por , ele se transforma automaticamente em uma string 
let testeJoin = numArray.join(" /  ")
console.log(testeJoin)

//retonna a qunatidade de posições do Array
console.log(numArray.length)

//inserir ou remover elemento no Array
//remover
// metodo pop - utilizado para retirar a ultima posição do array, apenas a ultima.
let retirarUltimoElemento = numArray.pop() //aplicação

console.log(retirarUltimoElemento)//apresenta o retirado
console.log(numArray)//apresenta o array aplicado o pop()

//inserir
//metodo .push - utilizado para inserir uma nova posição no array, na ultima posição
let novaInformacao = numArray.push("Kiwi")
console.log(numArray)//aplica o .push
console.log(novaInformacao)//mostra a posição inserida

//remover
//metodo shift() remove a primeira poisção no array
let retiraInicio = numArray.shift()
console.log(numArray)//aplica o .shift()
console.log(retiraInicio)//mostra a posição removida 

//inserir
// metodo .unshift() insere na peimeira poisção no array
let insereInicio = numArray.unshift("pipoca")
console.log(numArray)//aplica o .unshift()
console.log(insereInicio)//mostra o total de posição

//remove
//metodo delete apaga a posição que deseja e preenche com nulo(empty), deleta mas não tira a posição
console.log(numArray)
delete numArray[3]//aplica o delete 
console.log(numArray)//mostra o delete aplicada