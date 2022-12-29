import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/ContextData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { getStoredCart } from '../utilities/fakedb';

const CheckOut = () => {
    const [courses, setCourses] = useState([]);
     const { selectedCourse, setSelectedCourse } = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5222/allcourses')
            .then(response => response.json())
            .then(data => setCourses(data))
        
    }, [])
    
   
    useEffect(() => {
        const getStoredCourse = getStoredCart();
        for (const id in getStoredCourse) {
            const addedCourse = courses.find(course => course._id === id);
            console.log(addedCourse);
            if (addedCourse) {
                setSelectedCourse(addedCourse);
            }
           
        }
        
        // setSelectedCourse(getStoredCourse)
        
    }, [courses])

  
    const { image_url, title, description, price } = selectedCourse;

    

    const navigate = useNavigate();

    
   



    const buy = () => {
        
        toast.success('Course purchased success');
        
       setTimeout(() => {
        navigate('/home'); 
       }, 2000);
        
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className='w-full' src={image_url} alt="Album"/></figure>
  <div className="card-body">
                <h2 className="card-title">{title }</h2>
                <p>{description }</p>
    <div className="card-actions justify-end">
                    <button onClick={buy} className="btn btn-primary">{price}</button>
                    <ToastContainer />
    </div>
  </div>
</div>
    );
};

export default CheckOut;