import styles from './text-input.module.scss'
import { useState } from 'react';

export default function TextInput({value, onChange }) {
    const [touched, setTouched] = useState(false);

    const showError = touched && value.trim() === '';

    const handleChange = (event) => {
        setTouched(true);
        onChange(event.target.value);
      };


    return (
        <>
            <input
                type="text"
                className={`${styles.textInput} ${showError ? styles.inputError : ''}`}
                value={value}
                onChange={handleChange}
            />
            {showError && <p className={styles.textError}>Can not be empty</p>}
        </>
        

    )
}