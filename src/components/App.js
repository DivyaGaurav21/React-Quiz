import React, { useReducer } from 'react'

import Header from './staticcomponent/Header'
import Main from './Main'
import StartScreen from './StartScreen'
import Question from './Question'
import NextButton from './NextButton'
import Progress from './Progress'
import FinishScreen from './FinishScreen'
import Footer from './staticcomponent/Footer'
import Timer from './Timer'
import QuizUi from './staticcomponent/QuizUi'

// status :''initial' , 'errror' , 'ready' , 'active' , 'finished'
const initialState = {
  questions: [],
  status: 'initial',
  index: 0,
  answer: null,
  points: 0,
  secondsRemaining: null,
  subject: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataRecieved':
      let course = (subArr) => {
        if (subArr[0].question.includes("What is the purpose")) {
          return "JavaScript"
        } else {
          return "react"
        }
      }
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
        subject: course(action.payload)
      }
    case 'dataFailed':
      return {
        ...state,
        status: 'error'
      }
    case 'start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length * 40
      }
    case 'newAnswer':
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points
      }
    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null
      }
    case 'finish':
      return {
        ...state,
        status: 'finished',
        answer: null
      }
    case 'restart':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready'
      }
      case 'ticktime':
        return {
          ...state,
          secondsRemaining: state.secondsRemaining - 1,
          status : state.secondsRemaining === 0 ? 'finished' : state.status
        }
    default:
      throw new Error("Action Unknown");
  }
}

const App = () => {


  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, questions, index, answer, points, secondsRemaining, subject } = state;

  const numOfQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, curr) => prev + curr.points, 0);




  return (
    <div className='flex flex-col items-center justify-center'>
      <Header />
      <Main>
        {status === 'initial' && <QuizUi dispatch={dispatch} />}
        {status === 'ready' && <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} subject={subject} />}
        {status === 'active' && (
            <>
              <Progress index={index} numOfQuestions={numOfQuestions} points={points} maxPossiblePoints={maxPossiblePoints} />
              <Question question={questions[index]} dispatch={dispatch} answer={answer} />
            <Footer>
             <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/>
            <NextButton dispatch={dispatch} answer={answer} index={index} numOfQuestions={numOfQuestions} />
            </Footer>
            </>
          )}
        {status === 'finished' &&
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            dispatch={dispatch}
          />}
      </Main>
    </div>
  )
}

export default App
