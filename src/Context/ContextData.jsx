import { createContext, useEffect, useState } from "react";
import React from 'react';

export const UserContext = createContext();



const ContextData = ({ children }) => {
    
    const [coursesName, setCoursesName] = useState([]);
    const [coursesIn, setCoursesIn] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5222/courses')
            .then((response) => response.json())
            .then(data => setCoursesName(data))
    },[])

    const contextData = { coursesName, coursesIn, setCoursesIn };

    return (
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    );
};

export default ContextData;