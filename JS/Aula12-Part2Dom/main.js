let paragrafo = document.getElementById ('paragrafo01')
paragrafo.style.color ='red'
paragrafo.style.background = 'black'
paragrafo.style.textAlign = 'center'
paragrafo.style.margin = '20px'

let itens = document.getElementsByClassName ('item')




//getElements
// let acessaParagrafos = document.getElementsByTagName('p')
// console.log(acessaParagrafos)


let acessaName = document.getElementsByName ('name_item')
console.log(acessaName)

// percorra o array e altere apenas os itens que tem a posição é par 


let item2 = document.getElementById('item2')
item2.remove();

let lista = document.getElementById('lista')
let item5 = document.getElementById('item5')

lista.insertBefore(item2, item5.nextSibling)

let retiraEstilo = document.getElementById ('messi')
retiraEstilo.style.listStyle = 'none';
