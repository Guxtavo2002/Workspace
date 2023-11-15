let botao = document.getElementsByClassName('b_12')
for (let t = 0; a <= botao.length; t++) {
    botao[a].style.backgroundColor = '#BFBFBF';
    botao[a].style.border = 'solid 2px #D9BC66';
    botao[a].style.padding = '5rem';
    botao[a].style.margin = '7rem';
}

const respostas = () => {
    var nome = prompt('Por favor insira o seu nome: ');
    var span = document.getElementById('spanBotao')
    console.log(nome)
    span.innerHTML = `Olá ${nome} Bem-vindo a nossa academia`
}


