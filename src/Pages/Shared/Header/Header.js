import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="p-4 text-gray-800">
            <div className="container flex justify-between h-16 text-white">
                <h1 className='flex items-center text-2xl font-mono font-bold mr-10'>
                    <Link to='/'><button>S H U T T E R</button></Link>
                </h1>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <a href="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">HOME</a>
                    </li>
                    <li className="flex">
                        <a href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
                    </li>
                    <li className="flex">
                        <a href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
                    </li>
                    <li className="flex">
                        <a href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
                    </li>
                </ul>
                <div className="mr-2 flex-shrink-0 hidden lg:flex">
                    <button className="self-center px-8 py-3 rounded">Sign in</button>
                    <button className="self-center px-8 py-3 font-semibold rounded bg-teal-600 text-gray-50">Sign up</button>
                </div>
                <div className="dropdown">
                    <button className="p-10 lg:hidden mr-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <ul className="menu menu-compact dropdown-content mt-3 shadow bg-base-600 rounded-box items-center">
                        <li><a>Item 1</a></li>

                        <li><a>Item 3</a></li>
                        <div className='text-center'>
                            <button className="px-6 py-3 rounded">Sign in</button>
                            <button className=" px-6 py-3 font-semibold rounded bg-teal-600 text-gray-50">Sign up</button>
                        </div>
                    </ul>

                </div>
            </div>
        </header>
    );
};

export default Header;