import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import Quizstat from "../QuizStatistics/Quizstat";
import { ringContext } from "../Root/Root";
import { useContext } from "react";
import { quizesContext } from "../Quizes/Quizes";




const Home = () => {
   
    const quizs = useContext(ringContext);

    return (
        <div className="mb-36">
            <div className="mb-10 mt-20 md:max-xl:px-5 max-md: px-10">
                <h1 className="text-3xl font-bold my-5">¡Oh My Quiz¡ - Test Your <br /> Frontend Skill</h1>
                <p className="text-xl">If you get a high score, you probably spend way too much time on Learning <br /> this Languages. Keep Learning.</p>
            </div>
           <div className="flex justify-between mx-20 mb-20 md:max-xl:grid grid-cols-2 gap-10 mx-0! max-md:flex-col mb-5! ">
                {
                    quizs.map(quiz => <Quiz image ={quiz.logo} name ={quiz.name} id={quiz.id} total = {quiz.total} key={quiz.id} > </Quiz> )

                }   
           </div>
        </div>
        
    );
};

export default Home;