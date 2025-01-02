import FeedbackList from "../FeedbackList/FeedbackList";
import "./FeedbackData.css"

const FeedbackData = (props) => {
    return (
        <div>
            <h2>All Feedbacks</h2>
            {props.feedbacks.map((feedback) => (
                <FeedbackList
                    key={feedback.id}
                    id={feedback.id}
                    name={feedback.name}
                    rating={feedback.rating}
                    onDelete={props.onDeleteItem}
                    onEdit={props.onEditItem}
                />
            ))}
        </div>
    )
};

export default FeedbackData;