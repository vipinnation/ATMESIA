import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className='select-none '>
            <header className="lg:px-16 px-6 bg-navbar flex flex-wrap items-center lg:py-0 py-2">
                <div className="flex-1 flex justify-between items-center">
                    <NavLink exact to="/">
                        <span className="text-xl font-bold">ATMESIA</span>
                    </NavLink>
                </div>

                <label for="menu-toggle" className="pointer-cursor lg:hidden block"><svg className="fill-current text-gray-900" onClick={e => setToggle(!toggle)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
                <input className="hidden" type="checkbox" id="menu-toggle" />

                <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                    <nav>
                        <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                            <li>
                                <NavLink className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 bg-text-primary" exact to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 bg-text-primary" exact to="/courses">Courses</NavLink>
                            </li>
                            <li>
                                <NavLink className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 bg-text-primary" exact to="#">About Us</NavLink>
                            </li>
                            <li>
                                <NavLink className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2 bg-text-primary" exact to="/profile">Profile</NavLink>
                            </li>
                        </ul>
                    </nav>


                </div>
                {
                    (toggle) ? (<div className="flex-grow delay-75 lg:flex lg:items-center lg:w-auto w-full" id="menu">
                        <nav>
                            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                                <li>
                                    <NavLink className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" exact to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" exact to="/courses">Courses</NavLink>
                                </li>
                                <li>
                                    <NavLink className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" exact to="#">About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2" exact to="/profile">Profile</NavLink>
                                </li> </ul>
                        </nav>


                    </div>) : null
                }

            </header>

        </div>
    )
}

export default Navbar
