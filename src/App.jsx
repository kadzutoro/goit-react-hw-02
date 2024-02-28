import { useState,useEffect } from 'react'
import './App.css'
import Description from './components/description/description'
import Options from './components/options/options'
import Feedback from './components/feedback/feedback'

function App() {
  const initialFeedbackState = { good: 0, neutral: 0, bad: 0 };
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : initialFeedbackState;
  });
  const [initialFeedback, setInitialFeedback] = useState(initialFeedbackState); // Доданий стан для зберігання початкового стану

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  // Встановлення початкового стану при першій ініціалізації компонента
  useEffect(() => {
    setInitialFeedback(feedback);
  }, [feedback]);

  const addFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1
    });
  }

  const resetFeedback = () => {
    setFeedback(initialFeedback); // Скидання зворотного зв'язку до початкового стану
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100);

  return (
    <>
      <Description/>
      <Options 
        onClick={addFeedback}
        onReset={resetFeedback} // Доданий обробник подій для скидання зворотного зв'язку
      />
      {totalFeedback === 0 ? <div>No feedback yet</div> :
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          totalPositive={positive}
        />}
    </>
  );
}

export default App;