class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes 
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const sbAlimentacao = new Lancamento('Subsidio', 3000)
const contaDeLuz = new Lancamento('Luz', -220)
const renda = new Lancamento('Renda', -6000)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz, contaDeLuz, renda)
console.log(contas.sumario())