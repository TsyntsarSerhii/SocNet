import React from 'react';
import styles from './FormsControls.module.css';


/*const FormConstrol = ({ input, meta, child, ...props }) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (showError ? styles.error : "")} >
            <div>
                {props.children}
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormConstrol {...props}><textarea {...input} {...restProps} /> </FormConstrol>
}
export const Input = (props) => {
    const { input, meta, ...restProps } = props
    return <FormConstrol {...props}><input {...input} {...restProps} /> </FormConstrol>
}*/

export const Textarea = ({ input, meta, ...props }) => {
    const el = React.createElement('input', { ...input, ...props })
    return (
        <FormConstrol element={el} {...meta} />
    )
}

export const Input = ({ input, meta, ...props }) => {
    const el = React.createElement('input', { ...input, ...props })
    return (
        <FormConstrol element={el} {...meta} />
    )
}

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