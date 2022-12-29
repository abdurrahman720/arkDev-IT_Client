// use local storage to manage cart data
const addToDb = id =>{
    let courseCart = {};

    //get the shopping cart from local storage
    // const storedCart = localStorage.getItem('course-cart');
    // if(storedCart){
    //     courseCart = JSON.parse(storedCart);
    // }

    // // add quantity
    // const quantity = courseCart[id];
    // if(quantity){
    //     const newQuantity = quantity + 1;
    //     courseCart[id] = newQuantity;
    // }
    // else{
        courseCart[id] = 1;
    // }
    localStorage.setItem('course-cart', JSON.stringify(courseCart));
}

const getStoredCart = () =>{
    let courseCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('course-cart');
    if(storedCart){
        courseCart = JSON.parse(storedCart);
    }
    return courseCart;
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('course-cart');
    if(storedCart){
        const courseCart = JSON.parse(storedCart);
        if(id in courseCart){
            delete courseCart[id];
            localStorage.setItem('course-cart', JSON.stringify(courseCart));
        }
    }
}

const deletecourseCart = () =>{
    localStorage.removeItem('course-cart');
}

export {
    addToDb, 
    getStoredCart,
    removeFromDb,
    deletecourseCart
}