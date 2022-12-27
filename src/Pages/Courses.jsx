import React, { useContext } from 'react';
import { CoursesCard } from '../Components/CoursesCard';
import { UserContext } from '../Context/ContextData';

const Courses = () => {
    const {courses} = useContext(UserContext)
    return (
        <CoursesCard courses={courses}></CoursesCard>
    );
};

export default Courses;