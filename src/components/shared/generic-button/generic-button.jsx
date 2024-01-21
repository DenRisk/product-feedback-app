import styles from './generic-button.module.scss'
import classNames from 'classnames';


function GenericButton({ type, onHandleClick, children}) {

    const buttonClasses = classNames(styles.button, {
        [styles.purple]: type === 'PURPLE',
        [styles.blue]: type === 'BLUE',
        [styles.grey]: type === 'GREY',
        [styles.red]: type === 'RED',
        [styles.transparent]: type === 'TRANSPARENT',
        [styles.underline]: type === 'UNDERLINE',
    });

    return (
        <button className={buttonClasses} onClick={onHandleClick}>
            {children}
        </button>
    )
}

export default GenericButton;