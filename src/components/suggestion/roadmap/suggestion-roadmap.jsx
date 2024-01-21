import {Link} from "react-router-dom";
import styles from './suggestion-roadmap.module.scss'
import RoadmapState from "../roadmap-state/roadmap-state.jsx";
import {useSelector} from "react-redux";

const roadmapStates = [
    {
        label: 'Planned',
        code: 'planned',
        color: '#F49F85'
    },
    {
        label: 'In Progress',
        code: 'inProgress',
        color: '#AD1FEA'
    },
    {
        label: 'Live',
        code: 'live',
        color: '#62BCFA'
    },
]
export default function SuggestionRoadmap() {

    const {productRequests} = useSelector((state) => state.productRequests)

    const statusCodeCount = {
        planned: productRequests.filter(suggestion => suggestion.status === 'planned')?.length,
        inProgress: productRequests.filter(suggestion => suggestion.status === 'inProgress')?.length,
        live: productRequests.filter(suggestion => suggestion.status === 'live')?.length,
    }

    return (
        <div className={styles.suggestionsRoadmap}>
            <div className={styles.header}>
                <h3>Roadmap</h3>
                <Link to={'roadmap'}>View</Link>
            </div>
            {roadmapStates.map((state) => (
                <RoadmapState key={state.code}
                              color={state.color}
                              label={state.label}
                              count={statusCodeCount[state.code]}
                />
            ))}
        </div>
    )
}