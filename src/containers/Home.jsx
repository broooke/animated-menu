import React from 'react'
import Header from '../components/Header'
import ContactButton from '../components/ContactButton'
import '../styles/home.scss'
import MenuManager from '../components/Menu/MenuManager'

function Home() {
    return (
        <MenuManager>
            <Header />
            <div className="main-container" id="main-container">
                <h1>
                    Bleu <br /> Blanc <br /> Studio
                </h1>

                <ContactButton />
            </div>
        </MenuManager>
    )
}

export default Home
