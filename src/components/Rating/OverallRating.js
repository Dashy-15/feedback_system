import "./OverallRating.css"

const OverallRating = (props) => {
    const ratingCounts = [0,0,0,0,0]
    props.feedbacks.forEach((fb) => {
        ratingCounts[fb.rating-1]++;
    });
    return (
        <div className="overall-rating">
            <h2>Overall Ratings</h2>
            {ratingCounts.map((count, index) => {
                return (
                    <div className="rating-bar" key={index}>
                        {Array(index+1).fill("*").join("")} {count}   
                    </div>
                );
            })}
        </div>
    )
}

export default OverallRating;