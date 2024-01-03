import './suggestion-item.scss'
import CommentsIcon from '../../assets/icons/icon-comments.svg'
import Tag from '../tag/tag'
import Upvotes from '../upvotes/upvotes'

export default function SuggestionItem({
  upvotes,
  title,
  description,
  category,
  commentsCount,
}) {
  return (
    <div>
      <div className='suggestions-item'>
        <div className='suggestions-item__upvotes'>
          <Upvotes count={upvotes} />
        </div>
        <div className='suggestions-item__text'>
          <h3 className='suggestions-item__title'>{title}</h3>
          <div className='suggestions-item__description'>{description}</div>
        </div>
        <div className='suggestions-item__category'>
          <Tag category={category} name={category} readonly={true}></Tag>
        </div>
        <div className='suggestions-item__comments'>
          <img src={CommentsIcon} alt='comments' />
          <div className='suggestions-item__comments-count'>
            {commentsCount}
          </div>
        </div>
      </div>
    </div>
  )
}
