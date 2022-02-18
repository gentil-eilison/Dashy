import ReactApexChart from 'react-apexcharts'
import { useState } from 'react'

type PieChartData = {
    labels: Array<string>
    series: Array<number>
    colors?: Array<string>
    id: string
}

const PieChart = (props: PieChartData) => {
    const [series, setSeries] = useState<number[]>(props.series)
    const [labels, setLabels] = useState<string[]>(props.labels)

    const chartSettings = {
        chart: {
            fontFamily: 'Source Sans Pro, sans serif',
        },
        series, 
        options: {
            width: 380,
            type: 'pie'
        },
        colors: ['#47B27C', '#FFCA83', '#FF7285', '#9997EB'],
        labels,
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom',
                }
            }
        }],
        legend: {
            markers: {
                width: 20,
                height: 10
            }
        },
        dataLabels: {
            enabled: false
        }

    }

    return (
        <div id={props.id}>
            <ReactApexChart options={chartSettings} series={series} type="pie" width={380}></ReactApexChart>
        </div>
    )
}

export default PieChart