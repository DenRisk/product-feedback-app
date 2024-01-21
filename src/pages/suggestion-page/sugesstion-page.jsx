// Styles
import styles from './sugesstion-page.module.scss'

// Components
import SuggestionBoard from "../../components/suggestion/board/suggestion-board.jsx";
import SuggestionCategories from "../../components/suggestion/categories/suggestion-categories.jsx";
import SuggestionRoadmap from "../../components/suggestion/roadmap/suggestion-roadmap.jsx";
import SuggestionList from "../../components/suggestion/list/suggestion-list.jsx";


export default function SuggestionPage() {

    return (
        <section className={styles.suggestionPage}>
            <div className={styles.column}>
                <SuggestionBoard />
                <SuggestionCategories />
                <SuggestionRoadmap />
            </div>
            <div className={styles.column}>
                <SuggestionList />
            </div>
        </section>
    )
}
