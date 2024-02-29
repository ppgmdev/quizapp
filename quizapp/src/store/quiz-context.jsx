import { createContext, useReducer } from "react";
import { quizzes } from '../../quizObjectExample.js';

export const QuizContext = createContext({
    quizzes: [],
    currentQuiz: '',
    addQuestionToQuiz: () => { },
    setCurrentQuiz: () => { },
})

function quizReducer(state, action) {
    if (action.type === 'ADD_QUESTION') {
        const updatedQuizzes = [...state.quizzes];

        const existingQuizIndex = updatedQuizzes.findIndex((quiz) => quiz.id === action.id)

        const existingQuiz = updatedQuizzes[existingQuizIndex];

        if (existingQuiz) {
            const updatedQuiz = {
                ...existingQuiz,
                questions: [
                    ...existingQuiz.questions,
                    {
                        id: action.payload.id,
                        question: action.payload.question,
                        answers: action.payload.answers
                    }

                ]
            }

            updatedQuizzes[existingQuizIndex] = updatedQuiz;

        } else {
            updatedQuizzes.push({
                id: action.id,
                title: action.title,
                questions: [
                    {
                        id: action.payload.id,
                        question: action.payload.question,
                        answers: action.payload.answers
                    }

                ]
            })
        }

        return {
            ...state,
            quizzes: updatedQuizzes
        }
    };

    if(action.type === 'SET_CURRENT_QUIZ') {
        return {
            ...state,
            currentQuiz: action.currentQuiz
        }
    }

    return state;
}

export default function QuizContextProvider({ children }) {
    const [quizState, quizDispatch] = useReducer(quizReducer,
        {
            quizzes: [],
            currentQuiz: '',
        })

    function handleAddQuestion(id, title, payload) {
        quizDispatch({
            type: 'ADD_QUESTION',
            id: id,
            title: title,
            payload: payload,
        })
    }

    function handleSetCurrentQuiz(currentQuiz) {
        quizDispatch({
            type: 'SET_CURRENT_QUIZ',
            currentQuiz: currentQuiz,
        })
    }

    const ctxValue = {
        quizzes: quizState.quizzes,
        currentQuiz: quizState.currentQuiz,
        addQuestionToQuiz: handleAddQuestion,
        setCurrentQuiz: handleSetCurrentQuiz
    }

    return <QuizContext.Provider value={ctxValue}>
        {children}
    </QuizContext.Provider>
}