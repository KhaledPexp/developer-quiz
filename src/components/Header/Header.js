import React from "react";
import {  NavLink } from "react-router-dom";
import "./Header.css"
import { ToastContainer } from "react-toastify";

const Header = () => {

    return(
        <div className="w-100 bg-amber-300 h-16 mb-5 flex justify-between items-center">
           
                <nav>
                    <NavLink className='ml-20 text-2xl'>
                        ¡Oh My Quiz¡
                    </NavLink>
                </nav>
                <nav className=" mr-20">
                    <NavLink className='m-5 text-gray-700 font-medium link' to='/home' >Ouiz</NavLink>
                    <NavLink className='m-5 text-gray-700 font-medium link' to='/quizStatistics'>Quiz Statistics</NavLink>
                    <NavLink className='m-5 text-gray-700 font-medium link' to='/about'>About Us</NavLink>
                  
                </nav>
        </div>
    );
};

export default Header;