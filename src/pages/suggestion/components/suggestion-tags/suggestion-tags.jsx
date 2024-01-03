import Tag from "../../../../components/tag/tag.jsx";
import './suggestion-tags.scss'

export default function SuggestionTags({ selectedCategories, onHandleCategoryChange }) {
    const tags = [
        {
            category: 'all',
            name: 'All',
        },
        {
            category: 'feature',
            name: 'Feature',
        },
        {
            category: 'ui',
            name: 'UI',
        },
        {
            category: 'ux',
            name: 'UX',
        },
        {
            category: 'enhancement',
            name: 'Enhancement',
        },
        {
            category: 'bug',
            name: 'Bug',
        },
    ]

    return (
        <div className='suggestions-tags'>
            {tags.map((tag) => (
                <Tag
                    key={tag.name}
                    category={tag.category}
                    name={tag.name}
                    onHandleCategoryChange={onHandleCategoryChange}
                    active={selectedCategories.includes(tag.category) ?? false}
                />
            ))}
        </div>
    )
}