import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import QuestionTimer from './QuestionTimer.jsx';
import quizCompletedImg from '../assets/quiz-complete.png';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsCompleted) {
        return (
            <div id="summary">
                <img src={quizCompletedImg} alt="Trophy icon" />
                <h2>Quiz Completed!</h2>
            </div>
        )
    }

    const shuffledAnswers = QUESTIONS[activeQuestionIndex].answers.sort(() => Math.random() - 0.5);
    return (
        <section id='quiz'>
            <div id='question'>
                <QuestionTimer timeout={15000} onTimeout={handleSkipAnswer} key={activeQuestionIndex}/>
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {shuffledAnswers.map((answer, index) => (
                        <li key={index} className='answer'>
                            <button onClick={() => handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}