import React from 'react'
import {connect} from 'react-redux'
import Card from './Cards'

function Media (props) {
    const {min, max} = props
    return (
        <Card title='Media do Números' green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(max + min) / 2}</strong>
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

export default connect(mapStateToProps)(Media)