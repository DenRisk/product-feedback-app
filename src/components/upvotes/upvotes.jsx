import { useState } from 'react';
import './upvotes.scss'
import ArrowUpBlue from '../../assets/icons/icon-arrow-up.svg'
import ArrowUpWhite from '../../assets/icons/icon-arrow-up-white.svg'


export default function Upvotes({count}) {
    const [isActive, setIsActive] = useState(false);

    const handleMouseDown = () => {
        setIsActive(true);
      };
    
      const handleMouseUp = () => {
        setIsActive(false);
      };

    return (
        <button className={`upvotes ${isActive ? 'active' : ''}`} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            <img src={isActive ? ArrowUpWhite : ArrowUpBlue} alt='arrow'/>
            <div className='upvotes__count'>{count}</div>
        </button>
    )
}