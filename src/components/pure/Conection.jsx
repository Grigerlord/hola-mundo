import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const Conection = ({ Contact }) => {
    return (
        <>
            <h2>
                { Contact.name }
            </h2>
            <h3>
                { Contact.fullName }
            </h3>
            <h4>
                { Contact.email }
            </h4>
            <h5>
                {Contact.conected ? 'CONECTED' : 'UNCONECTED'}
            </h5>
        </>
    )
}

Conection.propTypes = {
    Contact: PropTypes.instanceOf(Contact)
}

    export { Conection }