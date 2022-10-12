import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, id, correctAnswer }) => {

    const notify = () => {
        if (option === correctAnswer) {
            toast('Correct Answer')

        }
        else
            toast('Wrong Answer')


    }

    return (
        <div>
            <div>
                <input onClick={notify} type="radio" value={option} name={id} /> {option}
            </div>

            <ToastContainer />


        </div>
    );
};

export default Option;