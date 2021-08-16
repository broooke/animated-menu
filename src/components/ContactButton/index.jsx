import React, { useContext } from 'react'
import './style.scss'
import { Plus } from 'react-feather'
import { MenuContext } from '../Menu/MenuManager'
import cn from 'classnames'

function ContactButton() {

    const {setOpen, open} = useContext(MenuContext)
    return (
        <button className={cn("contact-button", {open})} onClick={() => setOpen(!open)}>
            <span>Contact us</span>
            <Plus />
        </button>
    )
}

export default ContactButton
