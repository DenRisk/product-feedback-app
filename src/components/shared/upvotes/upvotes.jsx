import styles from './upvotes.module.scss'
import ArrowUpWhite from '../../../assets/icons/icon-arrow-up-white.svg'


export default function Upvotes({ currentProductRequest }) {
    function handleUpvote() {
    }

    return (
        <button className={`${styles.upvotes}`} onClick={() => handleUpvote()}>
            <img src={ArrowUpWhite} alt='arrow'/>
            <div className={styles.count}>{currentProductRequest.upvotes}</div>
        </button>
    )
}