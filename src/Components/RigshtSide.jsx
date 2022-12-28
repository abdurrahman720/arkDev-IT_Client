import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSide from './LeftSide';

const RightSide = () => {
    const singleCourse = useLoaderData();
    const { _id, instructor, title, description, price, image_url, rating } = singleCourse;

    return (
        <div className="grid grid-rows-1 md:grid-cols-3">
            <div>
                <LeftSide></LeftSide>
            </div>

            <div className="border-2  md:border-none  p-5 pt-1 bg-slate-300 row-span-2 md:col-span-2  ">
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
        </div>

    );
};

export default RightSide;