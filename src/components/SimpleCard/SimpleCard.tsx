import style from './SimpleCard.module.scss'

type SimpleCardData = {
    quantity: number 
    cardLabel: string
    cardText?: string  
    percentage?: number 
    color?: string 
    iconSrc?: any 
}

const SimpleCard = (props: SimpleCardData) => {
    return (
        <div className={style.simpleCardWrapper}>
            {props.iconSrc ? (
                <img src={props.iconSrc}  alt="Card custom icon"/>
            ) : null}

            <p className={style.cardLabel}>{props.cardLabel}</p>

            <span 
                className={style.quantity}
                style={{color: props.color ? props.color : '#000'}}>{props.quantity}
                
                <p 
                    className={style.lowerLabel}
                    style={{color: props.color ? props.color : '#000'}}>
                        {props.cardText ? props.cardText : 'produtos'}
                </p>

                {props.percentage ? (
                    <p className={style.percentage}>{props.percentage}%</p>
                ) : null }
            </span>
        </div>
    )
}

export default SimpleCard