import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/ContextData';

const LeftSide = () => {
    const { coursesIn } = useContext(UserContext);
    return (
        <div>
            {
                coursesIn.map((course) => <Link className='border p-5 block w-full' to={`/course/${course._id}`}>
                    <div className="flex items-center ">
                        <img className="w-14 rounded" src={course.image_url} alt="" />
                        <p className="mx-5">{course.title}</p>
                    </div>

                </Link>)
           }
        </div>
    );
};

export default LeftSide;