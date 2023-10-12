import React, { useContext } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { ringContext } from '../Root/Root';


const Quizstat = () => {
    const contextData = useContext(ringContext);
    const data = [...contextData];
    

    return (
        <div className='flex justify-center w-full h-auto mx-auto my-40'>
            <div>
                <BarChart width={630} height={450} data={data}>
                
                <XAxis dataKey="name" />
                    <YAxis />
                <Tooltip />
                <Legend></Legend>
                <Bar dataKey="id" fill="#8884d8" />
                    <Bar dataKey="total" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Quizstat;