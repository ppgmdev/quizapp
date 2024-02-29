import { useState, useContext } from 'react';

import { Card } from '@aws-amplify/ui-react';
import { quizzes } from '../../quizObjectExample.js';
import { QuizContext } from '../store/quiz-context.jsx';

export default function MyQuizzes() {

    const {quizzes} = useContext(QuizContext)

    return (
        <>
            {quizzes.map((quiz) => {
                return <Card className='card-quiz' id={quiz.id} variation="elevated" key={quiz.id}>{quiz.title}</Card>
            })}
        </> 
    )
}
