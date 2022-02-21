import React from 'react'
import PieChart from '../components/PieChart/PieChart'
import ColumnChart from '../components/ColumnChart/ColumnChart'
import NavItem from '../components/NavItem/NavItem'
import SimpleCard from '../components/SimpleCard/SimpleCard'

import '../styles/DashBoard.scss'

import dashboardIcon from '../assets/images/dashboard.svg'
import exitIcon from '../assets/images/exitIcon.svg'
import footerStrip from '../assets/images/footerStrip.svg'
import headerStrip from '../assets/images/headerStrip.svg'
import pliers from '../assets/images/pliers.svg'
import greenTick from '../assets/images/greenTick.svg'
import rollThread from '../assets/images/rollThread.svg'
import streetLight from '../assets/images/streetLight.svg'

const DashBoard = () => {
    return (
        <div id="dashContent">
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
                <header>
                    <span>
                        <h1>DASHBOARD</h1>
                        <p className='productAmount'>97</p> 
                        <p className='productsLabel'>produtos</p></span>
                        <hr className='verticalBar'/> 
                        <hr className='headerDivider' />
                </header>
                

                <section id="dataDisplay">
                    <div className="simpleCards">
                        <SimpleCard
                            cardLabel='Total de produtos'
                            quantity={97}></SimpleCard>
                        <SimpleCard
                            cardLabel='Produtos com atraso na entrega'
                            quantity={15}
                            color='#E8596C'
                            percentage={15}></SimpleCard>
                        <SimpleCard
                            cardLabel='Produtos com risco de atraso'
                            quantity={22}
                            color='#EFB15D'
                            percentage={22}></SimpleCard>
                        <SimpleCard
                            cardLabel='Produtos entregues'
                            quantity={22}
                            color='#ACC79A'
                            percentage={22}></SimpleCard>
                    </div>

                    <div className="iconedCards">
                        <SimpleCard
                            cardLabel='Produtos entregues'
                            quantity={22}
                            color='#ACC79A'
                            percentage={22}></SimpleCard>
                            <SimpleCard
                            cardLabel='Produtos entregues'
                            quantity={22}
                            color='#ACC79A'
                            percentage={22}></SimpleCard>
                            <SimpleCard
                            cardLabel='Produtos entregues'
                            quantity={22}
                            color='#ACC79A'
                            percentage={22}></SimpleCard>
                            <SimpleCard
                            cardLabel='Produtos entregues'
                            quantity={22}
                            color='#ACC79A'
                            percentage={22}></SimpleCard>
                    </div>

                    <div className="chartDisplay">
                        <blockquote>Pica Pau 123 Isso não acontecia</blockquote>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default DashBoard