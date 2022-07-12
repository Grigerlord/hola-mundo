import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const GreetingF = (props) => {

    const [age, setAge] = useState(28)

    const birthday = () => {
        //actualizador
        setAge(age + 1)
    }

    return (
        <div>
        <div>
            <h1>
                Hola {props.name}
            </h1>
            <h2>
                Ya tienes {age} años
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir anhos
                </button>
            </div>
        </div>
    </div>
    )
}

GreetingF.propTypes = {
    name: PropTypes.string
}

export default GreetingF