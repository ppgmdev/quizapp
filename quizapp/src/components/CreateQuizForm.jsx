import { useState, useRef, useContext } from 'react';
import { Fieldset, Flex, Input, Label, Button } from '@aws-amplify/ui-react';

import CreateQuizOptions from './CreateQuizOptions';
import { QuizContext } from '../store/quiz-context.jsx';

export default function CreateQuizForm() {

    const {quizzes, addQuestionToQuiz} = useContext(QuizContext)

    const refQuizName = useRef();
    const refQuestion = useRef();
    const refOption1 = useRef();
    const refOption2 = useRef();
    const refOption3 = useRef();
    const refOption4 = useRef();

    const ref = {refQuestion, refOption1, refOption2, refOption3, refOption4}

    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [quizID, setQuizID] = useState(1);

    function handleNextQuestion() {
        setCurrentQuestion((prevNumber) => prevNumber + 1)
        const title = refQuizName.current.value;
        const payload = {
            id: currentQuestion,
            question: refQuestion.current.value,
            answers: [
                {id: 1, answer: refOption1.current.value, isCorrect: false},
                {id: 2, answer: refOption2.current.value, isCorrect: false},
                {id: 3, answer: refOption3.current.value, isCorrect: false},
                {id: 4, answer: refOption4.current.value, isCorrect: false},
            ]
        }
        addQuestionToQuiz(quizID, title, payload)
        //quizzes.map((quiz) => console.log(quiz))
    }

    function handlePrevQuestion() {
        if (currentQuestion === 1) return;
        setCurrentQuestion((prevNumber) => prevNumber - 1)
    }

    function handleReady() {
        setQuizID((prevState) => prevState + 1)
        const title = refQuizName.current.value;
        const payload = {
            id: currentQuestion,
            question: refQuestion.current.value,
            answers: [
                {id: 1, answer: refOption1.current.value, isCorrect: false},
                {id: 2, answer: refOption2.current.value, isCorrect: false},
                {id: 3, answer: refOption3.current.value, isCorrect: false},
                {id: 4, answer: refOption4.current.value, isCorrect: false},
            ]
        }
        addQuestionToQuiz(quizID, title, payload)
        setCurrentQuestion(1)
        console.log(quizID)
    }

    return (
        <Fieldset className='quizform' legend="Create your Quiz!">
            <Flex direction="column" gap="small">
                <Label htmlFor="first_name">Quiz name: </Label>
                <Input id="first_name" name="first_name" ref={refQuizName} />
            </Flex>
            <CreateQuizOptions ref={ref} number={currentQuestion}></CreateQuizOptions>
            <Flex>
                <Button onClick={handlePrevQuestion}>Prev question</Button>
                <Button onClick={handleNextQuestion}>Next question</Button>
            </Flex>
            <Button onClick={handleReady}>Ready!</Button>
        </Fieldset>
    )
}