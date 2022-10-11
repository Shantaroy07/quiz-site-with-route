import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Language from '../Language/Language';
const Topics = () => {
    const topics = useLoaderData();
    const languages = topics.data;

    return (
        <div>
            <Header></Header>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 mt-5 mx-auto'>
                    {
                        languages.map(language => <Language
                            key={language.id}
                            language={language}></Language>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Topics;