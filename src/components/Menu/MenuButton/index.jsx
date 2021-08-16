import React, { useContext } from 'react'
import './style.scss'
import { MenuContext } from '../MenuManager'
import cn from 'classnames'

function MenuButton() {

    const {open, setOpen} = useContext(MenuContext)

    return (
        <div className={cn("menu-button-wrap", { open })}>
            <button className='menu-button' onClick={() => setOpen(!open)}>
                <span></span>
            </button>
        </div>
    )
}

export default MenuButton
