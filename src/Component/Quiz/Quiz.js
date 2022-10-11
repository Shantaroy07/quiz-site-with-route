import React from 'react';
import Option from '../Option/Option';
import './Quiz.css'

const Quiz = ({ singleQuestion }) => {
    const { id, question, options, correctAnswer } = singleQuestion;




    return (
        <div className='quiz m-3 p-4'>
            <h1 className='text-xl font-semibold'>{question}</h1>
            <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>

                {
                    options.map(option => <Option option={option} id={id} correctAnswer={correctAnswer}></Option>)
                }
            </div>
        </div>
    );
};

export default Quiz;