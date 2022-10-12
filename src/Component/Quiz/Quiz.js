import React from 'react';
import Option from '../Option/Option';
import './Quiz.css';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ singleQuestion }) => {
    const { id, question, options, correctAnswer } = singleQuestion;

    const notify = () => toast(correctAnswer);


    return (
        <div className='quiz m-3 p-4'>
            <h1 className='text-xl font-semibold relative'>{question} <EyeIcon onClick={notify} className="h-6 w-6 text-black-500 absolute right-0 top-0" /> <ToastContainer /></h1>


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