import { useState, useEffect, useRef } from 'react'
import styles from './suggestion-sort.module.scss'
import SelectedIcon from '../../../assets/icons/icon-check.svg'
import ArrowUpWhiteIcon from '../../../assets/icons/icon-arrow-up-white.svg'
import ArrowDownWhiteIcon from '../../../assets/icons/icon-arrow-down-white.svg'
import {useDispatch, useSelector} from "react-redux";
import {changeSortCode} from "../../../store/sortSlice.js";


export default function SuggestionSort() {
  const [isOpen, setIsOpen] = useState(false)
  const sortListRef = useRef(null)
  const dispatch = useDispatch()
  const {initialSortCodes, selectedSortCode} = useSelector((state) => state.sort)

  const currentSortByLabel = initialSortCodes.find(
    (sortItem) => sortItem.code === selectedSortCode
  ).label

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
    dispatch(changeSortCode(id))
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.sort} ref={sortListRef}>
      <button className={styles.trigger} onClick={() => triggerList()}>
        <div className={styles.triggerContent}>
          <div>
            Sort by :{' '}
            <span className={styles.bold}>{currentSortByLabel}</span>
          </div>
          <img
            src={isOpen ? ArrowUpWhiteIcon : ArrowDownWhiteIcon}
            alt='arrow'
          ></img>
        </div>
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {initialSortCodes.map((sortItem) => (
            <li
              key={sortItem.code}
              onClick={() => handleSortValue(sortItem.code)}
            >
              <span>{sortItem.label}</span>
              {selectedSortCode === sortItem.code && (
                <img src={SelectedIcon} alt='check' />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
