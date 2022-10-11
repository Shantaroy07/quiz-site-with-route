import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className='md:flex justify-between p-5 bg-purple-100'>
            <h4 className='text-2xl font-bold text-purple-900 mb-7 md:mb-auto '>Programming Language Quiz</h4>

            <div >

                <Link to='/' className='m-1  text-orange-900 text-xl font-semibold'>Topics</Link>
                <Link to='/statistics' className='m-1  text-orange-900 text-xl font-semibold'>Statistics</Link>
                <Link to='/blog' className='m-1  text-orange-900 text-xl font-semibold'>Blog</Link>

            </div>
        </div>
    );
};

export default Navbar;