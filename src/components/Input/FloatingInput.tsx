/**
 * Component for creating inputs containing floating labels 
 */

import React from 'react'

import styles from './FloatingInput.module.scss'

/**
 * Children property is needed in order to automatically output label text
 * Name prop. is used when sending data to the back-end
 */
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