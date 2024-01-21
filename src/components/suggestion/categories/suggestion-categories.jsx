import styles from './suggestion-categories.module.scss'
import Category from "../../shared/category/category.jsx";
import {useDispatch, useSelector} from "react-redux";
import {resetCategories, addCategory, removeCategory} from "../../../store/filterSlice.js";

export default function SuggestionCategories() {
    const dispatch = useDispatch();
    const {initialCategories, selectedCategories} = useSelector((state) => state.filter);

    function onHandleCategoryChange(category) {
        if (category === 'all' && !selectedCategories.includes('all')) {
            dispatch(resetCategories());
        } else if (category !== 'all') {
            if (!selectedCategories.includes(category)) {
                if (selectedCategories.includes('all')) {
                    dispatch(removeCategory('all'));
                }
                dispatch(addCategory(category));
            } else if (selectedCategories.length > 1) {
                dispatch(removeCategory(category));
            }
        }
    }

    return (
        <div className={styles.suggestionsCategories}>
            {initialCategories.map((tag) => (
                <Category
                    key={tag.name}
                    category={tag.code}
                    name={tag.name}
                    onHandleCategoryChange={onHandleCategoryChange}
                    active={selectedCategories.includes(tag.code)}
                />
            ))}
        </div>
    )
}