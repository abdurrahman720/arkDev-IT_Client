import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSide from './LeftSide';

const RightSide = () => {
    const singleCourse = useLoaderData();

    return (
        <div className="grid grid-cols-3">
            <div>
            <LeftSide></LeftSide>
        </div>

<div className="border col-span-2  bg-slate-300 ">
    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt recusandae doloribus illo cupiditate, voluptatem veritatis dolores omnis dolor saepe culpa corporis? Consequuntur voluptatibus soluta odio fugit molestiae, natus sunt.</h2>
    {
        singleCourse.title
    }
</div>
        </div>
       
    );
};

export default RightSide;