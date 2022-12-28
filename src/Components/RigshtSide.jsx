import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSide from './LeftSide';
import { BsStarFill } from 'react-icons/bs';


const RightSide = () => {
    const singleCourse = useLoaderData();
    const { _id, instructor, title, description, price, image_url, rating } = singleCourse;

    return (
        <div className="grid grid-rows-1 md:grid-cols-3">
            <div>
                <LeftSide></LeftSide>
            </div>

            <div className="border-2  md:border-none  p-5 pt-1 bg-slate-300 row-span-2 md:col-span-2  ">
                <div className="border-2 p-2">
                <div className="flex justify-center">
                <div>
                    <img className='w-56 mx-auto' src={image_url} alt="" />
                    <p className="text-3xl font-bold">{title}</p>
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
                    
                    <button className='border-2 my-5 bg-white font-bold text=black p-5 hover:bg-slate-800 hover:text-white hover:translate-y-1 hover:shadow-xl'>Buy Now for ${price} </button>
                    
                </div>
            </div>
        </div>

    );
};

export default RightSide;