import React from 'react';
import './Language.css'

const Language = ({ language }) => {
    const { id, name, total, logo } = language;
    return (
        <div className='singleLanguage sm:w-full w-3/4 m-3' >
            <img src={logo} alt="" />
            <div className='p-2' >
                <p className='text-lg font-medium'>{name}</p>
                <p>Total Question: {total}</p>
                <button className='bg-orange-600 text-white py-1 px-3 font-medium rounded-md '>Start</button>

            </div>

        </div>
    );
};

export default Language;