import React from 'react'

const StartScreen = ({ numOfQuestions, dispatch, subject }) => {



  return (

    <div className='skill-sec'>
      <h2>{`Welcome to ${subject} Quiz!`}</h2>
      <h3>{`${numOfQuestions} questions for test your ${subject} skill !`} </h3>
      <button className='btn btn-ui' onClick={() => dispatch({ type: 'start' })}>{`Let's start ${subject}`}</button>
    </div>

  )
}

export default StartScreen