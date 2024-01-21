import CommentsIcon from "../../../assets/icons/icon-comments.svg";
import styles from "./comment-count.module.scss";

export default function CommentCount({count}) {
    return (
        <div className={styles.commentsCount}>
            <img src={CommentsIcon} alt='comments'/>
            <div>{count}</div>
        </div>
    )
}