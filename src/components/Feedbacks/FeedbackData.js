import FeedbackList from "../FeedbackList/FeedbackList";

const FeedbackData = (props) => {
    return (
        <div>
            <h2>All Feedbacks</h2>
            {props.feedbacks.map((feedback) => (
                <FeedbackList
                    key={feedback.id}
                    name={feedback.name}
                    rating={feedback.rating}
                />
            ))}
        </div>
    )
};

export default FeedbackData;