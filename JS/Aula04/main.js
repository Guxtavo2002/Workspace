//Professora bateu no aluno ?   
let professoraBateAluno = true
let professoraXingaAluno = false

//          true            &&          true            = true
if(professoraBateAluno == true && professoraXingaAluno == true){
    console.log("Professora demitida com sucesso!!")
}
console.clear()

//          true                ||          false                  = true
if(professoraBateAluno == true  || professoraXingaAluno == false){
    console.log("Professora demitida com sucesso!!")
}
console.clear()

let numero1 = 10
let numero2 = 4

if(numero1 === numero2){
    console.log("variavel num1 é menor que num2")
}

// Outro bloco de codigo 

console.clear()

 // Validar boatos 
let teraComidadaTOTVS = false
// teraComidadaTOTVS == true 

if(!teraComidadaTOTVS == true){//se //implicita 
    console.log("Não vou nem almoçar, alexsandro o brabo")
}else{//senão
    console.log("Você terá que almoçar")
}

console.clear()

let numero = 11

if(numero % 2 == 0){
    comsole.log("O número" + numero + "é par " )
}else{
    console.log(`O número" ${numero} "é impar`)
}

console.clear()

let morangoMaduro = null // vazio

if(morangoMaduro == true){
    console.log("Pode comer")
}else if(morangoMaduro == false){
    console.log("não come")
}else{
    console.log("Seu morango esta mofado")
}

console.clear()

let fase2 = 70
let passou = true 
let inscricao = false

if(inscricao == true){
    console.log("Parabéns você esta na fase 2")
    if(fase2>= 70){
        console.log("QUESTIONÁRIO DE LÓGICA E LEITURA")
    }else if(fase2>= 65 || fase2<= 69){
        console.log("você terá uma segunda chance")
    }else{
        console.log("voce não passou na fase 2")
    }
}

console.clear()

let pipoca1 = 10
  let pipoca2 = 56

  if(pipoca1>pipoca2){
    console.log(pipoca1 + " é maior")
  }else{
    console.log(pipoca2 + " é maior")
  }

  pipoca1 > pipoca2 ? console.log(pipoca1 + " é maior") :
  console.log(pipoca2 + "é maior;")

  let mounth = 3
 
  switch(mounth){
    case mounth == 3:
    console.log("Março")
    break;
    case mounth == 4:
    console.log("Abril")
    break;
    case  10:
    console.log("Outubro")
    break;
    case  12:
    console.log("Dezembro")  
    break;  
    default:
    console.log("Não encontrei o mês")
  }

  console.clear()



  