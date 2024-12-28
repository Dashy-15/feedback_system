const FeedbackList = (props) => {
    return (
        <div>
            <div>
                <div>{props.name}</div>
                <div>{props.rating}</div>
            </div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default FeedbackList;