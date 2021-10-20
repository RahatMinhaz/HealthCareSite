import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Service from '../Service/Service';
import Footer from '../Shared/Footer/Footer';
import './Services.css'
const Services = () => {
    const [specialists,setSpecialists] = useState([]);
    useEffect(() => {
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setSpecialists(data));
    },[])
    return (
        <div>
            <div className = "container">
                <div className = "service">
                    <h2>Here are Some of Our Specialists</h2>
                    <div className="row">
                        {
                            specialists.map((specialist) => (<div className = "col-lg-4"><div className="mdc">
                                <Service key ={specialist.id}
                                specialist ={specialist}></Service>
                                <PrivateRoute><NavLink to={`/doctors/${specialist.id}`}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                }}
                                    >
                                       <button className = "mt-5 btn-edit btn btn-primary">See Details</button> 
                                </NavLink></PrivateRoute>
                                </div></div>))
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;