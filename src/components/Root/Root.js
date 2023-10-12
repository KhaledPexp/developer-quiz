import React, { createContext } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';

export const ringContext = createContext([]);


const Root = () => {
    const quizData = useLoaderData();
    const quizs = quizData.data;

    return (
        <div>
            <ringContext.Provider value={quizs}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </ringContext.Provider>
        </div>
    );
};

export default Root;