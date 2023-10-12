import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';
import { ToastContainer, toast } from 'react-toastify';



const Quizes = () => {
    const quizesData = useLoaderData();
    const quizes = quizesData.data;
    const questions = quizes.questions;
    let i = 0;
    
    console.log(quizes);
    return (
           <div  className='flex flex-col items-center w-full justify-center' >
                
                     <div className='bg-red-500 w-3/4 rounded '>
                        <h1 className='text-2xl font-bold p-4 text-white'>Quiz of {quizes.name} </h1>
                    </div>
                {
                  questions.map(question => {
                    i++;
                   return <SingleQuiz q = {question} key={question.id} no = {i}></SingleQuiz>}
                  
                   )  
                }
                
           </div>
           
       
        
    );
};

export default Quizes;