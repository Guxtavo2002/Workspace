var texto1 = "texto bem aleatório dos atrasados de volta a pausa"

var texto2 = "texto bem aleatório dos atrasados de volta a pausa"

//console.log(texto1 + " " + A vida é um sapinho dando pulinho na lagoa + " " + texto2 )

//template string 
//console.log (`${texto1} A vida é um sapinho dando pulinho na lagoa ${texto2}´)

var numero1 = 2;
var numero2 = 3;

console.log(numero1 + numero2)
console.log(`${numero1 + numero2}`)

console.clear()

const string01 = "Instituto da Oportunidade Social"

console.log(string01);
console.log( 'Posição10' + string01.charAt(10))
console.log( 'Posição11' + string01.charAt(11))

console.clear()

const string02 = "Instituto da Oportunidade Social"

console.log("Quantidade de caracteres: " + string02.length)

console.clear()

const string03 = "Instituto da Oportunidade Social";

console.log("TRAZER EM MAIUSCULA" + string03.toUpperCase())

console.clear()

var sub = "Mozilla"

console.log(sub.substring(2,7))

console.clear()

var trocaTexto = "Bem-vindo ao jogo, Roblox";

let textoTrocado = trocaTexto.replace("Roblox", "Klebinho Jogador");

console.log("Texto origianal: " + trocaTexto);
console.log("Texto alterado: " + textoTrocado);

console.clear()

var retirandoEspacos = "        A vida é uma uva        "

console.log(retirandoEspacos.trim())