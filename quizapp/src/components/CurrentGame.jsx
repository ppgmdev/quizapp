import { useContext } from 'react';
import { QuizContext } from '../store/quiz-context.jsx';

export default function CurrentGame() {

    const { quizzes, currentQuiz } = useContext(QuizContext)

    console.log(quizzes)

    let quiz;
    let questionsArray;

    if (currentQuiz !== '') {
        quiz = quizzes.find((quiz) => quiz.id === currentQuiz)
        questionsArray = quiz.questions;
    }

    return (
        <>
            {currentQuiz !== '' ?
                <div>
                    <h1>{quiz.title}</h1>
                    {questionsArray.map((q) => {
                        return(<>
                        <h3>{q.question}</h3>
                        {q.answers.map((a) =><p>{a.answer}</p>)}
                        </>)
                    })}
                </div>

                : <p>No current quiz!!</p>}
        </>
    )
}