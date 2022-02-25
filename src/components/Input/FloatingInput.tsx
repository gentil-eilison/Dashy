/**
 * Component for creating inputs containing floating labels 
 */

import React from 'react'
import { useForm, UseFormRegisterReturn } from 'react-hook-form'

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
    options?: string[]
}

const Input = React.forwardRef(({ type, value, children, name, required, options }: InputData, ref: any) => { 
    const selectOptions = options ? options : null 

    const optionsTags = selectOptions?.map((e, i) => {
        return <option value={e} key={`${i}`}>{e}</option>
    })

    console.log(name)

    return (
        <div className={styles.formGroup}>
            {type === "select" ? (
                <>
                <select 
                    ref={ref}
                    name={name}
                    id={name} 
                    className={styles.floatingInput} 
                    title={name}
                    >
                    {optionsTags}
                </select>
                <label htmlFor={type} className={styles.floatingLabel}>{children}</label>
                </>
            ) : (
                <>
                <input 
                    ref={ref}
                    type={type}
                    required={required} 
                    value={value ?? value}
                    name={name}
                    id={name}
                    placeholder=' '
                    className={styles.floatingInput}/>
                <label htmlFor={type} className={styles.floatingLabel}>{children}</label>
                </>
            )}
        </div>
        
    )
})

export default Input