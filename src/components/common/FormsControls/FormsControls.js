import React from 'react';

import { Field } from "redux-form";

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

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
            validate={validators}
            component={component}
            {...props}
        /> {text}
    </div>
)