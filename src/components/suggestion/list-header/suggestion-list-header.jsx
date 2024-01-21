import styles from './suggestions-list-header.module.scss'
import SuggestionSort from "../sort/suggestion-sort.jsx";
import {AddButton} from "../../shared/add-button/add-button.jsx";
export default function SuggestionListHeader({count}) {
    return (
        <div className={styles.suggestionsListHeader}>
            <h3>{count} Suggestions</h3>
            <SuggestionSort />
            <AddButton />
        </div>
    )
}