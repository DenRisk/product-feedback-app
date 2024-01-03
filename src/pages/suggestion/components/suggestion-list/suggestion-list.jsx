import './suggestion-list.scss'
export default function SuggestionList({ children }) {
    return (
        <div className='suggestions-list'>
            {children}
        </div>
    )
}