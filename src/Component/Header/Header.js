import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header container mx-auto flex flex-col md:flex-row'>
            <img src="https://media.istockphoto.com/photos/innovation-and-new-ideas-lightbulb-concept-with-question-mark-picture-id1348235111?b=1&k=20&m=1348235111&s=170667a&w=0&h=xPxnIB4yuzeNyPmk0c92Xicl9dO4iGfO2qyjp8ZkQB4=" alt="" />
            <div className='text-center p-3'>
                <h1 className='text-2xl font-semibold'>Web Development Quizzes....</h1>
                <p>The internet connects everyone nowadays and web development is a huge part of our society. If you want to be well-known throughout the world then you should probably develop your own website or a web page. Our trivia on web development has questions about every aspect concerning web development nowadays and will test your knowledge on the matter. Can you face all these questions?</p>
            </div>

        </div>
    );
};

export default Header;