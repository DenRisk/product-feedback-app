import './suggestion-items.scss'
import SuggestionItem from "../../../../components/suggestion-item/sugesstion-item.jsx";

export default function SuggestionItems({sortedData}) {
    return (
        <div className='suggestions-items'>
            {sortedData &&
                sortedData.map((item) => (
                    <SuggestionItem
                        key={item.id}
                        category={item.category}
                        commentsCount={item.commentsCount}
                        description={item.description}
                        title={item.title}
                        upvotes={item.upvotes ?? 0}
                    />
                ))}
        </div>
    )
}