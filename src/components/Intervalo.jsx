import './Intervalo.css'
import React from 'react'
import Card from './Cards'

export default props => {
    return (
        <Card title='Intervalo de Numeros' red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo: </strong>
                    <input type="number" value={0} readOnly/>
                </span>
                
                <span>
                    <strong>Maximo: </strong>
                    <input type="number" value={10} readOnly/>
                </span>
            </div>
        </Card>
    )
}