import styles from './suggestion-empty.module.scss'
import EmptyIcon from '../../../assets/images/illustration-empty.svg'
import {AddButton} from "../../shared/add-button/add-button.jsx";

export default function SuggestionEmpty() {
    return (
        <div className={styles.suggestionsEmpty}>
            <img src={EmptyIcon} alt='empty'/>
            <h1>There is no feedback yet.</h1>
            <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
            <AddButton/>
        </div>
    )
}