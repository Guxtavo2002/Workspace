let numeros = [17, 43, 8, 4, 97, 56, 29];

numeros.forEach(numerosParImpar);

function numerosParImpar(number) {
    if (number % 2 == 0) {
        console.log(`O número ${number} é par`);
    } else {
        console.log(`O número ${number} é impar`);
    }
}

let posicao = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61];

var verificacao = posicao.filter((percorrerPosicao) => {
    return (percorrerPosicao >= 20 && percorrerPosicao <= 80);
});

console.log(verificacao)
