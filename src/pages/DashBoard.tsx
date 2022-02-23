import React from 'react'
import { useEffect, useState } from 'react'
import api from '../services/api'

// Components
import PieChart from '../components/PieChart/PieChart'
import ColumnChart from '../components/ColumnChart/ColumnChart'
import NavItem from '../components/NavItem/NavItem'
import SimpleCard from '../components/SimpleCard/SimpleCard'
import FloatingInput from '../components/Input/FloatingInput'
import DeliveryTable from '../components/DeliveryTable/DeliveryTable'

// Styles
import '../styles/DashBoard.scss'

// Images
import dashboardIcon from '../assets/images/dashboard.svg'
import exitIcon from '../assets/images/exitIcon.svg'
import footerStrip from '../assets/images/footerStrip.svg'
import headerStrip from '../assets/images/headerStrip.svg'
import pliers from '../assets/images/pliers.svg'
import greenTick from '../assets/images/greenTick.svg'
import rollThread from '../assets/images/rollThread.svg'
import streetLight from '../assets/images/streetLight.svg'


const DashBoard = () => {
    const [productsAmount, setProductsAmount] = useState<any>(false)
    const [deliveryAvgs, setDeliveryAvgs] = useState<any>(false)

    const sumProductsAmount = (categoryAmounts: number[]) => {
        return categoryAmounts.reduce((previousE, e) => previousE + e, 0)
    }

    const categoryPercentage = (categoryAmounts: number[], category="delivered" || "lateRisk" || "late") => {
        const totalAmount = sumProductsAmount(categoryAmounts)

        if (category === "delivered") {
            return ((productsAmount[0]/totalAmount) * 100)
        } else if (category === "lateRisk") {
            return ((productsAmount[1]/totalAmount) * 100)
        } else {
            return ((productsAmount[2]/totalAmount) * 100)
        }
    }

    useEffect(() => {
        api.get("/products-by-status")
                .then(response => setProductsAmount([
                    response.data.data.delivered, 
                    response.data.data.lateRisk, 
                    response.data.data.late
                ]))
                .catch(error => console.log(error))
    
        api.get("/delivery-avgs")
                .then(response => setDeliveryAvgs(response.data.data))
                .catch(error => console.log(error))
    }, [])

    console.log(deliveryAvgs)

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
                        {productsAmount && 
                            <>
                                <p className='productAmount'>{sumProductsAmount(productsAmount)}</p> 
                                <p className='productsLabel'>produtos</p>
                            </>
                        }
                    </span>
                        <hr className='verticalBar'/> 
                        <hr className='headerDivider' />
                </header>
                

                <section id="dataDisplay">
                    {productsAmount && 
                        <div className="simpleCards">
                            <SimpleCard
                                cardLabel='Total de produtos'
                                quantity={sumProductsAmount(productsAmount)}></SimpleCard>
                            <SimpleCard
                                cardLabel='Produtos com atraso na entrega'
                                quantity={productsAmount[2]}
                                color='#E8596C'
                                percentage={categoryPercentage(productsAmount, "late")}></SimpleCard>
                            <SimpleCard
                                cardLabel='Produtos com risco de atraso'
                                quantity={productsAmount[1]}
                                color='#EFB15D'
                                percentage={categoryPercentage(productsAmount, "lateRisk")}></SimpleCard>
                            <SimpleCard
                                cardLabel='Produtos entregues'
                                quantity={productsAmount[0]}
                                color='#ACC79A'
                                percentage={categoryPercentage(productsAmount, "delivered")}></SimpleCard>
                        </div>
                    }

                    
                    {deliveryAvgs && 
                        <div className="iconedCards">
                            <SimpleCard
                                cardLabel={deliveryAvgs[0].label}
                                quantity={deliveryAvgs[0].value}
                                color='#595F6E'
                                cardText={deliveryAvgs[0].unity}
                                iconSrc={streetLight}></SimpleCard> 
                            <SimpleCard
                                cardLabel={deliveryAvgs[1].label}
                                quantity={deliveryAvgs[1].value}
                                color='#595F6E'
                                cardText={deliveryAvgs[1].unity}
                                iconSrc={pliers}></SimpleCard>
                            <SimpleCard
                                cardLabel={deliveryAvgs[2].label}
                                quantity={deliveryAvgs[2].value}
                                color='#595F6E'
                                cardText={deliveryAvgs[2].unity}
                                iconSrc={greenTick}></SimpleCard>
                            <SimpleCard
                                cardLabel={deliveryAvgs[3].label}
                                quantity={deliveryAvgs[3].value}
                                color='#595F6E'
                                cardText={deliveryAvgs[3].unity}
                                iconSrc={rollThread}></SimpleCard> 
                        </div>
                    }


                   

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
                        {productsAmount &&
                            <section id="deliveryStatus">
                                <header>
                                    <h1>Status das Entregas</h1>
                                </header>
                                <PieChart
                                    id='ds'
                                    labels={['Entregues', 'Em Risco', 'Atrasadas']}
                                    series={productsAmount}
                                    colors={['#47B27C', '#FFCA83', '#FF7285']}
                                    width={350}
                                    height={200}></PieChart>
                            </section>
                        }

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
                                <h1>Avaliação de Entregas</h1>
                            </header>
                            <PieChart
                                id='ncp'
                                labels={['Excelente', 'Bom', 'Regular', 'Ruim', 'Terrível']}
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