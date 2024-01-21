import styles from './customLink.module.scss'
import {Link} from "react-router-dom";

export default function CustomLink({type, to, children, handleOnClick}) {

    if (type === 'VISUAL') {
        return (
            <button onClick={handleOnClick}>
                <span className={styles.visualLink}>{children}</span>
            </button>
        )
    }

    return (
        <Link to={to}>
            <span className={styles.link}>{children}</span>
        </Link>
    )
}