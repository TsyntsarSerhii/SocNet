import React from 'react';
import styles from './FormsControls.module.css';


const FormConstrol = (props) => {
    const showError = props.touched && props.error;
    return (
        <div className={styles.formControl + " " + (showError ? styles.error : " ")} >
            <div>
                {props.element}
            </div>
            {showError && <span>{props.error}</span>}
        </div>
    )
}

export const Textarea = ({ input, meta, ...props }) => {
    const el = React.createElement('input', { ...input, ...props })
    return <FormConstrol element={el} {...meta} />
}
export const Input = ({ input, meta, ...props }) => {
    const el = React.createElement('input', { ...input, ...props })
    return <FormConstrol element={el} {...meta} />
}

/*
export const Textarea = ({ input, meta, ...props }) => {
    const showError = props.touched && props.error;
    return (
        <div className={styles.formControl + " " + (showError ? styles.error : " ")} >
            <div>
                <textarea {...input} {...props} />
            </div>
            {showError && <span>{props.error}</span>}
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {
    const showError = props.touched && props.error;
    return (
        <div className={styles.formControl + " " + (showError ? styles.error : " ")} >
            <div>
                <input {...input} {...props} />
            </div>
            {showError && <span>{props.error}</span>}
        </div>
    )
}
*/