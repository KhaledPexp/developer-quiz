import React from 'react';
import { NavLink } from 'react-router-dom';

const Quiz = ({image, name, total,id }) => {
    console.log(id);
    return (
        <div>
            <div className='w-72 h-auto border border-amber-300 rounded'>
                <div>
                <img className='w-80 bg-amber-300 rounded-b' src= {image} alt="" />
                </div>
                <div className='flex justify-between p-5'>
                    <p>{name}</p>
                    <p>Total Quiz: {total} </p>
                </div>
                <div className='mb-4 mx-5'>
                    <NavLink to={ `/quizzes/${id}`}>
                        <button className='w-full btn rounded bg-black text-center text-white py-2 px-5 hover:text-amber-300'> Start Practicing</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Quiz;