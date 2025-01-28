import QuizImage from '../assets/quiz-logo.png';

export default function Header() {
    return (
        <header>
            <img src={QuizImage} alt="Logo of the Quiz App" />
            <h1>ReactQuiz</h1>
        </header>
    )
}