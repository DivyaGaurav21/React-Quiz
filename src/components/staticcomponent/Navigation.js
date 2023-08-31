import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='bg-zinc-900 flex justify-between items-center w-[100%] min-h-[80px] px-6 mb-4'>
            <div className='text-white text-5xl font-bold cursor-pointer'>
                💻<i>Learn-Dev</i>🔯
            </div>
            <ul className='flex space-x-6 text-white text-2xl'>
                <Link to='home'> <li className='btn'>Quiz</li></Link>
                <Link to='react'> <li className='btn'>React</li></Link>
                <Link to='js'> <li className='btn'>JavaScript</li></Link>
                <Link to='login'> <li className='btn'>LogIn</li></Link>
                <Link to='signup'> <li className='btn'>SignUp</li></Link>
            </ul>
        </div>
    );
};

export default Navigation;
