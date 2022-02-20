import React from 'react'
import PieChart from '../components/PieChart/PieChart'
import ColumnChart from '../components/ColumnChart/ColumnChart'
import NavItem from '../components/NavItem/NavItem'

import '../styles/DashBoard.scss'

import dashboardIcon from '../assets/images/dashboard.svg'
import exitIcon from '../assets/images/exitIcon.svg'
import footerStrip from '../assets/images/footerStrip.svg'
import headerStrip from '../assets/images/headerStrip.svg'

const DashBoard = () => {
    return (
        <>
        <aside>
            <header>
                <img src={headerStrip} alt="Top header green strip" />
            </header>
            <nav>
                <section id="mainNavigation">
                    <ul>
                        <li>
                            <NavItem 
                                alt='Dashboard menu item'
                                path='/dashboard'
                                src={dashboardIcon}
                                >Dashboard</NavItem>
                        </li>
                    </ul>
                </section>

                <section id="programmer">
                    <header>
                        <span>PROGRAMADOR</span>
                    </header>
                    <p>Edgar Marques</p>
                    <ul>
                        <li>
                            <NavItem
                                alt='Exit platform icon'
                                src={exitIcon}
                                path='/'
                                >Sair</NavItem>
                        </li>
                    </ul>
                </section>
            </nav>

            <footer>
                <img src={footerStrip} alt="Bottom navigation green strip" />
                <div>Uma plataforma <p>NEW WAVE</p></div>
            </footer>
        </aside>

        <main>

        </main>
        </>
    )
}

export default DashBoard