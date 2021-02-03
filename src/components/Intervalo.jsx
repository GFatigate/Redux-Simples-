import './Intervalo.css'
import React from 'react'
import {connect} from 'react-redux'
import {alterarNumeroMinimo} from '../store/actions/numeros'
import Card from './Cards'

function Intervalo(props) {
    const {min, max} = props
    return (
        <Card title='Intervalo de Numeros' red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo: </strong>
                    <input type="number" value={min} readOnly/>
                </span>
                
                <span>
                    <strong>Maximo: </strong>
                    <input type="number" value={max} readOnly/>
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

function mapActionCreatorsToProps(dispatch){
    return{
        alteraMin(novoNumero){
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Intervalo)