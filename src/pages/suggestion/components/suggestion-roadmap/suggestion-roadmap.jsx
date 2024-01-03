import {Link} from "react-router-dom";
import SuggestionState from "../suggestion-state/suggestion-state.jsx";
import './suggestion-roadmap.scss'

const roadmapLocalisation = {
    title: 'Roadmap',
    link: 'View',
}

const roadmapStates = [
    {
        label: 'Planned',
        code: 'planned',
        color: '#F49F85'
    },
    {
        label: 'In Progress',
        code: 'in-progress',
        color: '#AD1FEA'
    },
    {
        label: 'Live',
        code: 'live',
        color: '#62BCFA'
    },
]
export default function SuggestionRoadmap( { suggestions = [] }) {

    function filterRoadmapStateByCode(code) {
      return suggestions.filter(suggestion => suggestion.status === code)?.length
    }

    return (
        <div className='suggestions-roadmap'>
            <div className='suggestions-roadmap__nav'>
                <h3>{roadmapLocalisation.title}</h3>
                <Link to={'roadmap'}>{roadmapLocalisation.link}</Link>
            </div>
            {roadmapStates.map((state) => (
                <SuggestionState key={state.code} color={state.color} label={state.label} count={filterRoadmapStateByCode(state.code)}/>
            ))}
        </div>
    )
}