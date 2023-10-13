import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='my-20'>
            <div className=' md:max-xl:px-5 max-md: px-10'>
                <p className='mt-5'>¡OH MY QUIZ¡</p>
                <h1 className='text-2xl font-bold my-5'>We Build Quiz App and Design <br />Website</h1>
                <p>We are team of 15 people who are passionate about quiz and frontend <br /> website building. We are building useful internet products.</p>
            </div>
            <div className='mt-14 flex mx-auto w-3/4 items-center justify-between md:max-xl:grid grid-cols-2 gap-10 justify-items-center max-md:flex-col mb-5! mx-auto!'>
                <img className='w-60 h-60 rounded max-md: mb-5' src="/Images/student-1.jpg" alt="" />
                <img className='w-60 h-60 rounded max-md: mb-5'  src="/Images/student-2.jpg" alt="" />
                <img className='w-60 h-60 rounded max-md: mb-5' src="/Images/student-3.jpg" alt="" />
                <img className='w-60 h-60 rounded max-md: mb-5' src="/Images/student-4.jpg" alt="" />
            </div>
            <div className='my-28 text-white pl-5'>
                <Link className='bg-black rounded mr-5 p-4 hover:bg-gray-600' to='/home'> Play Quiz</Link>
                <Link className='bg-black rounded p-4 hover:bg-gray-600' to = '/quizStatistics'> Quiz Statistics</Link>
            </div>
        </div>
    );
};

export default About;