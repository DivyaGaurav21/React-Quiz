import React, { useEffect, useReducer } from 'react'

import Header from './staticcomponent/Header'
import Main from './Main'
import Loader from './staticcomponent/Loader'
import Error from './staticcomponent/Error'
import StartScreen from './StartScreen'
import Question from './Question'
import NextButton from './NextButton'
import Progress from './Progress'
import FinishScreen from './FinishScreen'
import Footer from './staticcomponent/Footer'
import Timer from './Timer'

// status : 'loading' , 'errror' , 'ready' , 'active' , 'finished'
const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  secondsRemaining : null
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataRecieved':
      return {
        ...state,
        questions: action.payload,
        status: 'ready'
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
  const { status, questions, index, answer, points , secondsRemaining } = state;

  const numOfQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, curr) => prev + curr.points, 0);

  useEffect(() => {
    fetch("https://fakequizapi.onrender.com/questions")
      .then(res => res.json())
      .then(data => dispatch({ type: 'dataRecieved', payload: data }))
      .catch(err => dispatch({ type: 'dataFailed' }))
  }, [])

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />}
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
