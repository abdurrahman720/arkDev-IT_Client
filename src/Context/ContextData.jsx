import { createContext, useEffect, useState } from "react";
import React from 'react';

export const UserContext = createContext();



const ContextData = ({ children }) => {
    
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5222/courses')
            .then((response) => response.json())
            .then(data => setCourses(data))
    },[])

    const contextData = { courses };

    return (
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    );
};

export default ContextData;