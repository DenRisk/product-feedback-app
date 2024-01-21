import styles from './suggestion-list-items.module.scss'
import SuggestionItem from "../../shared/suggestion-item/sugesstion-item.jsx";
import {Link} from "react-router-dom";

export default function SuggestionListItems({productRequests}) {

    return (
        <ul className={styles.suggestionsListItems}>
            {
                productRequests.map((item) => (
                    <Link to={`detail/${item.id}`} className={styles.link} key={item.id}>
                        <SuggestionItem
                            key={item.id}
                            currentProductRequest={item}
                        />
                    </Link>
                ))}
        </ul>
    )
}