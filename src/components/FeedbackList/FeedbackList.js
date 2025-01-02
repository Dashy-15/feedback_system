import "./FeedbackList.css"

const FeedbackList = (props) => {
    const editHandler = () => {
        props.onEdit(props.id);
    }

    const deleteHandler = () => {
        props.onDelete(props.id);
    }

    return (
        <ul className="feedback-list">
            <li className="feedback-item">
                <div>{props.name}</div>
                <div>{props.rating}</div>
                <button onClick={editHandler}>Edit</button>
                <button onClick={deleteHandler}>Delete</button>
            </li>
        </ul>
    )
}

export default FeedbackList;