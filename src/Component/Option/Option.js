import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, id, correctAnswer }) => {
    const answer = correctAnswer;

    return (
        <div>
            <div>
                <input type="radio" value={option} name={id} /> {option}

            </div>

        </div>
    );
};

export default Option;