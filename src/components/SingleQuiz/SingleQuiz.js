import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleQuiz = ({q, no, }) => {
    const options = q.options;
    const [ansOption, setOption] = useState(false);

    const ansOptionFun = () => {
        if(ansOption === false){
        setOption(true);
        }
        else{
            setOption(false);
        }

        console.log(ansOption);
    }

    const correctAnsCheck = (correctAns, qCorrectAns) => {
            
        if(correctAns === qCorrectAns){
           
            toast.success('Your Answer is Correct!', {
                position: "top-center",
                autoClose: 5000,
                
                });       
               
        }
        else{
            toast.error('Your Answer was incorrect!', {
                position: "top-center",
                autoClose: 5000,
                }); 
        }
       
    }


    return (
        
            <div className='h-auto p-5 w-3/4 my-10 border border-amber-300 rounded'>
                   <div className={ansOption?'flex justify-between mb-10':'flex justify-end mb-10'}>

                        <div className={ansOption? '': 'hidden'}>
                                <div className='bg-green-500 py-3 px-4 rounded text-white'>
                                    {q.correctAnswer}
                                </div>
                        </div>

                        <button onClick={ansOptionFun} className='flex justify-evenly w-36 rounded bg-red-500 text-white py-3 px-2'> 
                            { ansOption? 'Hide Answer':'Show Answer' }
                            <p className='pl-1'>
                                {
                                    ansOption? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                
                                }
                            </p>
                        </button>
                   </div>
                   <p className='text-xl font-bold'> Quiz {no} : {q.question.replace('<p>', '').replace('</p>', '')}</p> 
                   <div className='grid grid-cols-2 gap-y-5 gap-x-2 mt-14 mb-5 mx-auto justify-items-center'>
                   {
                    options.map(

                       (option, idx)  => { 
                            return  (
                                <div  key = {idx} className='border rounded w-3/4 border-gray-500 py-4 hover:bg-green-300  pl-5 flex justify-start'>
                                    <label  className='cursor-pointer'> 
                                    <input onClick={()=> {correctAnsCheck (option, q.correctAnswer)}} type="radio" name="quiz" id="" />  {option}
                                    
                                    </label>
                                    
                                    <ToastContainer/>
                                </div>
                            )
                        }
                    )
                   }   
                   </div>
            </div>
        
    );
};

export default SingleQuiz;