const estilizar = document.getElementsByClassName('b_12')
    for(let x = 0; x < estilizar.length; x++){
        estilizar[x].style.backgroundColor = '#BFBFBF';
        estilizar[x].style.border = 'solid 2px #D9BC66';
        estilizar[x].style.margin = '7rem';
        estilizar[x].style.padding = '5rem';
    }

function imagem() {
    document.getElementById("img").innerHTML = "<img src='imagem/TheUmbrellaAcademy_logo.png' width='250'>";

    document.body.style.backgroundColor = 'green'
}


const funcao = () => {
    let entraNome = prompt('Por favor insira o seu nome: ');
    let span = document.getElementById('spanBotao')
    console.log(entraNome)

    span.innerHTML = `Olá ${entraNome} Bem-vindo a nossa academia`
}

const tabuada = () => {
    let entraNumero = prompt('Por favor insira um número: ')
    let tabu = document.getElementById('botaoTabuada')
    console.log(entraNumero)

    var contador = 0

    for (contador; contador <= 10; contador++) {
        tabu.innerHTML += `${entraNumero} x ${contador} = ${entraNumero * contador} <br>`
    };
}


