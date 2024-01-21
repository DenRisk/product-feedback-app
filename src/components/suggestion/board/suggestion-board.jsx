import styles from './suggestion-board.module.scss'

export default function SuggestionBoard() {
    return (
        <div className={styles.suggestionsBoard}>
            <div>
                <h2 className={styles.title}>Frontend Mentor</h2>
                <p className={styles.label}>Feedback Board</p>
            </div>
        </div>
    )
}