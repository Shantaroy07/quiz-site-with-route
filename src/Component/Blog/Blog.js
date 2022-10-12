import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div>
                <h1 className='text-xl font-medium'>Q1: What is the purpose of React Router?</h1>
                <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div>
                <h1 className='text-xl font-medium'> Q2: How does context API works?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div>
                <h1 className='text-xl font-medium'>Q3: Explain about usehref().</h1>
                <p> The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router.useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p>
            </div>
        </div>
    );
};

export default Blog;