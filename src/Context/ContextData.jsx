import { createContext, useEffect, useState } from "react";
import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from "../Authentication/Firebase.config";

export const UserContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const ContextData = ({ children }) => {

    const [coursesName, setCoursesName] = useState([]);
    const [coursesIn, setCoursesIn] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
        fetch('https://ark-dev-it-server.vercel.app/courses')
            .then((response) => response.json())
            .then(data => setCoursesName(data))
    }, [])

    const [user, setUser] = useState(null);
    const [loading, isLoading] = useState(true);

    const googleSign = () => {
        isLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubSign = () => {
        isLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const emailSignIn = (email, password) => {
        isLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const emailSignUp = (email, password) => {
        isLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateProf = (name, PhotoURL) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: PhotoURL })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user:', currentUser);
            setUser(currentUser);
            isLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])



    const contextData = { coursesName, coursesIn, setCoursesIn, selectedCourse, setSelectedCourse, loading, isLoading, googleSign, logOut, emailSignIn, emailSignUp, updateProf, user, githubSign };

    return (
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    );
};

export default ContextData;