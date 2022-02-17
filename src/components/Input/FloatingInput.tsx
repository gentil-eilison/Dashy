import React from 'react'

import styles from './FloatingInput.module.scss'

type InputData = {
    type: string 
    value?: string
    children: any
    name: string
    required?: boolean
}

const Input = (props: InputData) => {
    return (
        <div className={styles.formGroup}>
            <input 
                type={props.type}
                required={props.required} 
                value={props.value ?? props.value}
                name={props.name}
                id={props.name}
                placeholder=' '
                className={styles.floatingInput}/>
            <label htmlFor={props.type} className={styles.floatingLabel}>{props.children}</label>
        </div>
        
    )
}

export default Input