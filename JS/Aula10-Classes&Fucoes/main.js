// const celular = {
//     marca: 'Apple',
//     modelo: 'Iphone 15 pro Max',
//     cor: 'Rosa',
//     memoria: '512gb',
//     memoriaRam: '16gb'
// }

class celular{

    constructor(marca, modelo, cor, memoria, memoriaRam) { 
        this.marca = 'marca'; //atributo
        this.modelo = 'modelo';
        this.cor = 'cor';
        this.memoria = 'memoria';
        this.memoriaRam = 'memoriaRam';
        this.isDesligando = false  
    }

    ligar(){
        console.log("Ligando o celular ........")
    }


    desligar(){
        if(this.isDesligando === true){
            return "Desligando........"
        }else{
            return "Não vou desligar seu banana, catapimbas"
        }

        
    }

    pesquisa(){
        console.log("Pesquisando........")
    }
}

var motorola = new celular('amarelo', 'nokia 1956', 56, '4', '2600G')
console.log(motorola)
console.log(motorola.desligar())

var positivo = new celular('positivo', 'jubileu', 'preto amarelado', 8,'252mb' )
console.log(positivo)