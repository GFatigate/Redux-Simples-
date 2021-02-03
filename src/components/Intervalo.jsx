import './Intervalo.css'
import React from 'react'
import {connect} from 'react-redux'
import {alterarNumeroMinimo, alterarNumeroMaximo} from '../store/actions/numerosActions'
import Card from './Cards'

function Intervalo(props) {
    const {min, max} = props
    return (
        <Card title='Intervalo de Numeros' red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo: </strong>
                    <input type="number" value={min} onChange={e => props.alteraMin(+e.target.value)}/>
                </span>
                
                <span>
                    <strong>Maximo: </strong>
                    <input type="number" value={max} onChange={e => props.alteraMax(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchToProps(dispatch){
    return{
        alteraMin(novoNumero){
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alteraMax(novoNumero){
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)