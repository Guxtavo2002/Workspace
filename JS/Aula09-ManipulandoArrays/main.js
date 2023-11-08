const frutas =['apple', 'orange', 'cherry']

frutas.forEach(minhaFuncao)

function minhaFuncao(item, index){
    console.log(`Índice: ${index}`);
    console.log(`Elemento: ${item}`);
}

const numeros = [4, 9, 16, 25];
const newArray = numeros.map(Math.sqrt);

console.clear();

console.log('Números:');
console.log(numeros);
console.log('Novo array:');
console.log(newArray);

console.clear();

const idades = [32, 33, 16, 40];
let filtroIdade = idades.filter((idade) => {
return idade >= 18;
});
console.log(filtroIdade)

console.clear();

const meuArray = [
{ nome: 'apples', quantidade: 2 },
{ nome: 'bananas', quantidade: 0 },
{ nome: 'cerejas', quantidade: 5 },
];

console.log(meuArray.find((fruta) => {
    return fruta.nome === 'cerejas';
})
);

console.clear();

const tarefas = [
    {
    id: 1,
    texto: 'Levar o lixo para fora',
    isCompleted: true,
    },
    {
    id: 2,
    texto: 'Encontrar com o chefe',
    isCompleted: true,
    },
    {
    id: 3,
    texto: 'Consulta no dentista',
    isCompleted: false,
    },
    ];

const mapText = tarefas.map((valor) => {
return valor.texto;
});
//Imprime o novo array
console.log(mapText);

124

