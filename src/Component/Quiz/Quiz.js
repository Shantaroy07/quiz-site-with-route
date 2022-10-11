import React from 'react';
import './Quiz.css'

const Quiz = ({ singleQuestion }) => {
    const { question, options } = singleQuestion;



    return (
        <div className='quiz m-3 p-4'>
            <h1 className='text-xl font-semibold'>{question}</h1>
            <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div>
                    <input type="radio" value="option" name={singleQuestion.id} /> {options[0]}
                </div>
                <div>
                    <input type="radio" value="option" name={singleQuestion.id} /> {options[1]}
                </div>
                <div>
                    <input type="radio" value="option" name={singleQuestion.id} /> {options[2]}
                </div>
                <div>
                    <input type="radio" value="option" name={singleQuestion.id} /> {options[3]}
                </div>
            </div>
        </div>
    );
};

export default Quiz;