import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import LeftSide from './LeftSide';
import { BsStarFill } from 'react-icons/bs';
import { UserContext } from '../Context/ContextData';
import ReactToPrint from 'react-to-print';
import { addToDb } from '../utilities/fakedb';


const RightSide = () => {
    const singleCourse = useLoaderData();
    const { _id, instructor, title, description, price, image_url, rating } = singleCourse;
    const { selectedCourse, setSelectedCourse } = useContext(UserContext);

    const navigate = useNavigate();
    const ref = useRef();

    const handleCheckout = (singleCourse) => {
        const course = singleCourse;
        // console.log(course);
        setSelectedCourse(course);
        addToDb(course._id);

        console.log(course._id);
       
    }
    

    return (
        <div className="grid grid-rows-1 md:grid-cols-3">
            <div>
                <LeftSide></LeftSide>
            </div>

            <div ref={ref} className="border-2  md:border-none  p-5 pt-1 bg-slate-300 row-span-2 md:col-span-2  ">
                <div className="border-2 p-2">
                <div className="flex justify-center">
                <div>
                    <img className='w-56 mx-auto' src={image_url} alt="" />
                            <div className='flex'>
                                <p className="text-3xl font-bold">{title}</p>
                                <ReactToPrint trigger={()=> <button className="p-2 mx-5 rounded bg-white border">print</button>} content={()=> ref.current} ></ReactToPrint>
                            
                            </div>
                </div>  
                </div>
                <div>
                    <p className="font-bold">
                        {description}
                    </p>
               </div>
               </div>
                <div className="border-2 p-2 flex justify-between">
                    <div className='flex items-center'>
                        <img className='w-10 rounded' src={instructor.in_image} alt="" />
                        <p className="text-xl font-bold">
                            {instructor.name}
                        </p>
                    </div>
                    <div>
                        <p className="text-xl ">
                        Rating: {rating } <BsStarFill/> 
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    
                    <Link to={`/checkout/${_id}`}>
                    <button onClick={()=>handleCheckout(singleCourse)} className='border-2 my-5 bg-white font-bold text=black p-5 hover:bg-slate-800 hover:text-white hover:translate-y-1 hover:shadow-xl'>Get Premium Access for ${price} </button>
                    </Link>
                    
                </div>
            </div>
        </div>

    );
};

export default RightSide;