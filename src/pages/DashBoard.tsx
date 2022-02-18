import React from 'react'
import PieChart from '../components/PieChart/PieChart'
import ColumnChart from '../components/ColumnChart/ColumnChart'

const DashBoard = () => {
    return (
        <>
        <PieChart
            id="main-pie" 
            labels={['Team A', 'Team B', 'Team C', 'Team D']}
            series={[44, 55, 13, 43]}></PieChart>
        
        <ColumnChart
            categories={['John', 'Joe', 'Jake']} 
            data={[21, 22, 10]}
            id='column-chart' 
            colors={['#004C6D', '#5886A5', '#9DC6E0']}
            title="Frequência"></ColumnChart>
        </>
    )
}

export default DashBoard