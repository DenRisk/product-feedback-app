import styles from './textarea.module.scss'
export default function TextArea({value, handleOnChange }) {

    return (
        <textarea className={styles.textarea} value={value} onChange={handleOnChange}></textarea>
    )
}
