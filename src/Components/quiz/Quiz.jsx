import React,{ useState, useEffect }from 'react';
import Start from'./Start';
import End from './End'
import './Quiz.scss';
import Question from './Question';
import quizData from '../../data/quiz';
import Modal from './Modal';
let interval;

export default function Quiz () {
  const[ step, setStep] = useState(1);
  const[ activeQuestion, setActiveQuestion] = useState(0);
  const[ answers, setAnswers] = useState([]);
  const[ showModal, setShowModal] = useState(false);
  const[ time, setTime] = useState(0);

  useEffect(() => {
    if(step === 3) {
      clearInterval(interval);
    }
  }, [step])

  const quizStartHandler = () =>{
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval (() => {
      setTime(prevTime => prevTime + 1);
    }, 1000)
  }
  return (
    <div className="quiz">
      {step===1 && <Start onQuizStart={quizStartHandler}/>}
      {step===2 && <Question
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestion={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        />}
      {step === 3 && <End
        results={answers}
        data={quizData.data}
        onReset={resetClickHandler}
        onAnswersCheck={ () => setShowModal(true)}
        time={time}
      />}
      {showModal && <Modal
        onClose={() => setShowModal(false)}
        results={answers}
        data={quizData.data}
      />}
    </div>
  );
}

