import Menu from './components/Menu.jsx'
import QuizContextProvider from './store/quiz-context.jsx'

function App() {

  return (
    <QuizContextProvider>
      <Menu></Menu>
    </QuizContextProvider>
  )
}

export default App
