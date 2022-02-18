import React from 'react'
import PieChart from '../components/PieChart/PieChart'

const DashBoard = () => {
    return (
        <div id="test-chart">
            <PieChart 
                labels={['Team A', 'Team B', 'Team C', 'Team D', 'Team E']}
                series={[44, 55, 13, 43, 22]}></PieChart>
        </div>
    )
}

export default DashBoard