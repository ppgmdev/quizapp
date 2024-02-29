import { createContext, useReducer } from "react";
import { quizzes } from '../../quizObjectExample.js';

export const QuizContext = createContext({
    quizzes: [],
    addQuestionToQuiz: () => { },
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

    return state;
}

export default function QuizContextProvider({ children }) {
    const [quizState, quizDispatch] = useReducer(quizReducer,
        {
            quizzes: [],
        })

    function handleAddQuestion(id, title, payload) {
        quizDispatch({
            type: 'ADD_QUESTION',
            id: id,
            title: title,
            payload: payload
        })
    }

    const ctxValue = {
        quizzes: quizState.quizzes,
        addQuestionToQuiz: handleAddQuestion,
    }

    return <QuizContext.Provider value={ctxValue}>
        {children}
    </QuizContext.Provider>
}