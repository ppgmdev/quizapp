import { useContext, useRef, useState } from 'react';
import { QuizContext } from '../store/quiz-context.jsx';
import { Radio, RadioGroupField, Button } from '@aws-amplify/ui-react';

export default function CurrentGame() {

    const myRef = useRef();

    const { quizzes, currentQuiz } = useContext(QuizContext)

    const [showScore, setShowScore] = useState(false)
    const [totalCorrect, setTotalCorrect] = useState(0);

    console.log(quizzes)

    let quiz;
    let questionsArray;

    if (currentQuiz !== '') {
        quiz = quizzes.find((quiz) => quiz.id === currentQuiz)
        questionsArray = quiz.questions;
        console.log(questionsArray.length)
    }

    function handleAnswerClick(isCorrect) {
        if(isCorrect){
            setTotalCorrect((prev) => prev + 1)
        }
    }

    function handleSubmit() {
        setShowScore(true);
        console.log(`totalCorrect: ${totalCorrect}`);
        console.log(`questions array: ${questionsArray.length}`)
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
                    <Button onClick={handleSubmit} className='button'>Submit!</Button>
                    {showScore ? <p>{`Your score is ${totalCorrect*100/questionsArray.length}`}</p> : undefined}
                </div>

                : <p>No current quiz!!</p>}
        </>
    )
}