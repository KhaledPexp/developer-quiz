import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';
import { ToastContainer, toast } from 'react-toastify';




const Quizes = () => {
    const quizesData = useLoaderData();
    const quizes = quizesData.data;
    const questions = quizes.questions;
    let i = 0;
    let correctAnswer = 0;

    const [resultShow, setValue] = useState(false);
    const [totalCorrect, setResult ] = useState(0);
    
    // const corAns = [];

    const correctAnsCheck = (correctAns, qCorrectAns) => {
            
      if(correctAns === qCorrectAns){
         
          toast.success('Your Answer is Correct!', {
              position: "top-center",
              autoClose: 5000,
              
              });       
        correctAnswer++;
        
        // setCorectAnsValue(correctAnswer);
        
      }
      else{
          toast.error('Your Answer was incorrect!', {
              position: "top-center",
              autoClose: 5000,
              }); 
      }
     
  }
  const  result = () => {
    setValue(true);
    console.log(correctAnswer);
    setResult(correctAnswer)
  }
    
  // const checkResult = () => {
  //   let i =0;
  //   const selected = document.getElementsByName('sQuiz');

  //   if (selected[i].checked ){
  //     console.log( selected[i].value);
  //   }
  //   else
  //     console.log('not found');

  //   questions.map (q => {corAns[i] = q.correctAnswer;
                    
  //                   if (selected[i].checked ){
  //                     console.log( selected[i].value);
  //                   }
  //                   i++;
  //   })
  
  //   console.log(corAns, i);
  // }

   
    return (
           <div  className='flex flex-col items-center w-full justify-center' >
                
                     <div className='bg-red-500 w-3/4 rounded mt-10'>
                        <h1 className='text-2xl font-bold p-4 text-white'>Quiz of {quizes.name} </h1>
                    </div>
                {
                  questions.map(question => {
                    i++;
                   return <SingleQuiz q = {question} key={question.id} no = {i} correctAnsCheck = {correctAnsCheck}></SingleQuiz>}
                  
                   )  
                }
                <div onClick={result} className='bg-black w-1/4 rounded mt-5 mb-2 hover:bg-red-500 cursor-pointer'>
                        <h1 className='text-2xl font-bold p-4 text-white'>Check Result</h1>
                </div>
                <div  className={resultShow? ' w-1/4 rounded border border-gray-300 mt-10 animate-bounce ease-in duration-300 ':' w-1/4 rounded border border-gray-300 mt-5 hidden'}>
                        <h1 className='text-2xl font-bold p-4'>You Got {totalCorrect} out of {questions.length}</h1>
                </div>
           </div>
           
       
        
    );
};

export default Quizes;