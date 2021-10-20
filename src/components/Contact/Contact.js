import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';
import Footer from '../Shared/Footer/Footer';
import './Contact.css'
const Contact = () => {
    const [numbers, setNumbers] = useState([])
    useEffect(() => {
        fetch('./fakedata.json')
        .then (res => res.json())
        .then (data => setNumbers(data));
    },[])
    return (
        <div>
        {/* Contact Numbers */}
        <div className="container">
        <div className="row">
                {
                    numbers.map((number) => (<div className = "col-lg-4 p-2"><div className = "contact-box">
                    <Phone key = {number.id}
                        number={number}></Phone>
                        </div></div>))
                }
            </div>
        </div>
            <h2>Emergency Number</h2>
            <h4 className = "pb-5">02 897651</h4>
    <Footer></Footer>
    </div>
    );
};

export default Contact;