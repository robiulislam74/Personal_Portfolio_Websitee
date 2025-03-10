import React from 'react'
import { NavLink } from 'react-router-dom'
// Home
// Features
// Portfolio
// Resume
// Clients
// Pricing
// blog
// Contact

const Navbar = () => {
    const navItems = <div className='text-gray-400 uppercase  font-normal flex gap-8'>
        <NavLink>
            <li className="hover:text-gray-200 hover:font-semibold duration-100">Home</li>
        </NavLink>
        <NavLink>
            <li className="hover:text-gray-200 hover:font-semibold duration-100">Features</li>
        </NavLink>
        <NavLink to={'/about'}>
            <li className="hover:text-gray-200 hover:font-semibold duration-100">About Me</li>
        </NavLink>
        <NavLink>
            <li className="hover:text-gray-200 hover:font-semibold duration-100">Clients</li>
        </NavLink>
        <NavLink>
            <li className="hover:text-gray-200 hover:font-semibold duration-100">Pricing</li>
        </NavLink>
        <NavLink>
            <li className="hover:text-gray-200 hover:font-semibold duration-100">Contact</li>
        </NavLink>
    </div>

    return (
        <div className="navbar py-10 max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <div className='flex items-center gap-3'>
                <div className="avatar">
                    <div className="w-12 rounded-full border-2 border-gray-500">
                        <img src="https://i.ibb.co.com/N2Rqfg8b/Fronend-Developer1.jpg" />
                    </div>
                </div>
                <span className='text-gray-400 font-russoOne text-xl font-bold'>ROBIUL</span>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-center mr-8 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <NavLink to={"https://drive.google.com/file/d/1UtRBErGwje52vHGCs-pWCRY6_DB1h5dB/view?usp=sharing"} target='_blank' className="bg-primaryColor uppercase btn border-none hover:bg-gray-900 hover:shadow-none hover:translate-y-2 duration-300 py-4 px-6 text-pinkRed rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-950">
                <button >CV Download</button>
                </NavLink>
                {/* <NavLink to={"https://drive.google.com/file/d/1UtRBErGwje52vHGCs-pWCRY6_DB1h5dB/view?usp=sharing"} target='_blank' className="bg-primaryColor uppercase btn border-none hover:bg-gray-900 hover:shadow-none hover:translate-y-2 duration-300 py-4 px-6 text-primaryRed rounded-lg shadow-lg shadow-gray-950 flex justify-center items-center">
                <button >CV Download</button>
                </NavLink> */}
            </div>
        </div>
    )
}
{/* <button className="bg-primaryColor py-3 text-primaryRed rounded-lg shadow-xl shadow-gray-950 flex justify-center items-center">CV Download</button> */ }
export default Navbar