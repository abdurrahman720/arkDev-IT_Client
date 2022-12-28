import React, { useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import LeftSide from '../Components/LeftSide';
import RigshtSide from '../Components/RigshtSide';
import { UserContext } from '../Context/ContextData';

const Course = () => {
    const { coursesIn, setCoursesIn } = useContext(UserContext);

    const courseData = useLoaderData();
    setCoursesIn(courseData);

    return (
        <div className='grid grid-cols-3 gap-0'>
            <div><LeftSide></LeftSide></div>
            <div className="col-span-2">

                <Outlet></Outlet>
            
            </div>
        </div>
    );
};

export default Course;