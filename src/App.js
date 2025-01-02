import React, {useState} from 'react';
import './App.css';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import FeedbackData from './components/Feedbacks/FeedbackData';
import OverallRating from './components/Rating/OverallRating';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [editingId, setEditingId] = useState(null);


  const reviewDataHandller = (reviews) => {
    if (editingId) {
      setFeedbacks((prevFeedbacks) =>
          prevFeedbacks.map((fb) => (fb.id === reviews.id ? reviews : fb))
      );
      setEditingId(null); // Clear editing mode
    } else {
      setFeedbacks((prevFeedbacks) => [...prevFeedbacks, reviews]);
    }
  }

  const deleteItemHandler = (feedbackId) => {
    setFeedbacks((prevFeedback) => {
      const updatedFeedbackdel = prevFeedback.filter((feedback) => 
        feedback.id !== feedbackId
      );
      return updatedFeedbackdel;
    });
  };


  const editItemHandler = (feedbackId) => {
    const editFbItem = feedbacks.find((fb) => fb.id === feedbackId)
    if(editFbItem) {
      setEditingId(editFbItem);
    }
  };

  return (
    <div className='container'>
      <OverallRating feedbacks={feedbacks} />
      <FeedbackForm editFbItem={editingId} onReviewData={reviewDataHandller} />
      <FeedbackData feedbacks={feedbacks} onEditItem={editItemHandler} onDeleteItem={deleteItemHandler}/>
    </div>
  );
}

export default App;
