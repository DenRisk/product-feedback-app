import Elijah from '../../../assets/users/image-elijah.jpg'
import GenericButton from "../../shared/generic-button/generic-button.jsx";
import styles from './feedback-detail.comment.module.scss'
import TextArea from '../../shared/textarea/textarea.jsx'
import {useState} from "react";
export default function FeedbackDetailComment() {
    const [replyText, setReplyText] = useState('');

    const handleTextareaChange = (event) => {
        setReplyText(event.target.value);
    };

    return (
        <div className={styles.comment}>
            <div className={styles.imageContainer}>
                <img src={Elijah} alt="user"/>
            </div>
            <div className={styles.userContainer}>
                <h3>Elijah Moss</h3>
                <p>@hexagon.bestagon</p>
            </div>
            <p className={styles.commentText}>
                Also, please allow styles to be applied based on system preferences. I would love to be able to browse
                Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it
                currently has.
            </p>
            <div className={styles.replyContainer}>
                <span>Reply</span>
            </div>
            <div className={styles.textareaContainer}>
                <TextArea value={replyText} handleOnChange={handleTextareaChange}/>
            </div>
            <GenericButton type={'PURPLE'}>Post Reply</GenericButton>
        </div>
    )
}
