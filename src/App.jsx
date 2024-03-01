import { useState,useEffect } from 'react'
import './App.css'
import Description from './components/description/description'
import Options from './components/options/options'
import Feedback from './components/feedback/feedback'
import Notification from './components/Notification/Notification'

function App() {
  const initialFeedbackState = { good: 0, neutral: 0, bad: 0 };
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : initialFeedbackState;
  });
  
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const addFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

  const resetFeedback = () => {
    setFeedback(initialFeedbackState);
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive = totalFeedback === 0 ? 0 : Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100);

  return (
    <>
      <Description/>
      <Options 
  onClick={addFeedback}
  onReset={resetFeedback}
  totalFeedback={totalFeedback}
/>
      {totalFeedback === 0 ? <Notification/> :
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          totalPositive={positive}
        />}
    </>
  );
}

export default App;