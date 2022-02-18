import ReactApexChart from 'react-apexcharts'
import { useState } from 'react'

type PieChartData = {
    labels: Array<string>
    series: Array<number>
}

const PieChart = (props: PieChartData) => {
    const [series, setSeries] = useState<number[]>(props.series)
    const [labels, setLabels] = useState<string[]>(props.labels)

    const chartSettings = {
        series, 
        options: {
            width: 380,
            type: 'pie'
        },
        labels,
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]

    }

    return (
        <div id="chart">
            <ReactApexChart options={chartSettings} series={series} type="pie" width={380}></ReactApexChart>
        </div>
    )
}

export default PieChart