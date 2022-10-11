import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const loadData = useLoaderData();
    const data = loadData.data;

    return (
        <div className='mt-3'>
            <LineChart width={400} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey='total' />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#8884d8" />

            </LineChart>
        </div>
    );
};

export default Statistics;