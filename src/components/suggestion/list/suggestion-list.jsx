import SuggestionListHeader from "../list-header/suggestion-list-header.jsx";
import SuggestionListItems from "../list-items/suggestion-list-items.jsx";
import {useSelector} from "react-redux";
import styles from './suggestion-list.module.scss'
import Spinner from "../../shared/spinner/spinner.jsx";
import SuggestionEmpty from "../empty/suggestion-empty.jsx";

export default function SuggestionList() {
    const {productRequests, loading} = useSelector((state) => state.productRequests)
    const {selectedCategories} = useSelector((state) => state.filter)
    const {selectedSortCode} = useSelector((state) => state.sort)

    const sortedProductRequests = productRequests?.slice().sort((a, b) => {
        if (selectedSortCode === 'mostupvotes') {
            return b.upvotes - a.upvotes
        }
        if (selectedSortCode === 'leastupvotes') {
            return a.upvotes - b.upvotes
        }
        if (selectedSortCode === 'mostcomments') {
            return b.commentsCount - a.commentsCount
        }
        if (selectedSortCode === 'leastcomments') {
            return a.commentsCount - b.commentsCount
        }
        return 0
    })

    const filteredProductRequests = sortedProductRequests?.filter((item) => {
        if (selectedCategories.includes('all')) {
            return sortedProductRequests
        }
        return selectedCategories.includes(item.category)
    })

    if (loading) {
        return <Spinner/>
    }

    return (
        <div className={styles.suggestionList}>
            <SuggestionListHeader count={filteredProductRequests.length}/>
            {filteredProductRequests.length === 0 ? <SuggestionEmpty/> : <SuggestionListItems productRequests={filteredProductRequests}/>}
        </div>
    )
}