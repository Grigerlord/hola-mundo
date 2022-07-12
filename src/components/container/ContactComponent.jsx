import React from 'react'
import { Contact } from '../../models/contact.class'
import { Conection } from '../pure/Conection'

const ContactComponent = () => {

    const defaultContact = new Contact(
        'Griger',
        'Ratia',
        'grigerratia@gmail.com',
        false,
        )

    return (
    <>
        <Conection Contact={defaultContact}/>
    </>
    )
}

export { ContactComponent }