import {FeedbackDetailNavigation} from "../../components/detail/detail-navigation/feedback-detail-navigation.jsx";
import GenericButton from "../../components/shared/generic-button/generic-button.jsx";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import SuggestionItem from "../../components/shared/suggestion-item/sugesstion-item.jsx";
import BackIcon from '../../assets/icons/icon-arrow-left-blue.svg'
import styles from './feedback-detail-page.module.scss'
import FeedbackDetailComment from "../../components/detail/detail-comment/feedback-detail-comment.jsx";

export default function FeedbackDetailPage() {
    const {productRequests} = useSelector((state) => state.productRequests);
    const {id} = useParams();
    const navigate = useNavigate();

    const currentProductRequest = productRequests.find((item) => {
        return item?.id === Number(id);
    });

    return <section className={styles.feedbackDetail}>
        <div className={styles.contentContainer}>
            <FeedbackDetailNavigation>
                <GenericButton type={'TRANSPARENT'} onHandleClick={() => navigate(-1)}>
                    <img src={BackIcon} alt='back'/>
                    <span>Back</span>
                </GenericButton>
                <GenericButton type={'BLUE'}>Add Feedback</GenericButton>
            </FeedbackDetailNavigation>

            <SuggestionItem currentProductRequest={currentProductRequest}/>

            <div className={styles.commentsContainer}>
                <h3>4 Comments</h3>
                <FeedbackDetailComment/>

            </div>
        </div>
    </section>
}
