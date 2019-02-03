import React, { Component } from 'react'

export default class Saudacao extends Component {
    
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }// O state são os valores que a instância recebe

    constructor(props) {
        super(props)

        this.setTipo = this.setTipo.bind(this)
    }// Função construtora, utiliza o bind para definir o valor do this dentro de componentes

    setTipo(e) {
        this.setState({ tipo: e.target.value })
    }// Altera o state, esta função é chamada no próprio input através do onChange

    setNome(e) {
        this.setState({ nome: e.target.value })
    }// Altera o state, esta função é chamada no próprio input através do onChange


    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{ tipo } { nome }!</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/> 
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )// Dois exemplos distintos, um input com função arrow e outro sem
    }// Sem a função arrow, é necessário definir o this através do bind(ver acima)
}