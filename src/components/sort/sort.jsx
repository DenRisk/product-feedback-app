import { useState, useEffect, useRef  } from "react"
import './sort.scss'
import SelectedIcon from '../../assets/icons/icon-check.svg'
import ArrowUpWhiteIcon from '../../assets/icons/icon-arrow-up-white.svg'
import ArrowDownWhiteIcon from '../../assets/icons/icon-arrow-down-white.svg'


const sortData = [
    {
        id: 1,
        sortBy: 'Most Upvotes'
    },
    {
        id: 2,
        sortBy: 'Least Upvotes'
    },
    {
        id: 3,
        sortBy: 'Most Comments'
    },
    {
        id: 4,
        sortBy: 'Least Comments'
    }
]

export default function Sort() {
    const [isOpen, setIsOpen] = useState(false)
    const [sortValue, setSortValue] = useState(sortData[0].id)
    const sortListRef = useRef(null);

    const currentSortByLabel = sortData.find(sortItem => sortItem.id === sortValue).sortBy

    const handleClickOutside = (event) => {
        if (sortListRef.current && !sortListRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

    function triggerList() {
        setIsOpen(!isOpen)
    }

    function handleSortValue(id) {
        setIsOpen(false)
        setSortValue(id)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    return (
        <div className="sort" ref={sortListRef}>
            <button className='sort-trigger' onClick={() => triggerList()}>
                <div className="sort-trigger__content">
                    <div>Sort by : <span className="sort-trigger--bold">{currentSortByLabel}</span></div>
                    <img src={isOpen ? ArrowUpWhiteIcon : ArrowDownWhiteIcon} alt="arrow"></img>
                </div>
            </button>
            {isOpen && 
            <ul className="sort-list">
                {
                    sortData.map(sortItem => (
                    <li key={sortItem.id} onClick={() => handleSortValue(sortItem.id)}>
                        <span>{sortItem.sortBy}</span>
                        {sortValue === sortItem.id && <img src={SelectedIcon} alt="check" />}
                    </li>
                    ))
                }
            </ul>
            }
        </div>
    )
}