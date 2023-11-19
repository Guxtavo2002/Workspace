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
        const aplicaDesconto = (this.salario * 1.5)/100
        const resultadododesconto = this.salario - aplicaDesconto
        return `O salário novo é: ${resultadododesconto}`
    }

    contaCorrente() {
        const aplicaDesconto = (this.salario * 3.6)/100
        const resultadoaplicado = this.salario -aplicaDesconto;
        return `O salário novo é: ${resultadoaplicado}`
    }

    contaEstudante() {
        const aplicaDesconto = (this.salario * 1.2)/100
        const resultadoaplicado = this.salario - aplicaDesconto
        return `O salário novo é: ${resultadoaplicado}`
    }
}

var aluno1 = new contaBancaria('Gustavo', '21', 2100, 'Masculino', '165', '74589', 'contaEstudante')
var aluno2 = new contaBancaria('Marcia', '50', 1800, 'Feminino', '670', '458615', 'contaPoupança');
var aluno3 = new contaBancaria('Silvio', '52', 3000, 'Masculino', '560', '645687', 'contaCorrente');

console.log(aluno1)
console.log(aluno1.contaEstudante())