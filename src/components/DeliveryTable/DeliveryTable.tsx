import style from './DeliveryTable.module.scss'

const DeliveryTable = (props: any) => {
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

    const renderBody = () => {
        return (
            <tbody className={style.tableBody}>
                <tr>
                    <td className={style.idCol}>1</td>
                    <td className={style.destinyCol}>Serra Talhada</td>
                    <td className={style.distanceCol}>2Km</td>
                    <td className={style.statusCol}>Entregue</td>
                </tr>
                <tr>
                    <td className={style.idCol}>2</td>
                    <td className={style.destinyCol}>Serra Talhada</td>
                    <td className={style.distanceCol}>2Km</td>
                    <td className={style.statusCol}>Entregue</td>
                </tr>
                <tr>
                    <td className={style.idCol}>3</td>
                    <td className={style.destinyCol}>Serra Talhada</td>
                    <td className={style.distanceCol}>2Km</td>
                    <td className={style.statusCol}>Entregue</td>
                </tr>
                <tr>
                    <td className={style.idCol}>4</td>
                    <td className={style.destinyCol}>Serra Talhada</td>
                    <td className={style.distanceCol}>2Km</td>
                    <td className={style.statusCol}>Entregue</td>
                </tr>
                <tr>
                    <td className={style.idCol}>5</td>
                    <td className={style.destinyCol}>Serra Talhada</td>
                    <td className={style.distanceCol}>2Km</td>
                    <td className={style.statusCol}>Entregue</td>
                </tr>
                <tr>
                    <td className={style.idCol}>6</td>
                    <td className={style.destinyCol}>Serra Talhada</td>
                    <td className={style.distanceCol}>2Km</td>
                    <td className={style.statusCol}>Entregue</td>
                </tr>
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