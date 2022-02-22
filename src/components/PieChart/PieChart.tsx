import ReactApexChart from 'react-apexcharts'
import { useState } from 'react'

type PieChartData = {
    labels: Array<string>
    series: Array<number>
    colors?: Array<string>
    id: string
    width: number 
    height: number
    legendPosition?: string
}

const PieChart = (props: PieChartData) => {
    const [series, setSeries] = useState<number[]>(props.series)
    const [labels, setLabels] = useState<string[]>(props.labels)

    const chartSettings: any = {
        chart: {
            fontFamily: 'Source Sans Pro, sans serif',
        },
        series, 
        type: 'pie',
        colors: props.colors ? props.colors : ['#47B27C', '#FFCA83', '#FF7285', '#9997EB'],
        labels,
        legend: {
            position: props.legendPosition ? props.legendPosition : 'right',
            markers: {
                width: 20,
                height: 10
            },
            horizontalAlign: 'left'
        },
        dataLabels: {
            enabled: false
        }

    }

    return (
        <div id={props.id}>
            <ReactApexChart 
                options={chartSettings} 
                series={series} 
                type="pie" 
                width={props.width}
                height={props.height}></ReactApexChart>
        </div>
    )
}

export default PieChart