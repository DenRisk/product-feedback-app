import styles from './suggestion-item.module.scss';
import Upvotes from '../upvotes/upvotes.jsx'
import Category from "../category/category.jsx";
import CommentCount from "../comment-count/comment-count.jsx";

export default function SuggestionItem({currentProductRequest}) {

    if (!currentProductRequest) return null;

    return (
        <div className={styles.suggestionsItem}>
            <div className={styles.upvotes}>
                <Upvotes currentProductRequest={currentProductRequest}/>
            </div>
            <div className={styles.text}>
                <h3>{currentProductRequest.title}</h3>
                <div className={styles.description}>{currentProductRequest.description}</div>
            </div>
            <div className={styles.category}>
                <Category category={currentProductRequest.category} name={currentProductRequest.category}
                          readonly={true}></Category>
            </div>
            <div className={styles.commentsCount}>
                <CommentCount count={currentProductRequest.commentsCount}/>
            </div>
        </div>


    )
}
