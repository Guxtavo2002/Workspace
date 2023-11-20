let paragrafo = document.getElementById('paragrafo01')
paragrafo.style.color = 'red'
paragrafo.style.backgroundColor = 'black'
paragrafo.style.textAlign = 'center'
paragrafo.style.margin = '20px'

let itens = document.getElementsByClassName('item')

//percorra a lista utilizando repetição e altere a cor de texto

for(let c = 0; c < itens.length; c++){
    itens[c].style.backgroundColor = 'blue'
}

//getElementsByTagName
let acessarParagrafos = document.getElementsByTagName('p')
console.log(acessarParagrafos)
//percorrer  os pragrafos e altere a cor de texto
for(let a = 0; a < acessarParagrafos.length; a++){
    acessarParagrafos[a].style.backgroundColor = 'blueviolet'
}

//getElementsByName
const acessaName = document.getElementsByName('name_item')
console.log(acessaName)

//percorra o array e altere apenas os itens que tem a posicao par
// for(let d = 0; d < acessaName.length; d++){
//     if (d % 2 == 0) {
         
//       }
//     }

let item2 = document.getElementById('item2');
item2.remove();

let lista = document.getElementById('lista');
let item5 = document.getElementById('item5');

lista.insertBefore(item2, item5.nextSibling);

let retiraEstilo = document.getElementById('messi')
retiraEstilo.style.listStyle = 'none';
