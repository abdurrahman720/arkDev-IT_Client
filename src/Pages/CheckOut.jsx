import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/ContextData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { getStoredCart } from '../utilities/fakedb';

const CheckOut = () => {
    const { selectedCourse, setSelectedCourse } = useContext(UserContext);
    const navigate = useNavigate();
    // const [courses, setCourses] = useState([]);
    if (selectedCourse === null) {
        return <div>Please buy course again</div>
    }
    else {
        const { image_url, title, description, price } = selectedCourse;
        const buy = () => {

            toast.success('Course purchased success');
    
            setTimeout(() => {
                navigate('/home');
            }, 2000);
        }
        return (
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-full' src={image_url} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={buy} className="btn btn-primary">{price}</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        );
       }
    // useEffect(() => {
    //     fetch('http://localhost:5222/allcourses')
    //         .then(response => response.json())
    //         .then(data => setCourses(data))

    // }, [])


    // useEffect(() => {
    //     const getStoredCourse = getStoredCart();

    //     for (const id in getStoredCourse) {
    //         const addedCourse = courses.find(course => course._id === id);
    //         console.log(addedCourse);
    //         // setSelectedCourse(addedCourse);
    //     }



    // }, [courses, selectedCourse])


   


    };

export default CheckOut;