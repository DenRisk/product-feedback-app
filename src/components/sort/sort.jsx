import { useState, useEffect, useRef } from 'react'
import './sort.scss'
import SelectedIcon from '../../assets/icons/icon-check.svg'
import ArrowUpWhiteIcon from '../../assets/icons/icon-arrow-up-white.svg'
import ArrowDownWhiteIcon from '../../assets/icons/icon-arrow-down-white.svg'

const sortData = [
  {
    code: 'mostupvotes',
    sortBy: 'Most Upvotes',
  },
  {
    code: 'leastupvotes',
    sortBy: 'Least Upvotes',
  },
  {
    code: 'mostcomments',
    sortBy: 'Most Comments',
  },
  {
    code: 'leastcomments',
    sortBy: 'Least Comments',
  },
]

export default function Sort({ sortCode, onSetSortCode }) {
  const [isOpen, setIsOpen] = useState(false)
  const sortListRef = useRef(null)

  const currentSortByLabel = sortData.find(
    (sortItem) => sortItem.code === sortCode
  ).sortBy

  const handleClickOutside = (event) => {
    if (sortListRef.current && !sortListRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  function triggerList() {
    setIsOpen(!isOpen)
  }

  function handleSortValue(id) {
    setIsOpen(false)
    onSetSortCode(id)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='sort' ref={sortListRef}>
      <button className='sort-trigger' onClick={() => triggerList()}>
        <div className='sort-trigger__content'>
          <div>
            Sort by :{' '}
            <span className='sort-trigger--bold'>{currentSortByLabel}</span>
          </div>
          <img
            src={isOpen ? ArrowUpWhiteIcon : ArrowDownWhiteIcon}
            alt='arrow'
          ></img>
        </div>
      </button>
      {isOpen && (
        <ul className='sort-list'>
          {sortData.map((sortItem) => (
            <li
              key={sortItem.code}
              onClick={() => handleSortValue(sortItem.code)}
            >
              <span>{sortItem.sortBy}</span>
              {sortCode === sortItem.code && (
                <img src={SelectedIcon} alt='check' />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
