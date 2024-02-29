import { useState, useContext } from 'react';

import { Card } from '@aws-amplify/ui-react';
import { quizzes } from '../../quizObjectExample.js';
import { QuizContext } from '../store/quiz-context.jsx';

export default function MyQuizzes() {

    const [showQuiz, setShowQuiz] = useState({
        show: false,
        id: '',
        questions: [],
    });

    function handleClick(id) {
        
        const quiz = quizzes.find((quiz) => quiz.id.toString() === id.toString())
        console.log(quiz)
        if(quiz){
            const quizQuestions = quiz.questions
            setShowQuiz(prevState => ({
                ...prevState,
                show: true,
                id: id,
                questions: [
                    quizQuestions
                ]
            }));
        } else{
            console.log('Quiz not found')
        }
        

        console.log(showQuiz)
    }


    return (
        <>
            {quizzes.map((quiz) => {
                return <Card className='card-quiz' id={quiz.id} onClick={() => handleClick(quiz.id)} variation="elevated" key={quiz.id}>{quiz.title}</Card>
            })}

            {showQuiz && showQuiz.questions.map((q) =>{
                return <p key={Math.random()}>{q.question}</p>
            } )}
        </> 
    )
}
