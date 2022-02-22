import React from 'react'
import PieChart from '../components/PieChart/PieChart'
import ColumnChart from '../components/ColumnChart/ColumnChart'
import NavItem from '../components/NavItem/NavItem'
import SimpleCard from '../components/SimpleCard/SimpleCard'
import FloatingInput from '../components/Input/FloatingInput'
import DeliveryTable from '../components/DeliveryTable/DeliveryTable'

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
                            cardLabel='Média de entregas finalizadas por dia'
                            quantity={2.27}
                            color='#595F6E'
                            cardText='entregas'
                            iconSrc={streetLight}></SimpleCard>
                        <SimpleCard
                            cardLabel='Média de entregas com falta de cliente'
                            quantity={1.2}
                            color='#595F6E'
                            cardText='entregas'
                            iconSrc={pliers}></SimpleCard>
                        <SimpleCard
                            cardLabel='Média de distância percorrida pelos entregadores'
                            quantity={4.5}
                            color='#595F6E'
                            cardText='Km'
                            iconSrc={greenTick}></SimpleCard>
                        <SimpleCard
                            cardLabel='Média de distância percorrida em entregas não realizadas'
                            quantity={2.7}
                            color='#595F6E'
                            cardText='Km'
                            iconSrc={rollThread}></SimpleCard> 
                    </div>

                    <div className="tableData">
                        <header>
                            <h1>Entregas</h1>
                            <FloatingInput
                                name='delivery_status'
                                type='select'
                                options={['Entregue', 'Não entregue']}>Status da entrega</FloatingInput>
                        </header>
                        <DeliveryTable></DeliveryTable>
                    </div>

                    <div className="chartDisplay">
                        <section id="deliveryStatus">
                            <header>
                                <h1>Status das Entregas</h1>
                            </header>
                            <PieChart
                                id='ds'
                                labels={[' 49 no prazo (50%)', '20 em risco (29%)', '28 em risco (21%)']}
                                series={[49, 20, 28]}
                                colors={['#47B27C', '#FFCA83', '#FF7285']}
                                width={350}
                                height={200}></PieChart>
                        </section>

                        <section id="deliveryIssues">
                            <header>
                                <h1>Problemas de Entrega</h1>
                                <PieChart
                                    id='di'
                                    labels={['18 Casos de remetente ausente (73%)', '5 Casos de produto errado (27%)']}
                                    series={[18, 5]}
                                    colors={['#004C6D', '#9DC6E0']}
                                    width={400}
                                    height={300}></PieChart>
                            </header>
                        </section>

                        <section id="nonConformitiesPhase">
                            <header>
                                <h1>Total de não conformidades por fase</h1>
                            </header>
                            <PieChart
                                id='ncp'
                                labels={['19 Posteamento (20%)', '15 Rede (21%)', '13 Equipamentos (19%)', '19 Normalização (20%)', '18 Rede (20%)']}
                                series={[19, 15, 13, 19, 18]}
                                colors={['#46CE8A', '#9997EB', '#F26C7E', '#A4BD8C', '#FFCA83']}
                                width={450}
                                height={350}
                                legendPosition='bottom'></PieChart>
                        </section>

                        <section id="blockDeliveryReason">
                            <header>
                                <h1>Motivo de bloqueio nas entregas</h1>
                            </header>
                            <ColumnChart
                                categories={['Falta de dados de remetente', 'Embalagem violada', 'Produto errado']}id='bdr'
                                title='Frequência'
                                data={[7, 6, 4]}
                                colors={['#004C6D', '#5886A5', '#9DC6E0']}></ColumnChart>
                        </section>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default DashBoard