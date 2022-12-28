import React, { useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import LeftSide from '../Components/LeftSide';
import { UserContext } from '../Context/ContextData';

const Course = () => {
    const { coursesIn, setCoursesIn } = useContext(UserContext);

    const courseData = useLoaderData();
    setCoursesIn(courseData);

    return (
        <div className='grid grid-rows-1 md:grid-cols-3 gap-0'>
            <div><LeftSide></LeftSide></div>

            <div className="border-2 shadow p-5 bg-slate-300 row-span-2 md:col-span-2 flex justify-center items-center">

                <h2 className='text-3xl text-center '>Click any course for details</h2>
                
            
            </div>
        </div>
    );
};

export default Course;