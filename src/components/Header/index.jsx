import React from 'react'
import './style.scss'
import Menu from '../Menu'

function Header() {
    return (
        <div className="header-wrap">
            <p className="brand-description">Digital experience design studio</p>
            <Menu />
        </div>
    )
}

export default Header
