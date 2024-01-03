import './suggestion-state.scss'
export default function SuggestionState({color, label, count}) {
    return (
        <div className='suggestions-state'>
            <div className='suggestions-state__identifier' style={{backgroundColor: color}}></div>
            <div className='suggestions-state__label'>
                {label}
            </div>
            <div className='suggestions-state__count'>
                {count}
            </div>
        </div>
    )
}