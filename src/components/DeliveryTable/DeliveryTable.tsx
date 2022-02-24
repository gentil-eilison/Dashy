import style from './DeliveryTable.module.scss'
import { useEffect, useState } from 'react'

type delivery = {
    id: number 
    address: string 
    distance: number 
    status: string 
}

type DeliveryTableData = {
    deliveriesData: delivery[]
}

const DeliveryTable = ({ deliveriesData }: DeliveryTableData) => {
    const [isFiltered, setIsFiltered] = useState<any>([false, '---'])

    const renderHeader = () => {
        return (
            <thead>
                <tr className={style.headerRow}>
                    <th className={style.idCol}>N</th>
                    <th className={style.destinyCol}>DESTINO</th>
                    <th className={style.distanceCol}>Distância</th>
                    <th className={style.statusCol}>Status</th>
                </tr>
            </thead>
        )
    }

    const capitalizeWord = (word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    } 

    document.getElementsByTagName('select')[0].onchange = () => {
        let selectValue = document.getElementsByTagName('select')[0].value
        let filterTable = selectValue === "---" ? false : true
        setIsFiltered([filterTable, selectValue])
    }


    const renderBody = () => {
        return (<tbody className={style.tableBody}>
            {isFiltered[0] ? (
                deliveriesData?.map(e => {
                    if (e.status === isFiltered[1].toLowerCase()) {
                        return <tr key={e.id}>
                            <td className={style.idCol}>{e.id}</td>
                            <td className={style.destinyCol}>{e.address}</td>
                            <td className={style.distanceCol}>{e.distance} km</td>
                            <td className={style.statusCol}>{capitalizeWord(e.status)}</td>
                        </tr>
                    }
                })
            ) : (
                deliveriesData?.map(e => {
                    return <tr key={e.id}>
                            <td className={style.idCol}>{e.id}</td>
                            <td className={style.destinyCol}>{e.address}</td>
                            <td className={style.distanceCol}>{e.distance} km</td>
                            <td className={style.statusCol}>{capitalizeWord(e.status)}</td>
                            </tr>
                })
            )}
        </tbody>
        )
    }

    return (
        <table className={style.deliveryTable}>
            {renderHeader()}
            {renderBody()}
        </table>
    )
}

export default DeliveryTable