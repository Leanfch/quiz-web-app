import { useState, useEffect } from 'react';

export default function QuestionTimer ({ timeout, onTimeout }) {
    const [timeLeft, setTimeLeft] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        }
    }, [onTimeout, timeout]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft((prevTimeLeft) => prevTimeLeft - 100);
        }, 100);
    
        return () => clearInterval(intervalId);
    }, []);

    return (<progress id="question-time" max={timeout} value={timeLeft}/>)
}