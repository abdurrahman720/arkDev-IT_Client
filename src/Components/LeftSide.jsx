import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/ContextData';

const LeftSide = () => {
    const { coursesIn } = useContext(UserContext);
    return (
        <div>
            {
                coursesIn.map((course) => <Link className='border shadow-xl hover:bg-slate-300 focus:bg-slate-300 md:p-5 block h-full  w-full' to={`/course/${course._id}`}>
                    <div className="flex items-center ">
                        <img className="w-10  md:w-24 m-2 rounded" src={course.image_url} alt="" />
                        <p className="mx-5 md:text-2xl font-bold">{course.title}</p>
                    </div>

                </Link>)
           }
        </div>
    );
};

export default LeftSide;