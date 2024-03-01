import { useContext, useRef } from 'react';
import { QuizContext } from '../store/quiz-context.jsx';
import { Radio, RadioGroupField, Button } from '@aws-amplify/ui-react';

export default function CurrentGame() {

    const myRef = useRef();

    const { quizzes, currentQuiz } = useContext(QuizContext)

    console.log(quizzes)

    let quiz;
    let questionsArray;
    let totalCorrect = 0;

    if (currentQuiz !== '') {
        quiz = quizzes.find((quiz) => quiz.id === currentQuiz)
        questionsArray = quiz.questions;
        console.log(questionsArray.length)
    }

    function handleAnswerClick(isCorrect) {
        if(isCorrect){
            totalCorrect = totalCorrect + 1
        }
    }

    return (
        <>
            {currentQuiz !== '' ?
                <div>
                    <h1>{quiz.title}</h1>
                    {questionsArray.map((q) => {
                        return(<>
                        <h3>{q.question}</h3>
                        <RadioGroupField ref={myRef} name={`Answers ${q.id}`}>
                        {q.answers.map((a) =><Radio onClick={() => handleAnswerClick(a.isCorrect)} display='flex'>{`${a.answer} is correct? ${a.isCorrect}`}</Radio>)}
                        </RadioGroupField>
                        </>)
                    })}
                    <Button onClick={() => console.log(totalCorrect)} className='button'>Submit!</Button>
                </div>

                : <p>No current quiz!!</p>}
        </>
    )
}