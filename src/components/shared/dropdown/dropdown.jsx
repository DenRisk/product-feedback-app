import { useState, useRef, useEffect } from 'react'
import styles from './dropdown.module.scss'
import ArrowDownIcon from '../../../assets/icons/icon-arrow-down.svg'
import SelectedIcon from '../../../assets/icons/icon-check.svg'


const dropdownItems = [
    {
        id: 1,
        label: 'Feature'
    },
    {
        id: 2,
        label: 'UI'
    },
    {
        id: 3,
        label: 'UX'
    },
    {
        id: 4,
        label: 'Enhancement'
    },
    {
        id: 5,
        label: 'Bug'
    },
]

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false)
    const [dropDownValue, setDropDownValue] = useState(dropdownItems[0].id)
    const dropDownRef = useRef(null)

    const currentDropDownLabel = dropdownItems.find(dropDownItem => dropDownItem.id === dropDownValue).label

    const handleClickOutside = (event) => {
        if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

    function triggerDropDown() {
        setIsOpen(!isOpen)
    }

    function handleDropdownValue(id) {
        setIsOpen(false)
        setDropDownValue(id)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    return (
        <div className={styles.dropdown} ref={dropDownRef}>
            <button className={styles.trigger} onClick={() => triggerDropDown()}>
                <div className={styles.triggerContent}>
                    <div>{currentDropDownLabel}</div>
                    <img src={ArrowDownIcon} alt="arrow"></img>
                </div>
            </button>
            {isOpen && 
            <ul className={styles.list}>
                {
                    dropdownItems.map(dropdownItem => (
                    <li key={dropdownItem.id} onClick={() => handleDropdownValue(dropdownItem.id)}>
                        <span>{dropdownItem.label}</span>
                        {dropDownValue === dropdownItem.id && <img src={SelectedIcon} alt="check" />}
                    </li>
                    ))
                }
            </ul>
            }
        </div>
    )
}