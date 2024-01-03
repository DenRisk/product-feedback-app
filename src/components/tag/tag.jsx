import './tag.scss'

export default function Tag({
  category,
  name,
  onHandleCategoryChange,
  active = false,
  readonly = false,
}) {
  return (
    <button
      className={`tag 
      ${active ? 'tag--active' : ''} 
      ${readonly ? '' : 'tag--hover'}`}
      onClick={() => (readonly ? '' : onHandleCategoryChange(category))}
    >
      <span>{name}</span>
    </button>
  )
}
