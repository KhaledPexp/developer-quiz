import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import "./Header.css"
import { ToastContainer } from "react-toastify";

const Header = () => {
    const [collapseValue, setCollapse] = useState(false);
    const collapse = () => {
        if(collapseValue === false){
            setCollapse(true);
        }
        else{
            setCollapse(false);
        }
        
    }

    return(
        <div className="w-100 bg-amber-300 h-16 mb-32 flex justify-between items-center">
           
                <nav>
                    <NavLink className='ml-20 text-2xl'>
                        ¡Oh My Quiz¡
                    </NavLink>
                </nav>
                <nav className=" mr-20 max-md:hidden">
                    <NavLink className='m-5 text-gray-700 font-medium link' to='/home' >Ouiz</NavLink>
                    <NavLink className='m-5 text-gray-700 font-medium link' to='/quizStatistics'>Quiz Statistics</NavLink>
                    <NavLink className='m-5 text-gray-700 font-medium link' to='/about'>About Us</NavLink>
                  
                </nav>
                <nav className={collapseValue? 'absolute w-full top-16 justify-center flex bg-amber-300 animator md:hidden': 'hidden'}>
                    <ul className="text-left bg-amber-300 py-2 w-full ms-14">
                        <li className="mb-2"><NavLink className='m-5 text-gray-700 font-medium ' to='/home' >Ouiz</NavLink></li>
                        <li className="mb-2"><NavLink className='m-5 text-gray-700 font-medium ' to='/quizStatistics'>Quiz Statistics</NavLink></li>
                        <li><NavLink className='m-5 text-gray-700 font-medium ' to='/about'>About Us</NavLink></li>
                    </ul>
                  
                </nav>
                <div onClick={collapse} className="hidden max-md:block mr-10">
                    {collapseValue?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg> :  
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"         className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg> 
                  
                    }

                </div>
        </div>
    );
};

export default Header;