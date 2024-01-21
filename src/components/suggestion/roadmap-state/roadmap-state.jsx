import styles from './roadmap-state.module.scss'
export default function RoadmapState({color, label, count}) {
    return (
        <div className={styles.suggestionState}>
            <div className={styles.identifier} style={{backgroundColor: color}}></div>
            <div className={styles.label}>
                {label}
            </div>
            <div className={styles.count}>
                {count}
            </div>
        </div>
    )
}