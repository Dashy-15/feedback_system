import React, {useState} from 'react';
import './App.css';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import FeedbackData from './components/Feedbacks/FeedbackData';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const reviewDataHandller = (reviews) => {
    setFeedbacks((prevReviews) => {
      return [...prevReviews, reviews];
    });
  }

  return (
    <div>
      <FeedbackForm onReviewData={reviewDataHandller}/>
      <FeedbackData feedbacks={feedbacks} />
    </div>
  );
}

export default App;
