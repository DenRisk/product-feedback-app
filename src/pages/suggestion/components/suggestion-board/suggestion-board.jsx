import './suggestion-board.scss'

const boardLocalisation = {
    title: 'Frontend Mentor',
    label: 'Feedback Board',
}

export default function SuggestionBoard() {
    return (
        <div className='suggestions-board'>
            <div className='suggestions-board__content'>
                <h2 className='suggestions-board__title'>
                    {boardLocalisation.title}
                </h2>
                <div className='suggestions-board__label'>
                    {boardLocalisation.label}
                </div>
            </div>
        </div>
    )
}