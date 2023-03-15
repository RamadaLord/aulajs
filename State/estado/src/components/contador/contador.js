import React, { Component } from 'react'
import Botao from '../botao/botao'
class Contador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: 0,
            zero: 'chegou a zero'
        }
        this.aumentar=this.aumentar.bind(this)
        this.diminuir=this.diminuir.bind(this)
    }
    aumentar(){
               
       let state = this.state 
        state.contador +=1
        this.setState(state)
    }
    diminuir(){
        let state = this.state 
        state.contador -=1
        this.setState(state)
        if(this.state.contador ===0){}
        
    }
    render() {
        return (
            <div>

                <h2>Contador</h2>
                <Botao nome='+' acaoBtn={this.aumentar} />
                <h2>{this.state.contador}</h2>
                <Botao nome='-' acaoBtn={this.diminuir}/>
            </div>

        )
    }
}

export default Contador;