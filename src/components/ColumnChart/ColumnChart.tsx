import ReactApexChart from "react-apexcharts"
import './ColumnChart.scss'
import { useState } from 'react'

type ColumnChartData = {
    categories: Array<string>
    colors?: Array<string>
    data: Array<number>
    id: string
    title: string
}

const ColumnChart = (props: ColumnChartData) => {
    const [data, setData] = useState<number[]>(props.data)
    const [categories, setCategories] = useState<string[]>(props.categories)

    const chartSettings = {
        series: [{
            data,
        }],
        options: {
            chart: {
                fontFamily: 'Source Sans Pro, sans serif',
            },
            type: 'bar', 
            colors: props.colors,
            plotOptions: {
                bar: {
                    columnWidth: '80%',
                    distributed: true,
                    borderRadius: 10,
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: [...categories],
                labels: {
                    style: {
                        colors: '#000000',
                        fontSize: '12px'
                    },
                    rotate: 0,
                }
            },
            yaxis: {
                title: {
                    text: props.title
                }
            },
            tooltip: {
                custom: function({ series, seriesIndex, dataPointIndex, w }: any) {
                    return (
                        '<div class="arrow_box">' +
                            "<span class='toolLabel'>" +
                            w.globals.labels[dataPointIndex] +
                            "</span>" +
                            '<hr />' + 
                            '<span class="toolNumber">' +
                            series[seriesIndex][dataPointIndex] +
                            '</span>'
                         + "ocorrências" + "  " +
                        "</div>"
                      );
                }
            },
        }
    }

    return (    
        <div id={props.id}>
            <ReactApexChart 
                options={chartSettings.options} 
                series={chartSettings.series} 
                type="bar" 
                height={350}
                width={900}></ReactApexChart>
        </div>
    )
}

export default ColumnChart