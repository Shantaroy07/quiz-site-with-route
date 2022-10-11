import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const data = useLoaderData();
    const questions = data.data.questions;


    return (
        <div>
            {
                questions.map(question => <Quiz
                    key={question.id}
                    singleQuestion={question}
                ></Quiz>)
            }
        </div>
    );
};

export default Quizzes;