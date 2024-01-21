import GenericButton from "../generic-button/generic-button.jsx";
import PlusIcon from "../../../assets/icons/icon-plus.svg";

export function AddButton() {
    return (
        <GenericButton type={'PURPLE'}>
            <img src={PlusIcon} alt='plus'/>
            <span>Add Feedback</span>
        </GenericButton>
    )
}