import React from 'react';
import Footer from '../Shared/Footer/Footer';
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <div>
            <h1 className = "text-danger">404 Page Not Found</h1>
        </div>
        <div className="body">
        <Footer></Footer>
        </div>
        </div>
    );
};

export default NotFound;