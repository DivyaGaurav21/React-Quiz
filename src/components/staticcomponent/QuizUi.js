import React from 'react'
import useDataFetch from '../useDataFetch'
import Loader from './Loader';
import Error from './Error'

const QuizUi = ({ dispatch }) => {

    const { data: reactData, loading: reactLoading, error: reactError } = useDataFetch(
        'https://my-json-server.typicode.com/DivyaGaurav21/quiz-fake-jsonserver/react'
    );

    const { data: javascriptData, loading: javascriptLoading, error: javascriptError } = useDataFetch(
        'https://my-json-server.typicode.com/DivyaGaurav21/quiz-fake-jsonserver/javascript'
    );

    return (
        <div className='border border-white p-5 flex justify-around rounded-lg '>
            {(reactError || javascriptError) && <Error />}
            {(reactLoading || javascriptLoading) ? <Loader /> : <>
                <button onClick={() => dispatch({ type: 'dataRecieved', payload: reactData })} className='btn'>REACT</button>
                <button onClick={() => dispatch({ type: 'dataRecieved', payload: javascriptData })} className='btn'>JAVASCRIPT</button>
            </>}
        </div>
    )
}

export default QuizUi