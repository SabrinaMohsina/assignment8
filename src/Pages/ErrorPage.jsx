import React from 'react';
import { useRouteError } from 'react-router';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const ErrorPage = () => {
    const error =useRouteError()
    return (
        <>
       ('')
        <Navbar></Navbar>
        <h1>{error.messege}</h1>
        <Footer></Footer>
        </>
    );
};

export default ErrorPage;