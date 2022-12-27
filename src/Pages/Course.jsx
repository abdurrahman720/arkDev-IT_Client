import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const courses = useLoaderData();
    return (
        <div>
            {courses.length}
        </div>
    );
};

export default Course;