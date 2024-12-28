import React, { useState } from "react";

const FeedbackForm = (props) => {
    const [input, setInput] = useState({
        enteredName: "",
        selectedRating: "1"
    });

    const inputNameHandler = (event) => {
        setInput((prevState) => {
            return {
                ...prevState,
                enteredName: event.target.value
            };
        });
    };

    const ratingHandler = (event) => {
        setInput((prevState) => {
            return {
                ...prevState,
                selectedRating: event.target.value
            };
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const reviews = {
            name: input.enteredName,
            rating: input.selectedRating,
            id: Math.random().toString()
        };
        props.onReviewData(reviews);
        setInput({
            enteredName: "",
            selectedRating: "1"
        });
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div>
                <div>
                    <h2>Feedback Form</h2>
                </div>
                <div>
                    <label htmlFor="inputName">Enter Your Name: </label>
                    <input id="inputName" onChange={inputNameHandler} value={input.enteredName} />
                </div>
                <div>
                    <label htmlFor="inputRating">Choose Rating: </label>
                    <select id="inputRating" onChange={ratingHandler} value={input.selectedRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default FeedbackForm;