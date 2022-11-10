import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.error(err))
    }
    return (
        <header className="p-4 text-gray-800">
            <div className="container flex justify-between h-16 text-white">
                <h1 className='flex items-center text-2xl font-mono font-extrabold mx-10'>
                    <Link to='/'><button>S H U T T E R</button></Link>
                </h1>
                <ul className="items-stretch hidden space-x-3 lg:flex font-semibold">
                    <li className="flex">
                        <a href="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">HOME</a>
                    </li>
                    <li className="flex">
                        <a href="/services" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">SERVICES</a>
                    </li>
                    {
                        user?.email ?
                            <>
                                <li className="flex">
                                    <a href="/myreviews" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">MY REVIEWS</a>
                                </li>
                                <li className="flex">
                                    <a href="/addservice" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">ADD SERVICE</a>
                                </li>
                            </>
                            :
                            <></>
                    }

                </ul>
                <div className="mr-2 flex-shrink-0 hidden lg:flex mt-2">
                    {
                        user?.email ?
                            <Link><button onClick={handleLogOut} className="self-center px-8 py-3 font-semibold rounded bg-teal-600 text-gray-50">SIGN OUT</button></Link>
                            :
                            <>
                                <Link to='/login'><button className="self-center px-8 py-3 rounded font-semibold btn-ghost">LOGIN</button></Link>
                                <Link to='/signup'><button className="self-center px-8 py-3 font-semibold rounded bg-teal-600 text-gray-50">SIGN UP</button></Link>
                            </>
                    }
                </div>
                <div className="dropdown">
                    <button className="p-10 lg:hidden mr-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <ul className="menu menu-compact dropdown-content mt-3 shadow bg-base-600 rounded-box items-center lg:hidden">
                        <li><Link to='/services'>SERVICES</Link></li>
                        {
                            user?.email ?
                                <>
                                    <li className="flex">
                                        <a href="/myreviews" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">MY REVIEWS</a>
                                    </li>
                                    <li className="flex">
                                        <a href="/addservice" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">ADD SERVICE</a>
                                    </li>
                                </>
                                :
                                <></>
                        }
                        <div className='text-center'>
                            {
                                user?.email ?
                                    <Link><button onClick={handleLogOut} className="self-center px-8 py-3 font-semibold rounded bg-teal-600 text-gray-50">SIGN OUT</button></Link>
                                    :
                                    <>
                                        <Link to='/login'><button className="self-center px-8 py-3 rounded font-semibold btn-ghost">LOGIN</button></Link>
                                        <Link to='/signup'><button className="self-center px-8 py-3 font-semibold rounded bg-teal-600 text-gray-50">SIGN UP</button></Link>
                                    </>
                            }
                        </div>
                    </ul>

                </div>
            </div>
        </header>
    );
};

export default Header;