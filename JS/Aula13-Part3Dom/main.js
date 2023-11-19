var pipoca = document.querySelectorAll ('p');
console.log(pipoca)

//Acesse todos os paragrafos e mude a cor deles 

let c = 0;
while(c < pipoca.length){
    pipoca [c].style.color = 'red'
    c++
}

let j = document.querySelector ('p.exemplo')
j.innerHTML = "Foi alterado aqui o texto com as lagrimas dos alunos."

j.style.color = 'blue'

let y = document.querySelector ('#exemplo2').style.color = 'chocolate'

function nome(){
    var entradaNome = prompt('Insira seu nome')
    let mostraNome = document.querySelector ('#mostraNome')
    mostraNome.innerHTML = `Olá $
    [mostraNome] seja bem - vindo a nossa academia `
}