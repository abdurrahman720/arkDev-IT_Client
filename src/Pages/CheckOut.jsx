import React, { useContext } from 'react';
import { UserContext } from '../Context/ContextData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const { selectedCourse } = useContext(UserContext);
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