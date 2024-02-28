import { useState,useEffect } from 'react'
import './App.css'
import Description from './components/description/description'
import Options from './components/options/options'
import Feedback from './components/feedback/feedback'

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return !savedFeedback
      ? { good: 0, neutral: 0, bad: 0 }
      : JSON.parse(savedFeedback);
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const addFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1
    });
  }

 const totalFeedback = feedback.good + feedback.neutral + feedback.bad
 const positive = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)
 
  return (
    <>
      <Description/>
      <Options 
      onClick={addFeedback}
      />
      {totalFeedback === 0?<div>No feedback yet</div>:
      <Feedback
      feedback={feedback}
      total= {totalFeedback}
      totalPositive = {positive}
      /> }
    </>
  );
}

export default App;
