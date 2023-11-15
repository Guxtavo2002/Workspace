class contaBancaria {

    constructor(nome, idade, salario, sexo, agencia, conta, tipoConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.tipoConta = tipoConta;
    }

    contaPoupança() {
        return this.salario - 1.5
    }

    contaCorrente() {
        return this.salario - 3.6
    }

    contaEstudante() {
        return this.salario - 1.2
    }
}

var aluno = new contaBancaria('Gustavo', '21', 2100, 'Masculino', '165', '74589', 'contaCoorente')

console.log(aluno)
console.log(aluno.contaEstudante())