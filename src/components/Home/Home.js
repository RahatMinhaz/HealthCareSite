import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import Footer from '../Shared/Footer/Footer';
import './Home.css';
const Home = () => {
    const[specialists, setSpecialists] = useState([])
    const {user} = useAuth();
    useEffect(() => {
        fetch('./preview.json')
        .then(res => res.json())
        .then(data => setSpecialists(data));
    },[])
    return (
        <div>
            <h2 className="mt-3">{user.displayName}</h2>
            <h1 className = "pt-3 pb-5">Welcome to <span className = "text-primary">Amity</span> Hospital!</h1>
            <Banner></Banner>
        <div className = "container">
            
            <h1 className="mb-4">Here's Few of our Experts</h1>
            <div className="services">
                
                <div className="row">
                    {
                        specialists.map((specialist) => (<div className = "col-md-6"><div className="info-box">
                            <Service key={specialist.id}
                                specialist={specialist}></Service> 
                            </div></div>))
                    }
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Home;