import { useContext } from 'react';
import { QuizContext } from '../store/quiz-context.jsx';
import { Radio, RadioGroupField, Button } from '@aws-amplify/ui-react';

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
                        <RadioGroupField name={`Answers ${q.id}`}>
                        {q.answers.map((a) =><Radio display='flex'>{`${a.answer} is correct? ${a.isCorrect}`}</Radio>)}
                        </RadioGroupField>
                        </>)
                    })}
                    <Button className='button'>Submit!</Button>
                </div>

                : <p>No current quiz!!</p>}
        </>
    )
}