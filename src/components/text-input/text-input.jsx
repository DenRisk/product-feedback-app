import './text-input.scss'
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
                className={`text-input ${showError ? 'text-input--error' : ''}`}
                value={value}
                onChange={handleChange}
            />
            {showError && <p className='error'>Can't be empty</p>}
        </>
        

    )
}