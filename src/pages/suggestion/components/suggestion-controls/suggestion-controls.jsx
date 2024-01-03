import Sort from "../../../../components/sort/sort.jsx";
import Button from "../../../../components/button/button.jsx";
import PlusIcon from "../../../../assets/icons/icon-plus.svg";
import './suggestions-controls.scss'

const suggestionControlsLocalisation = {
    title: 'Suggestions',
    add: 'Add Feedback',
}
export default function SuggestionControls({filteredData, sortCode, onSetSortCode}) {
    return (
        <div className='suggestions-controls'>
            <h3 className='suggestions-controls__label'>
                <span>{filteredData?.length ?? 0}</span>{' '}
                {suggestionControlsLocalisation.title}
            </h3>
            <Sort sortCode={sortCode} onSetSortCode={onSetSortCode}/>
            <Button type={'PURPLE'}>
                <img src={PlusIcon} alt='plus'/>
                <span>{suggestionControlsLocalisation.add}</span>
            </Button>
        </div>
    )
}